$(document).ready(function() {
    setTimeout(function() {
        $('#loader').hide();
        $('.wrapper').show();
  
        
      }, 1000);
    $('#fullpage').fullpage({
        resize: false,
        animateAnchor:false,
        scrollOverflow: true,
        autoScrolling:true,
        responsive: 768,
        fitSection: false,
        //menu: '#menu',
        navigation:true,
        continuousVertical:true,
        paddingTop: '20px',
        navigation: true,
        easingcss3: 'ease-in-out',




        afterRender: function() {
            var instance =new Typed('#typed2', {
                strings: ['Jid achi h to jarur karo.', 'Either this way or no way.', 'The only way to overcome your fear, deal with it.','Acche din .... On the way.','Engineering is not just a course or degree, it’s a Religion.'],
                typeSpeed: 60,
                backDelay: 500,
                startDelay: 10,
                backSpeed: 40,
                loop: true,
            });
        }
    });
})




