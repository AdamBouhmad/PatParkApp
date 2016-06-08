// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function doNews(e) {
	
var news = Alloy.createController('news').getView();

$.drawer.close();
news.open();

}

function doAbout(e) {
	
var about = Alloy.createController('about').getView();

$.drawer.close();
about.open();

}

function doEvents(e) {
	
var events = Alloy.createController('events').getView();

$.drawer.close();
events.open();

}

function doHistoryNature(e) {
	
var historynature = Alloy.createController('historynature').getView();

$.drawer.close();
historynature.open();

}

function doLandmarks(e) {
	
var landmarks = Alloy.createController('landmarks').getView();

$.drawer.close();
landmarks.open();

}

function doSettings(e) {
	
var settings = Alloy.createController('settings').getView();

$.drawer.close();
settings.open();

}

function report(evt) {
    Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}

function toggle(e) {
    //var fn = 'toggle' + e.source.title + 'Window';
    //$.drawer[fn]();
    $.drawer.toggleLeftWindow();
    //Testing new window creation for LeftDrawer
}

$.drawer.open();

//$.mainwindow.open();


