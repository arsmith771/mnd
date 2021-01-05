	function rowBgColor(cl1, cl2){

		$('.en__component').each(function(){
			if ( $(this).hasClass(cl1) ) {

				$(this).closest('.en__component--row').addClass(cl2);
			}
		});
	}

	$(document).ready(function(){

		rowBgColor('black-bg', 'en__component--black-row');
		rowBgColor('blue-bg', 'en__component--blue-row');
		rowBgColor('hero-bg', 'en__component--hero-row');
		rowBgColor('hero-storywall-bg', 'en__component--hero-storywall-row');
		rowBgColor('hero-advocacy-bg', 'en__component--hero-advocacy-row');
		rowBgColor('row-no-bottom-padding', 'en__component--row-1');

		var row = $('.en__component--row'),
			rowWithMultiCols = $('.en__component--advrow').not('.en__component--row:first-of-type.en__component--advrow');
		

		// Set max-width for all columns
		rowWithMultiCols.each(function(index){

			var $this = $(this),
				cols = $this.children('.en__component--advcolumn'),
				colCount = cols.length,
				colWidth = 1400 / colCount;

		});

		$('.en__component--row').not('.en__component--hero-storywall-row').each(function(){
			$(this).wrapInner('<div class="wrap" />');
		});

		$('.en__component--advrow').each(function(){

			var col = $(this).find('.en__component--advcolumn');

			if ( col.hasClass('en__component--storyblock') ) {

				$(this).addClass('en__component--storyblock-row');
			}

		});

		$('.en__component--header button').on('click', function(event){

			event.preventDefault();
			$('.en__component--header nav').slideToggle();
		});

		function bgReplaceImg(){

			var image = $('.image-as-bg-1');

			image.each(function(){

				var $this = $(this),
					imgSrc = $this.attr('src');
				
				$this.closest('.en__component--row').css('padding','0');
				$this.closest('.wrap').css('width','100%').css('padding','0');
				$this.closest('.en__component--advcolumn')
						.css('max-width','calc( ( (100% - 1400px) / 2) + (1400px / 3) )')
						.css('background-image', 'url(' + imgSrc + ')')
						.css('background-size', 'cover')
						.css('background-position', 'center center');
				$this.closest('.en__component--advcolumn').next('.en__component--advcolumn').css('padding','4rem');

				if (window.innerWidth < 1000) { 
					$this.closest('.en__component--row').css('padding','0');
					$this.closest('.wrap').css('width','100%').css('padding','0');
					$this.closest('.en__component--advcolumn')
							.css('max-width','none')
							.css('background-image', 'url(' + imgSrc + ')')
							.css('background-size', 'cover')
							.css('background-position', 'center center');
					$this.closest('.en__component--advcolumn').next('.en__component--advcolumn').css('padding','4rem');
					
				}	

				$this.remove();
			});
		}

		bgReplaceImg();

		
		// Set the date we're counting down to
		var countDownDate = new Date("May 6, 2021 00:00:00").getTime();

		if ( $('.en__component--countdown').length ) {

		// Update the count down every 1 second
		var x = setInterval(function() {

		  // Get today's date and time
		  var now = new Date().getTime();
		    
		  // Find the distance between now and the count down date
		  var distance = countDownDate - now;
		    
		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		    
		  // Output the result
		  $('.en__component--countdown p:last-of-type').html("<div>" + days + "<span>days</span></div> <div>" + hours + "<span>hours</span></div> <div>" + minutes + "<span>minutes</span></div> <div>" + seconds + "<span>seconds</span></div>");
		    
			  // If the count down is over, write some text 
			  if (distance < 0) {
			    clearInterval(x);
			    document.getElementById("demo").innerHTML = "EXPIRED";
			  }
			}, 1000);
		}

	});
	



