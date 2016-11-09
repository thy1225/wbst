$(document).ready(function(){
	$("#navTSMC .dropdown").hover(function(){
							if($(".navbar-toggle").is(":visible")){return;}
							$(this).find('.dropdown-toggle').dropdown("toggle");
						},
						function(){
							if($(".navbar-toggle").is(":visible")){return;}
							if($(this).hasClass("open")){
								$(this).find('.dropdown-toggle').dropdown("toggle");
							}
						});

	$('#navTSMC').on('show.bs.dropdown', function (e) {
		if($(".navbar-toggle").is(":visible")){return;}
	  	e.relatedTarget.parent().find(".dropdown-menu").fadeIn(400,function(){$(this).removeAttr("style")});//.fadeIn();
	});

	setLangSwitchURL();
});

function showAlert(to,idName,type,msg){
	var ele = document.getElementById(idName);
	if (ele) {
		return;
	}
	var alertStr='<div id='+idName+' class="alert alert-'+type+' alert-dismissible" role="alert" style="display:none;"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+msg+'</div>';
	$(to).prepend(alertStr);
	$("#"+idName).fadeIn();
	//return alertStr;
}

function selectBoxValidation(idName,msg){
	if($("#"+idName).val()==0){
		$("#"+idName).addClass("error");
		var ele = document.getElementById(idName+"-error");
		if (ele) {
			return;
		}
		var errStr='<label id="'+idName+'-error" class="error" for="input_groupTitle">'+msg+'</label>';
		$("#"+idName).after(errStr);

		$("#"+idName).change(function(){
			if($(this).val()!=0){
			    $(this).removeClass("error");
			    $("#"+idName+"-error").remove();
			}
		});
	}
}

function popupCenter(url, title, w, h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
} 

function getFormattedDate(date) {
	var year = date.getFullYear();
	var month = (1 + date.getMonth()).toString();
	month = month.length > 1 ? month : '0' + month;
	var day = date.getDate().toString();
	day = day.length > 1 ? day : '0' + day;
	return year + '/' + month + '/' + day;
}

function setLangSwitchURL(){
	var bookingPages = ["bookOnline_complete.html",
						"bookOnline_form.html"];
	var defaultBookingPage = "bookOnline_pickDate.html";
	var langHerfStr = "";
	if(window.location.href.indexOf("/en/")>=0){
		//switchTo:ch
		langHerfStr = window.location.href.replace("/en/","/ch/");
	}else{
		//switchTo:en
		langHerfStr = window.location.href.replace("/ch/","/en/");
	}
	for(key in bookingPages){
		if(langHerfStr.indexOf(bookingPages[key]) >=0 ){
			langHerfStr = langHerfStr.replace(bookingPages[key],defaultBookingPage);
			break;
		}
	}
	$("#navBtn_lang a").attr("href",langHerfStr);
}

