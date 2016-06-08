function doClick(e) {
	
var mainwindow = Alloy.createController('mainwindow').getView();
$.splash.close();
mainwindow.open();

}
$.splash.open();