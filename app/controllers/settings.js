// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function openmain()
{
	
	var mainwindow = Alloy.createController('mainwindow').getView();
	$.settings.close();
	mainwindow.open(); 
	
}
$.settings.open();