//	Animations v1.1, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	==================================================================================

//	Visible, Sam Sehnert, samatdf, TeamDF, https://github.com/teamdf/jquery-visible/
//	================================================================================

	// Functions
		function animateElement() {
			if ($(window).width() >= 960) {
				$('.animate').each(function(i, elem) {
					var	elem = $(elem),
						type = $(this).attr('data-anim-type'),
						delay = $(this).attr('data-anim-delay');

					if (elem.visible(true)) {
						setTimeout(function() {
							elem.addClass(type);
						}, delay);
					} 
				});
			} else {
				$('.animate').each(function(i, elem) {
					var	elem = $(elem),
						type = $(this).attr('data-anim-type'),
						delay = $(this).attr('data-anim-delay');

						setTimeout(function() {
							elem.addClass(type);
						}, delay);
				});
			}
		}

		function animateProgressBar() {
			$('.progress-bar').each(function(i, elem) {
				var	elem = $(this),
					percent = elem.attr('data-progress-bar-percent'),
					delay = elem.attr('data-progress-bar-delay');

				if (!elem.hasClass('animated')) {
					elem.css({ 'width' : '0%' });
				}

				if (elem.visible(true)) {
					setTimeout(function() {
						elem.animate({ 'width' : percent + '%' }, 2000, 'easeInOutExpo').addClass('animated');
					}, delay);
				} 
			});
		}

		function randomClass() {
			var	random = Math.ceil(Math.random() * classAmount);

			type = classesArray[random];

			return type;
		}

		function animateOnce(target, type) {
			if (type == 'random') {
				type = randomClass();
			}

			$(target).removeClass('trigger infinite ' + triggerClasses).addClass('trigger').addClass(type).one('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function() {
				$(this).removeClass('trigger infinite ' + triggerClasses);
			});
		}

		function animateInfinite(target, type) {
			if (type == 'random') {
				type = randomClass();
			}

			$(target).removeClass('trigger infinite ' + triggerClasses).addClass('trigger infinite').addClass(type).one('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function() {
				$(this).removeClass('trigger infinite ' + triggerClasses);
			});
		}

		function animateEnd(target) {
			$(target).removeClass('trigger infinite ' + triggerClasses);
		}

	// Variables
		var	triggerClasses = 'flash strobe shake bounce tada wave spin pullback wobble pulse pulsate heartbeat panic explode';
			
		var	classesArray = new Array;
			classesArray = triggerClasses.split(' ');

		var	classAmount = classesArray.length;

	// Animate and Progress Bars
		(function($){
			// Swap JS Class
				$('html').removeClass('no-js').addClass('js');

			// Functions

			// Visible plugin
				$.fn.visible = function(partial,hidden,direction) {
					var $t				= $(this).eq(0),
						t				= $t.get(0),
						$w				= $(window),
						viewTop			= $w.scrollTop(),
						viewBottom		= viewTop + $w.height(),
						viewLeft		= $w.scrollLeft(),
						viewRight		= viewLeft + $w.width(),
						_top			= $t.offset().top,
						_bottom			= _top + $t.height(),
						_left			= $t.offset().left,
						_right			= _left + $t.width(),
						compareTop		= partial === true ? _bottom : _top,
						compareBottom	= partial === true ? _top : _bottom,
						compareLeft		= partial === true ? _right : _left,
						compareRight	= partial === true ? _left : _right,
						clientSize		= hidden === true ? t.offsetWidth * t.offsetHeight : true,
						direction		= (direction) ? direction : 'both';

					if(direction === 'both')
						return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
					else if(direction === 'vertical')
						return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
					else if(direction === 'horizontal')
						return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
				};

			// Animations plugin
				$.fn.fireAnimations = function(options) {
					animateElement();
				};

			// Progress Bar plugin
				$.fn.fireProgressBar = function(options) {
					animateProgressBar();
				};

			// Execute
				$(document).ready(function() {
					$(document).fireAnimations();
					$(document).fireProgressBar();
				});

				$(window).resize(function() {
					$(document).fireAnimations();
				});

				$(window).scroll(function() {
					$(document).fireAnimations();
					$(document).fireProgressBar();

					if ($(window).scrollTop() + $(window).height() == $(document).height()) {
						$(document).fireAnimations();
					}
				});
		})(jQuery);