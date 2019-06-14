$(document).ready(function () {
	/**********Scroll Spy***********/
	$('body').scrollspy({target: '#navbar-example2'})
	/**********Label Active***********/
	$('.gtext').blur(function(event) {
		var inputValue = this.value;
		if (inputValue) 
		{
			this.classList.add('active');
		} 
		else 
		{
			this.classList.remove('active');
		}
	});
	/********** Owl Carousel***********/
	$(".offerlist").owlCarousel({
	    margin: 30,
	    dots: false,
	    loop: true,
	    autoplay: true,
        animateOut: 'fadeOut',
        nav: true,
	    navText: ["<i class='icon-back'></i>", "<i class='icon-back'></i>"],
	    responsive: {
	        0: {
	            items: 1
	        },
	        600: {
	            items: 3
	        },
	        1000: {
	            items: 4
	        }
	    }
	});
	/********** Form Show Hide***********/
	$(".caccount").click(function(){
		$(".loginform").hide();
		$(".signpform").show();
	})
	$(".laccount").click(function(){
		$(".loginform").show();
		$(".signpform").hide();
		$(".ghide").hide();
		$(".refer a").show();
	})
	$(".refer a").click(function(){
		$(this).hide();
		$(".ghide").show();
		$(".ghide").css("border-top","none");
	})
	$(".signinpop").click(function(){
		$("body").addClass("openmodal");
	})
	$(".signuppop").click(function(){
		$("body").addClass("openmodal");
		$(".loginform").hide();
		$(".signpform").show();
	})
	$(".close").click(function(){
		$("body").removeClass("openmodal");
		$("body").removeClass("filteropenmodal");
		$(".loginform").show();
		$(".signpform").hide();
		$(".ghide").hide();
		$(".refer a").show();
	})
	$(".filtertab").click(function(){
		$("body").addClass("filteropenmodal");
	})
	$(".overlay").click(function(){
		$("body").removeClass("filteropenmodal");
		$("body").removeClass("openmodal");
		$(".loginform").show();
		$(".signpform").hide();
		$(".ghide").hide();
		$(".refer a").show();
	})
});
