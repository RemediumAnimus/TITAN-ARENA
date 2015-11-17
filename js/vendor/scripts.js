window.onload = function(){

tabby.init({

});



$('.st1').tooltipster({
   content: $('<img src="img/tmp/master.png"><span class="tool-header">'+
   'СпортМастер равнение по верху</span>' +
   '<a href="#" class="tool-text">Презентация зимней коллекции обуви пример ссылки на последнюю новость</a>' +
   '<div class="tool-timeH">Режим работы</div>' +
   '<div class="tool-time">Пн-Пт:  9:00 - 19:00</div>' +
   '<div class="tool-time">Сб-Вс:  12:00 - 19:00</div>' +
   '<div class="tool-close"></div>'),
   theme: 'n-plan__tooltip',
   interactive: true,
   animation: 'fade',
   delay: 200,
   position: 'right',
   touchDevices: false,
   trigger: 'click',
   functionReady: function() {
       $('.tool-close').click(function(){
           $('.st1').tooltipster('hide');
       });
   }
});

$('.st1').tipsy({
    //fallback: "СпортМастер",
    gravity: 's',
});

$('.st2').tooltipster({
   content: $('<img src="img/tmp/master.png"><span class="tool-header">'+
   'СпортМастер равнение по верху</span>' +
   '<a href="#" class="tool-text">Презентация зимней коллекции обуви пример ссылки на последнюю новость</a>' +
   '<div class="tool-timeH">Режим работы</div>' +
   '<div class="tool-time">Пн-Пт:  9:00 - 19:00</div>' +
   '<div class="tool-time">Сб-Вс:  12:00 - 19:00</div>' +
   '<div class="tool-close"></div>'),
   theme: 'n-plan__tooltip',
   interactive: true,
   animation: 'fade',
   delay: 200,
   position: 'right',
   touchDevices: false,
   trigger: 'click',
   functionReady: function() {
       $('.tool-close').click(function(){
           $('.st2').tooltipster('hide');
       });
   }
});

$('.st2').tipsy({
    //fallback: "СпортМастер",
    gravity: 's',
});

$('.st3').tooltipster({
   content: $('<img src="img/tmp/master.png"><span class="tool-header">'+
   'СпортМастер равнение по верху</span>' +
   '<a href="#" class="tool-text">Презентация зимней коллекции обуви пример ссылки на последнюю новость</a>' +
   '<div class="tool-timeH">Режим работы</div>' +
   '<div class="tool-time">Пн-Пт:  9:00 - 19:00</div>' +
   '<div class="tool-time">Сб-Вс:  12:00 - 19:00</div>' +
   '<div class="tool-close"></div>'),
   theme: 'n-plan__tooltip',
   interactive: true,
   animation: 'fade',
   delay: 200,
   position: 'right',
   touchDevices: false,
   trigger: 'click',
   functionReady: function() {
       $('.tool-close').click(function(){
           $('.st3').tooltipster('hide');
       });
   }
});

$('.st3').tipsy({
    //fallback: "СпортМастер",
    gravity: 's',
});

$('.st4').tooltipster({
   content: $('<img src="img/tmp/master.png"><span class="tool-header">'+
   'СпортМастер равнение по верху</span>' +
   '<a href="#" class="tool-text">Презентация зимней коллекции обуви пример ссылки на последнюю новость</a>' +
   '<div class="tool-timeH">Режим работы</div>' +
   '<div class="tool-time">Пн-Пт:  9:00 - 19:00</div>' +
   '<div class="tool-time">Сб-Вс:  12:00 - 19:00</div>' +
   '<div class="tool-close"></div>'),
   theme: 'n-plan__tooltip',
   interactive: true,
   animation: 'fade',
   delay: 200,
   position: 'right',
   touchDevices: false,
   trigger: 'click',
   functionReady: function() {
       $('.tool-close').click(function(){
           $('.st4').tooltipster('hide');
       });
   }
});

$('.st4').tipsy({
    //fallback: "СпортМастер",
    gravity: 's',
});

$('.n-plan__values__header').click(function(){
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $(this).next().show('slow',function(){
            $(this).find('.n-plan__values__check').animate({'opacity':'1'})
        });
    } else {
        $(this).removeClass('active');
        $(this).next().find('.n-plan__values__check').animate({'opacity':'0'},function(){
            $(this).parent().hide('slow');
        });
    }

})

};
