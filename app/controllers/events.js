// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var image = Titanium.UI.createImageView({
        image:'backarrow.png',
        width:100,
        height:'100',
        });

if(Titanium.Platform.displayCaps.platformWidth > 480)
{
	
	//$.menu_button.width = '10%';
	//$.menu_button.length = '10%';
}

function openmain()
{
	
	var mainwindow = Alloy.createController('mainwindow').getView();
	$.events.close();
	mainwindow.open(); 
	
}
$.events.open();
