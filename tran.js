     $(document).ready(function () {
        //Call the translate() method
        tran.translate();
    }); 

    var tran = {
        translate: function () {
            var activeLanguage = 'hi-in',
                jsonLangFile = activeLanguage + '.json';

            var jqxhr = $.getJSON(jsonLangFile)

               .done(function (data) {
                   tran.populateText(data);
               })//end done

            //Handle failures
              .fail(function () {
                  console.log("Oops!! There was an error in processing the request");
              }); //end fail and this also ends the getJSON method

        }, //translate function ends

        populateText: function (data) {
            $("[data-tran]").each(function () {
                var parentElement 		= $(this),
            		    key 		= parentElement.attr("data-tran"),
            		    elementType 	= '',
                            derivedElementType  = '';
                /* 
                For all html elements of type input
                */
                if (parentElement.prop('tagName').toLowerCase() == 'input') {
                    elementType = parentElement.prop('type').toLowerCase();
                    derivedElementType = (elementType == 'button' || elementType == 'submit') ? 'value' : 'placeholder';

                    //If the value for the key does not exist in the language file, the key name is returned
                    if (data[key] == undefined) {
                        parentElement.prop(derivedElementType, key);
                    }

                    //Get the value of key from the language file
                    else parentElement.prop(derivedElementType, data[key]);
                }
                /*
                For all other html elements
                */
                else {
                    parentElement.text(data[key]);
                }
            })//$.each ends
        } //populateText function ends
    };




/*


*/







