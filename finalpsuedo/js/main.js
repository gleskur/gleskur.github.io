// Make it rain!

// PSUEDO-CODE HW

//********* Across All Pages **********

//Scroll past 50px
//Add class (.navactive) for white nav background

$(window).on('scroll', function () {

	var distanceScrolled = $(window).scrollTop();
	console.log(distanceScrolled);

if (distanceScrolled >= 100) {
	$('nav').addClass('navactive')
}
});
//********* Profiles PAGE **********

//Click .chevronright arrow
//Slide right current li
//Hide current li
//Show next li

//Click .chevronleft arrow
//Slide left current li
//Hide current
//Show li - 1

//OR maybe use plugin called slick? http://kenwheeler.github.io/slick/
