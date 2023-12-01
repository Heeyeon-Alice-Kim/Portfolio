jQuery(document).ready(function($){
	var isLateralNavAnimating = false;
	
	//open/close lateral navigation
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		//stop if nav animation is running 
		if( !isLateralNavAnimating ) {
			if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
			
			$('body').toggleClass('navigation-is-open');
			$('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				//animation is over
				isLateralNavAnimating = false;
			});
		}
	});
});
/* ----- about button click ----- */
document.getElementById('aboutButton').addEventListener('click', function (){
    about.scrollIntoView({ behavior: "smooth" });
});

/* ----- Download CV FUNCTION ----- */
document.getElementById('downloadCv').addEventListener('click', function () {
    // Create a link element
    var a = document.createElement('a');

    // Set the href attribute with the path to the PDF file
    a.href = 'cv/Heeyeon(Alice)Kim_Resume.pdf';

    // Set the download attribute with the desired file name
    a.download = 'Heeyeon(Alice)Kim_Resume.pdf';

    // Append the link element to the document body
    document.body.appendChild(a);

    // Trigger a click on the link element to start the download
    a.click();

    // Remove the link element from the document body
    document.body.removeChild(a);
});



/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
    strings : ["Data Analyst"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })

//  lightGallery(document.querySelector('.gallery'));
