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
		if(parentElement.prop('tagName') == 'P'){
			console.log("setting p values = " + tranTable.title);
			parentElement.text(tranTable.title);
		}
	})// $ each ends
});//ready function ends


/*


*/







