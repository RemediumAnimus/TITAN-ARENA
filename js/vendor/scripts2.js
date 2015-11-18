$(document).ready(function() {

function Map(elem) {
    var $toShow =  $('.icoMap');
    var self = this;
    this.class = elem;
    this.stop = false;
    this.speed = 25;
    this.animateMap = (function() {
        var $items = $(self.class).find('.hover');
        var l=0;
        var mass = [];

        for (var i=1; i<=$items.length; i++) {
            mass.push(i);
        }
        for (var k=1; k<mass.length; k++) {
            var j = Math.floor(Math.random() * ($items.length));
            var tmp = mass[k];
            mass[k] = mass[j];
            mass[j] = tmp;
        }

        return function() {
           if (l!=$items.length && !self.stop) {
               setTimeout(function(){
                   i = mass[l];
                   $items.eq(i).animate({'opacity':'1'},'fast');
                   self.animateMap();
                   l++;
               },self.speed);
           } else if (self.stop){
               l=0;
               $toShow.css('opacity','0');
           } else {
               $toShow.animate({'opacity':'1'},'slow');
               $items.animate({'opacity':'1'},'fast');
               l=0;
           }
        }
    })();
    this.showField = function() {
        setTimeout(function(){
            $(self.class).find('.planL').attr("class","n-plan__plan__svg__fl listAnimL planL slideRight");
            $(self.class).find('.planR').attr("class","n-plan__plan__svg__fr listAnimR planR slideLeft");
        },25);
    };
    this.destroy = function() {
        self.stop = true;
        $(self.class).find('.hover').css('opacity','0');
        $toShow.css('opacity','0');
        $(self.class).find('.planL').attr("class","n-plan__plan__svg__fl listAnimL planL");
        $(self.class).find('.planR').attr("class","n-plan__plan__svg__fr listAnimR planR");
    }
}

var map1 = new Map('#tab1');
var map2 = new Map('#tab2');
var map3 = new Map('#tab3');
var map4 = new Map('#tab4');
var timer;

tabby.init({
    callback: function ( toggle, tabID ) {
        switch (tabID) {
            case '#tab1':
                $('#tab2').removeClass('selected');
                $('#tab3').removeClass('selected');
                $('#tab4').removeClass('selected');
                if (!$(tabID).hasClass('selected')) {
                    map1.destroy();
                    map2.destroy();
                    map3.destroy();
                    map4.destroy();
                    clearTimeout(timer);
                    map1.stop=false;
                    map1.showField();
                    timer = setTimeout(function(){
                        map1.animateMap();
                    },1000);
                    $('.tooltipster-content').hide();
                    $(tabID).addClass('selected');
                }
            break;
            case '#tab2':
                $('#tab1').removeClass('selected');
                $('#tab3').removeClass('selected');
                $('#tab4').removeClass('selected');
                if (!$(tabID).hasClass('selected')) {
                    map1.destroy();
                    map2.destroy();
                    map3.destroy();
                    map4.destroy();
                    clearTimeout(timer);
                    map2.stop=false;
                    map2.showField();
                    timer = setTimeout(function(){
                        map2.animateMap();
                    },1000);
                    $('.tooltipster-content').hide();
                    $(tabID).addClass('selected');
                }
            break;
            case '#tab3':
                $('#tab1').removeClass('selected');
                $('#tab2').removeClass('selected');
                $('#tab4').removeClass('selected');
                if (!$(tabID).hasClass('selected')) {
                    map1.destroy();
                    map2.destroy();
                    map3.destroy();
                    map4.destroy();
                    map3.stop=false;
                    map3.showField();
                    clearTimeout(timer);
                    timer = setTimeout(function(){
                        map3.animateMap();
                    },1000);
                    $('.tooltipster-content').hide();
                    $(tabID).addClass('selected');
                }
            break;
            case '#tab4':
                $('#tab1').removeClass('selected');
                $('#tab2').removeClass('selected');
                $('#tab3').removeClass('selected');
                if (!$(tabID).hasClass('selected')) {
                    map1.destroy();
                    map2.destroy();
                    map3.destroy();
                    map4.destroy();
                    map4.stop=false;
                    map4.showField();
                    clearTimeout(timer);
                    timer = setTimeout(function(){
                        map4.animateMap();
                    },1000);
                    $('.tooltipster-content').hide();
                    $(tabID).addClass('selected');
                }
            break;
        }
    }
});


setTimeout(function(){
    map1.showField();
},25);
timer = setTimeout(function(){
    map1.animateMap();
},1000);
$('#tab1').addClass('selected');

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
