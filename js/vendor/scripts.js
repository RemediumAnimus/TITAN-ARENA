$(document).ready(function() {

tabby.init({
    callback: function ( toggle, tabID ) {
        switch (tabID) {
            case '#tab1':
                $('.tooltipster-content').hide();
            break;
            case '#tab2':
                $('.tooltipster-content').hide();
            break;
            case '#tab3':
                $('.tooltipster-content').hide();
            break;
            case '#tab4':
                $('.tooltipster-content').hide();
            break;
        }
    }
});

var tip = $('.tip').qtip({
    content: {
        text: '<img src="img/tmp/master.png"><span class="tool-header">'+
   'СпортМастер равнение по верху</span>' +
   '<a href="#" class="tool-text">Презентация зимней коллекции обуви пример ссылки на последнюю новость</a>' +
   '<div class="tool-timeH">Режим работы</div>' +
   '<div class="tool-time">Пн-Пт:  9:00 - 19:00</div>' +
   '<div class="tool-time">Сб-Вс:  12:00 - 19:00</div>' +
   '<div class="tool-close"></div>'
    },
    style: {
      classes: 'tooltipster-content',
      def: false,
    },
    position: {
      my: 'bottom center',
      at: 'top center',
    },
    show: {
        event: 'click',
        solo: true,
    },
    hide: {
        event: 'click',
    },
    events: {
        show: function(event, api){
            $('.tool-close').click(function(){
                api.hide();
            })
        },
        hide: function(event, api) {
           var $elem = $('.tip');
           for (var j=0; j<$elem.length; j++) {
               var $reg = $elem.eq(j).attr('class').split(' ');
                for (var i=0; i<$reg.length; i++) {
                    switch ($reg[i]) {
                        case 'st1':
                        var elem = '.'+$reg[i];
                           $(elem).css('fill','#9C5897');
                        break;
                        case 'st2':
                        var elem = '.'+$reg[i];
                           $(elem).css('fill','#069cd8');
                        break;
                        case 'st3':
                        var elem = '.'+$reg[i];
                           $(elem).css('fill','#b22e82');
                        break;
                        case 'st4':
                        var elem = '.'+$reg[i];
                           $(elem).css('fill','#ed8e23');
                        break;
                    }
                }
            }
            $('.n-plan__values__cont').removeClass('n-plan__values__cont--active');
        }
    }
});

$('.tip').tipsy({
    gravity: 's',
});

$('.tip').click(function(){
    var attr = $(this).attr('class');
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

});

$('.n-plan__values__ins').find('a').click(function(e){
    e.preventDefault();
    var attr = $(this).attr('href');
    var $elem = $(attr);
    var api = $elem.qtip('api');
    api.show();
    var reg = $elem.attr('class').split(' ');
    for (var i=0; i<reg.length; i++) {
        switch (reg[i]) {
            case 'st1':
               $elem.css('fill','#82427e');
            break;
            case 'st2':
               $elem.css('fill','#037bab');
            break;
            case 'st3':
               $elem.css('fill','#7f215d');
            break;
            case 'st4':
               $elem.css('fill','#c5751c');
            break;

        }
    }
    $('.n-plan__values__cont').removeClass('n-plan__values__cont--active');
    $(this).parent().find('.n-plan__values__cont').addClass('n-plan__values__cont--active');
})

});
