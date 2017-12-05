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

// var currentProfile = "#profile" + i
// function current + 1

// HIDE EVERYTHING
$('#profile2').addClass('hidden');
$('#profile3').addClass('hidden');
$('.chevronleft a').hide();
var i = 1;
var profile = '#profile';



$('.chevronright a').on('click', function () {
if (i < 3) {
	$(profile + i).addClass('hidden');
	$(profile + (i += 1)).removeClass('hidden');
	$('.chevronleft a').show();
} if (i >= 3) {
	$('.chevronright a').hide();
}
});

$('.chevronleft a').on('click', function () {
if (i > 1) {
	$(profile + i).addClass('hidden');
	$(profile + (i -= 1)).removeClass('hidden');
	$('.chevronright a').show();
} if (i == 1) {
	$('.chevronleft a').hide();
}
});



//Click .chevronleft arrow
//Slide left current li
//Hide current
//Show li - 1

//OR maybe use plugin called slick? http://kenwheeler.github.io/slick/
