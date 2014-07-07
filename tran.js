var activeLanguage = "hi-in";

//hi-in mimic
var tranTable = {
	"title": "यह शीर्षक है",
	"subtitle": "यह उपशीर्षक है",
	"introduction": "यह शुरूआत है",
	"username": "यह उपयोगकर्ता नाम है",
	"username-placeholder": "उपयोगकर्ता नाम दर्ज करें",
	"submit": "भेजें"
};


$(document).ready(function(){
	$("[data-tran]").each(function(){
		var parentElement = $(this).prev();
		var key = parentElement.attr("data-tran");
		console.log(parentElement.prop('tagName'));

		if(parentElement.prop('tagName') == 'P'){
			console.log("setting p values = " + key + " => " + tranTable[key]);
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'SPAN'){
			console.log("setting p values = " + key + " => " + tranTable[key]);
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'H1'){
			console.log("setting p values = " + key + " => " + tranTable[key]);
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'LABEL'){
			console.log("setting p values = " + key + " => " + tranTable[key]);
			parentElement.text(tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'INPUT'){
			console.log("setting p values = " + key + " => " + tranTable[key]);
			parentElement.attr('placeholder', tranTable[key]);
		}
		if(parentElement.prop('tagName') == 'BUTTON'){
			console.log("setting p values = " + key + " => " + tranTable[key]);
			parentElement.text(tranTable[key]);
		}


		})// $ each ends
});//ready function ends


/*


*/







