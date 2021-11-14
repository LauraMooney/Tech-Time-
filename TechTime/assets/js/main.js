
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

		//Logo jumping

	//	const text = document.querySelector(".Hello! This is TechTime");
		//const strText = text.textContent;
	//	const splitText = strText.split("");
	//	text.textContent = "";

	//	for(let i=0; i < splitText.length; i++) {
	////		text.innerHTML += "<span>" + splitText[i] + "</span>";
	//	}

//let char = 0;
//let timer = setInterval(onTick, 50);

//function onTick() {
	//const span = text.querySelectorAll('span')[char];
	//span.classList.add('fade');
	//char++
	//if(char === splitText.length){
	//	complete();
	//	return;
	//}
//}

//function complete(){
	//clearInterval(timer);
	//timer = null;
//}