var defaultLangFile     = "en-us.json",
    arrDefaultLang      = [],
    defaultLangValues   = {};

    //Call the translate() method
    $(document).ready(function () {
        tran.translate();
    });

    var tran = {
        //Load default language file(english)
        getDefaultFile: function () {
            return $.getJSON(defaultLangFile).pipe(function (defaultContents, status, jqXHR) {
                return defaultContents;
            });
        },

        //Store the contents of default language file in an array
        storeDefaultFileContents: function (defaultContents) {
            arrDefaultLang = defaultContents;
            return arrDefaultLang;
        },

        //Translate language
        translate: function () {
            var activeLangFile = 'hi-in.json';
            
            //Call the ajax function to load the json lang file
            var jqxhr = $.getJSON(activeLangFile);

            //Done function for successful response
            jqxhr.done(function (data) {
                // Call the function populateText to set the language text
                tran.populateText(data);
            }); //end done

            //Handle failures
            jqxhr.fail(function () {
                console.log("Oops!! There was an error in processing the request");
            }); //end fail

        }, //end translate

        //Populate the language text
        populateText: function (data) {
            $("[data-tran]").each(function () {
                var parentElement = $(this),
            		    key = parentElement.attr("data-tran"),
            		    elementType = '',
                        derivedElementType = '',
                        labelText = '';
                /* 
                For all html elements of type input
                */
                if (parentElement.prop('tagName').toLowerCase() == 'input') {
                    elementType = parentElement.prop('type').toLowerCase();
                    derivedElementType = (elementType == 'button' || elementType == 'submit') ? 'value' : 'placeholder';
                    /*
                    If the value for the key does not exist in the selected language file,
                    get the contents from the default language file(english)
                    */
                    if (data[key] == undefined) {
                        
                        var fnGetDefaultFile = tran.getDefaultFile(),
                            defaultLangValues = {};

                        fnGetDefaultFile.done(function (defaultContents) {
                            defaultLangValues = tran.storeDefaultFileContents(defaultContents);

                           //Get the value if the key exists, else set it to key
                            labelText = (defaultLangValues[key] == undefined) ? key : defaultLangValues[key];
                            parentElement.prop(derivedElementType, labelText);
                        });// end done function
                    }
                    else {
                        labelText = data[key];
                        parentElement.prop(derivedElementType, labelText);
                    }
                }
                /*
                For all other html elements
                */
                else {
                    /*
                    If the value for the key does not exist in the selected language file,
                    get the contents from the default language file(english)
                    */
                    if (data[key] == undefined) {
                        var fnGetDefaultFile = tran.getDefaultFile(),
                            defaultLangValues = {};

                        fnGetDefaultFile.done(function (defaultContents) {
                            defaultLangValues = tran.storeDefaultFileContents(defaultContents);

                            //Get the value if the key exists, else set it to key
                            labelText = (defaultLangValues[key] == undefined) ? key : defaultLangValues[key];
                            parentElement.text(labelText);
                        });
                    }
                    /*
                     Populate the language text from the selected language file
                    */
                    else {
                        labelText = data[key];
                        parentElement.text(labelText);
                    } 
                }
            })// end each
        } //end populateText
    };
