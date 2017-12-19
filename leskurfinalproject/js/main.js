// Make it rain!

// PSUEDO-CODE HW

$('.hamburger').on('click', function() {
  $('nav').toggleClass('menu-open');
});

//********* Across All Pages **********

//Scroll past 50px
//Add class (.navactive) for white nav background

$(window).on('scroll', function () {

	var distanceScrolled = $(window).scrollTop();
	console.log(distanceScrolled);

if (distanceScrolled >= 200) {
	$('nav').addClass('navactive')
}
});
//********* Profiles PAGE **********

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

// Event for when the form is submitted
$('#erroremail').hide();
$('#errorname').hide();

$('form').on('submit', function (event) {
  event.preventDefault();
  var fullName = $('#name').val();
  var fullNamePlace = $('#name').placeholder;
  if (fullName.length <= 0) {
      $('#name').addClass('error');
      $('#errorname').fadeIn(300);
      fu
  }
  var fullEmail = $('#email').val();
  if (fullEmail.length <= 0) {
      $('#email').addClass('error');
      $('#erroremail').fadeIn(300);
  }
});
