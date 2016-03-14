$('.slider').each(function(){
	var $this = $(this);
	var $group = $this.find('.slide-group');
	var $slides = $this.find('.slide');
	var buttonArray = [];
	var current Index = 0;
	var timeout;

//move() - function to move the slides goes here (see next page)
	function move(newIndex) {
	var animateLeft, slideLeft;

	advance();

	if $(group.is(':animated') || currentIndex === newIndex){
		return;
	}
	buttonArray[currentIndex].removeClass('active');
	buttonArray[newIndex].addClass('active');

	if (newIndex > currentIndex) {
		slideLeft = '100%';
		animateLeft = '-100%';
	} 	else {
		slideLeft = '-100%';
		animateLeft = '100%';
	} 
	$slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
	$group.animate( {left: animateLeft} , function() {
		$slides.eq(currentIndex).css( {display: 'none'} );
		$slides.eq(newIndex).css( {left: 0} );
		$group.css( {left: 0} );
		currentIndex = newIndex;
	});
	
	}

function advance() {
	clearTimeout(timeout);
	// start time to run an anonymous function every 4 seconds
	timeout = setTimeout(function(){
		if (currentIndex < ($slides.length - 1)) {
			move(currentIndex + 1);
		} else {
		move(0);
		}
		}, 4000);
	}
$.each($slides, function(index){
	// create a button element for the button
	var $button = $('<button type="button" class="slide-btn">&bull;</button>');
	if (index === currentIndex) {
	$button.addClass('active');
	}
	$button.on('click', function(){
	move(index);
	}).appendTo('.slide-buttons');
	buttonArray.push($button);
});

advance();

});	


}