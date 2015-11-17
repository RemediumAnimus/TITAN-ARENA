window.onload = function(){

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
                   $items.eq(i).show('slow');
                   self.animateMap();
                   l++;
               },self.speed);
           } else if (self.stop){
               l=0;
               $toShow.css('opacity','0');
           } else {
               $toShow.animate({'opacity':'1'},'slow');
               $items.show('slow');
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
        $(self.class).find('.hover').hide();
        $toShow.css('opacity','0');
        $(self.class).find('.planL').attr("class","n-plan__plan__svg__fl listAnimL planL");
        $(self.class).find('.planR').attr("class","n-plan__plan__svg__fr listAnimR planR");
    }
}

var map1 = new Map('#tab1');
var map2 = new Map('#tab2');
var map3 = new Map('#tab3');
var map4 = new Map('#tab4');

tabby.init({
    callback: function ( toggle, tabID ) {
        switch (tabID) {
            case '#tab1':
                map1.destroy();
                map2.destroy();
                map3.destroy();
                map4.destroy();
                map1.showField();
                map1.stop=false;
                setTimeout(function(){
                    map1.animateMap();
                },1000);
            break;
            case '#tab2':
                map1.destroy();
                map2.destroy();
                map3.destroy();
                map4.destroy();
                map2.stop=false;
                map2.showField();
                setTimeout(function(){
                    map2.animateMap();
                },1000);
            break;
            case '#tab3':
                map1.destroy();
                map2.destroy();
                map3.destroy();
                map4.destroy();
                map3.stop=false;
                map3.showField();
                setTimeout(function(){
                    map3.animateMap();
                },1000);
            break;
            case '#tab4':
                map1.destroy();
                map2.destroy();
                map3.destroy();
                map4.destroy();
                map4.stop=false;
                map4.showField();
                setTimeout(function(){
                    map4.animateMap();
                },1000);
            break;
        }
    }
});


setTimeout(function(){
    map1.showField();
},25);
setTimeout(function(){
    map1.animateMap();
},1000);


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
