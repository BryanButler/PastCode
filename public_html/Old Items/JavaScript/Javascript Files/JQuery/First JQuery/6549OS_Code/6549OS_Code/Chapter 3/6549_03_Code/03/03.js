$(document).ready(function() {

	

	$('#switcher h3').click(function(event){
		if (event.target == this)
		{$('#switcher button').toggleClass('hidden');
}
		});
	$('#switcher h3').hover(function(){
		$(this).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
	});

		$('#switcher-default').addClass('selected');

		$('#switcher').bind('click.collapse',function(event) {
			if(!$(event.target).is('button')){
				$('#switcher button').toggleClass('hidden');
		}
	});
		$('#switcher-narrow, #switcher-large').click(function(){
			$('#switcher').unbind('click.collapse');
		});


		$('#switcher button').click(function(event){
			if ($(event.target).is('button')){
			var bodyClass = event.target.id.split('-')[1];
			$('body').removeClass().addClass(bodyClass)
			$('#switcher button').removeClass('selected');
			$(event.target).addClass('selected');
		} else {
			$('switcher button').toggleClass('hidden');
		}
		});

		$('#switcher-narrow').bind('click',function(){
			$('body').addClass('narrow');	
		});

		$('#switcher-large').bind('click', function() {
			$('body').addClass('large');	
		});

		$('#switcher-red').bind('click', function() {
			$('body').addClass('red');
		});
		
		var toggleSwitcher = function(event) {
			if (!$event.target.is('button')) {
				$('#switcher button').toggleClass('hidden');
			}
		};

		$('#switcher').click(function(event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];
      setBodyClass(bodyClass);
    }
  });

		

	var triggers = {
    D: 'default',
    N: 'narrow',
    L: 'large',
    R: 'red'
};

    
  var setBodyClass = function(className){
		$('body').removeClass().addClass(className);

		$('#switcher button').removeClass('selected');
		$('#switcher-' + className).addClass('selected');

		$('#switcher').unbind('click', toggleSwitcher);

		if (className == 'default'){
			$('#switcher').bind('click', toggleSwitcher);
		}
	};


	$(document).keyup(function(event){
    	var key = String.fromCharCode(event.keyCode);
    	if (key in triggers) {
    		setBodyClass(triggers[key]);
    	}
    });

$('$switcher').bind('click.collapse', toggleSwitcher);

}); 