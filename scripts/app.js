


var RocknCoder = RocknCoder || {};
RocknCoder.Pages = RocknCoder.Pages || {};
// put all of the page events into one string
RocknCoder.PageEvents = "pagebeforeshow pageshow pagebeforechange pagechange pagebeforehide pagehide";

// the kernel remains unchanged
RocknCoder.Pages.Kernel = function (event) {
	var that = this,
		eventType = event.type,
		pageName = $(this).attr("data-rockncoder-jspage");
	if (RocknCoder && RocknCoder.Pages && pageName && RocknCoder.Pages[pageName] && RocknCoder.Pages[pageName][eventType]) {
		RocknCoder.Pages[pageName][eventType].call(that);
	}
};

RocknCoder.Pages.Events = (function () {
	$("div[data-rockncoder-jspage]").on(
		RocknCoder.PageEvents,
		RocknCoder.Pages.Kernel
	);
}());

RocknCoder.Pages.Evs = (function () {
	// we bind to the document's pageload event
	$(document).bind(
		'pageload',
		function (event, obj) {
			console.log("event = " + event.type);
			$("div[data-rockncoder-jspage]")
				// to make sure we aren't double hooking events clear them all
				.off(RocknCoder.PageEvents)
				// then hook them all  (the newly loaded page is in DOM at this point)
				.on(RocknCoder.PageEvents, RocknCoder.Pages.Kernel);
		}
	);
}());

RocknCoder.Pages.page1 = (function () {
	var pageshow = function () {
		},
		pagehide = function () {
		};
	return {
		pageshow: pageshow,
		pagehide: pagehide
	};
}());

// this method's HTML gets loaded dynamically
RocknCoder.Pages.page2 = (function () {
	var pageshow = function () {
			alert("page2 show");
		},
		pagebeforeshow = function () {
			// dynamically load the script for page 3
			// if it hasn't already been loaded
			if (!RocknCoder.Pages.page3) {
				$.getScript("scripts/page3.js");
			}
			alert("page2 beforeshow");
		},
		pagehide = function () {
			alert("page2 hide");
		};
	return {
		pagebeforeshow: pagebeforeshow,
		pageshow: pageshow,
		pagehide: pagehide
	};
}());

