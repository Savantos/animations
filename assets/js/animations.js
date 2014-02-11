//	Animations v1.0, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	==================================================================================

//	Visible, Sam Sehnert, samatdf, TeamDF, https://github.com/teamdf/jquery-visible/
//	================================================================================

	(function($){
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

		$.fn.fireAnimations = function(options) {
			function animate() {
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

			$(document).ready(function() {
				$('html').removeClass('no-js').addClass('js');

				animate();
			});

			$(window).scroll(function() {
				animate();

				if ($(window).scrollTop() + $(window).height() == $(document).height()) {
					animate();
				}
			});
		};

		$('.animate').fireAnimations();

	})(jQuery);
		
	var	triggerClasses = 'flash strobe shake bounce tada wave spin pullback wobble pulse pulsate heartbeat panic explode';
		
	var	classesArray = new Array;
		classesArray = triggerClasses.split(' ');

	var	classAmount = classesArray.length;

	function randomClass() {
		var	random = Math.ceil(Math.random() * classAmount);

		type = classesArray[random];

		return type;
	}

	function triggerOnce(target, type) {
		if (type == 'random') {
			type = randomClass();
		}

		$(target).removeClass('trigger infinite ' + triggerClasses).addClass('trigger').addClass(type).one('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function() {
			$(this).removeClass('trigger infinite ' + triggerClasses);
		});
	}

	function triggerInfinite(target, type) {
		if (type == 'random') {
			type = randomClass();
		}

		$(target).removeClass('trigger infinite ' + triggerClasses).addClass('trigger infinite').addClass(type).one('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function() {
			$(this).removeClass('trigger infinite ' + triggerClasses);
		});
	}

	$(window).resize(function() {
		$('.animate').fireAnimations();
	});