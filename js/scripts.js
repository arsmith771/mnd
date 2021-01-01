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

		var row = $('.en__component--row'),
			rowWithMultiCols = $('.en__component--advrow').not('.en__component--row:first-of-type.en__component--advrow');
		
		// Add iterated class name to each row
		row.each(function(index){

			var $this = $(this);

			//$this.prepend( index );
			// $this.addClass('en__component--row-A' + index);
		});

		// Set max-width for all columns
		rowWithMultiCols.each(function(index){

			var $this = $(this),
				cols = $this.children('.en__component--advcolumn'),
				colCount = cols.length,
				colWidth = 1400 / colCount;

			//cols.css('max-width', colWidth + 'px');
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

		
		// Set the date we're counting down to
		var countDownDate = new Date("May 6, 2021 00:00:00").getTime();

		if ( $('#countdown').length ) {

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
		    
		  // Output the result in an element with id="demo"
		  document.getElementById("countdown").innerHTML = "<div>" + days + "<span>days</span></div> <div>" + hours + "<span>hours</span></div> <div>" + minutes + "<span>minutes</span></div> <div>" + seconds + "<span>seconds</span></div>";
		    
			  // If the count down is over, write some text 
			  if (distance < 0) {
			    clearInterval(x);
			    document.getElementById("demo").innerHTML = "EXPIRED";
			  }
			}, 1000);
		}

	});
	



