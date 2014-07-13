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
		var parentElement = $(this),
		    key = parentElement.attr("data-tran"),
		    elementType = 'value';
		console.log(parentElement.prop('tagName'));
		
		/* 
		For all html elements of type input
		*/
		if(parentElement.prop('tagName').toLowerCase() == 'input'){
		   elementType = ( parentElement.prop('type').toLowerCase() == 'button' ) ? 'value' : 'placeholder';
		   parentElement.prop(elementType, tranTable[key]);
		}
		/*
		For all other html elements
		*/
		else{
		    parentElement.text(tranTable[key]);	
		}
	})// $ each ends
});//ready function ends




/*


*/







