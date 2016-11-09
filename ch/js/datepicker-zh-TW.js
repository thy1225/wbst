/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Ressol (ressol@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional[ "zh-TW" ] = {
	closeText: "關閉",
	prevText: "&#x3C;上個月",
	nextText: "下個月&#x3E;",
	currentText: "今天",
	monthNames: [ "1月","2月","3月","4月","5月","6月",
	"7月","8月","9月","10月","11月","12月" ],
	monthNamesShort: [ "1月","2月","3月","4月","5月","6月",
	"7月","8月","9月","10月","11月","12月" ],
	dayNames: [ "星期日","星期一","星期二","星期三","星期四","星期五","星期六" ],
	dayNamesShort: [ "週日","週一","週二","週三","週四","週五","週六" ],
	dayNamesMin: [ "日","一","二","三","四","五","六" ],
	weekHeader: "週",
	dateFormat: "yy/mm/dd",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: true,
	yearSuffix: "年" };
datepicker.setDefaults( datepicker.regional[ "zh-TW" ] );

return datepicker.regional[ "zh-TW" ];

} ) );
