
var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};

// this page is loaded dynamically as well as its HTML
RocknCoder.Pages.page3 = (function () {
	var pageshow = function () {
			alert("page3 show");
		},
		pagebeforeshow = function () {
			alert("page3 beforeshow");
		},
		pagehide = function () {
			alert("page3 hide");
		};
	return {
		pagebeforeshow: pagebeforeshow,
		pageshow: pageshow,
		pagehide: pagehide
	};
}());
