// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openmain()
{
	
	var mainwindow = Alloy.createController('mainwindow').getView();
	$.about.close();
	mainwindow.open(); 
	
}
$.about.open();