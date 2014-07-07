var activeLanguage = "hi-in";

//hi-in mimic
var hi_in = {
	"title": "यह शीर्षक है",
	"subtitle": "यह उपशीर्षक है",
	"introduction": "यह शुरूआत है",
	"username": "यह उपयोगकर्ता नाम है",
	"username-placeholder": "उपयोगकर्ता नाम दर्ज करें",
	"submit": "भेजें"
};

var en_us = {
	"title": "This is title",
	"subtitle": "This is subtitle",
	"introduction": "This is introduction",
	"username": "This is username",
	"username-placeholder": "Enter username",
	"submit": "Submit"
};


$(document).ready(function(){
	var tranTable = hi_in;

	$("[data-tran]").each(function(){
		var parentElement = $(this).prev();
		var key = parentElement.attr("data-tran");
		console.log(parentElement.prop('tagName'));

		if(parentElement.prop('tagName') == 'P'){
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'SPAN'){
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'H1'){
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'LABEL'){
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'BUTTON'){
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'INPUT'){
			console.log("setting p values = " + key + " => " + tranTable[key]);
			
			if(parentElement.prop('type').toLowerCase() == 'text')
				parentElement.attr('placeholder', tranTable[key]);
			
			if(parentElement.prop('type').toLowerCase() == 'button')
				parentElement.prop('value', tranTable[key]);
		}


		})// $ each ends
});//ready function ends




/*


*/







