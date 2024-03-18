$(document).ready(function(){

    // header start
    $(window).scroll(function(){
        
            sct = $(window).scrollTop();
            console.log(sct);
    
            if(sct>80) {
                $('header').css({
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                });
            }

            if(sct<80) {
                $('header').css({
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                });
            }
    });
    // header end

    //section_1 start
    var slide = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    })  
    //section_1 end

    // section_3 start
    var i = 0;

    $('#right').click(function(){
        i++;
        if(i>2){
            i=0;
        }
        $('#img_wrap').animate({
            left:  i * -100 + '%'
        });
    });

    $('#left').click(function(){
        i--;
        if(i<0){
            i=2;
        }
        $('#img_wrap').animate({
            left: i * -100 + '%'
        });
    });
    //section_3 end

    // section_5 start
    $('.btn>li').each(function(i){
        $(this).attr({
            "data-num": i
        });
    }).click(function(){
            var num = $(this).attr("data-num")
            console.log(num);
            
            $('.animate_wrap').animate({
                left: -1200 * num
            });

            $('.btn>li').removeClass('active');
            $('.btn>li').eq(num).addClass('active');

        });
    // section_5 end

    //section_2 반응형 시작
    $('.re_btn').click(function(){
        $('.con_box:nth-child(3)').css({
            display: 'block',
        });

        $('.con_box:nth-child(4)').css({
            display: 'block',
        });

        $('.re_btn').css({
            display: 'none',
        });
    });

    var e = 0;

    $('.mo_btn').click(function(){
        if(e==0){
            $('.con_box:nth-child(2)').css({
                display: 'block',
            });
            e++;
        }else if(e==1){
            $('.con_box:nth-child(3)').css({
                display: 'block',
            });
            e++;
        }else if(e==2){
            $('.con_box:nth-child(4)').css({
                display: 'block',
            });
            $('.mo_btn').css({
                display: 'none',
            });
            e=0;
        }
        console.log(e);
    });
    //section_2 반응형 끝

    //section_3 반응형 시작
    var a = 0;

    $('#mo_right').click(function(){
        a++;
        if(a>5){
            a=0;
        }
        $('.mo_wrap #img_wrap').animate({
            left: a * -100 + '%'
        });
    });

    $('#mo_left').click(function(){
        a--;
        if(a<0){
            a=5;
        }
        $('.mo_wrap #img_wrap').animate({
            left: a * -100 + '%'
        });
    });

    var si = setInterval(function(){
        $('#mo_right').trigger('click')
    },2000);

    setTimeout(function(){
        clearInterval(si);
    },10000);
    // section_3 반응형 끝

    //section_5 반응형 시작
    var s = 0;
    function slide(){
        if(s<3){
            s++;
        }else{
            s=0;
        }
        
        $('.con_5_ >ul').animate({
            left: s * -100 +'%'
        },1000);
    };
    // setInterval(slide, 3000)
    //section_5 반응형 끝

});//end