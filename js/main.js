/**
 * Created by lenovo on 2019/2/4.
 */
function myId$(id){
    return document.getElementById(id);
}
function myCls$(cls){
    return document.getElementsByClassName(cls);
}
function myTag$(tag){
    return document.getElementsByTagName(tag)
}

/* 顶部下拉菜单 */
var $hmt = $(".head_myTaoBao");
$hmt.mouseenter(function(){
  $(this).css("background-color","#fff").children("div").show();
});
$hmt.mouseleave(function(){
    $(this).css("background-color","#f2f2f2").children("div").hide()
});

var $hcl = $(".head_collection");
$hcl.mouseenter(function(){
    $(this).css("background-color","#fff").children("div").show();
});
$hcl.mouseleave(function(){
    $(this).css("background-color","#f2f2f2").children("div").hide()
});

var $hp = $(".head_phone");
$hp.mouseenter(function(){
    $(this).children("div").show();
});
$hp.mouseleave(function(){
    $(this).children("div").hide()
});

function mybsShow(li){
    var bss = li.getElementsByTagName("div")[0];
    bss.style.display = "block";
}
function mybsHide(li){
    var bsh = li.getElementsByTagName("div")[0];
    bsh.style.display = "none";
}

var $hmn = $(".head_mynav");
$hmn.mouseenter(function(){
    $(this).children("div").show();
});
$hmn.mouseleave(function(){
    $(this).children("div").hide()
});

/*顶部菜单小三角旋转*/
$("li.triangle").mouseenter(function(){
    $(this).children("b").addClass("triRotate_1")
});
$("li.triangle").mouseleave(function(){
    $(this).children("b").removeClass("triRotate_1")
});

/*轮播图*/
var n = 1;
var count = $(".banner_img a").length;/*获取图片的个数*/
var banBgc = ['rgb(211,43,45)', 'rgb(232,232,232)', 'rgb(254,217,15)', 'rgb(232,232,232)',
              'rgb(142,12,21)', 'rgb(247,107,120)'];/*预设通栏背景颜色*/
$(".banner_button span").mouseenter(function(){
    var i = $(this).attr("num");/*获取焦点按钮的标记num的值*/
    n = i;
    $(".banner_img a").eq(i-1).addClass("banner_on").removeClass("banner_off");/*使焦点按钮对应的图片显示*/
    $(".banner_img a").eq(i-1).siblings().removeClass("banner_on").addClass("banner_off");
    $("#banner").css("background-color",banBgc[i-1]);/*改变通栏背景颜色*/
    $(this).addClass("button_on").removeClass("button_off");/*使焦点按钮突出显示*/
    $(this).siblings().removeClass("button_on" ).addClass("button_off")
});
    var t = setInterval("showAuto()",4000); /*设置自动切换图片的定时器*/
    function showAuto(){ /*定时器执行的函数*/
        clearInterval(t);
        $(".banner_button span").eq(n-1).trigger('mouseenter');
        t = setInterval("showAuto()",4000);
        n >= 6 ? n=1:n++;
    }


/*主体部分鼠标进入图片闪亮*/
$("#main_body").find("a").on('mouseenter',function(){
    $(this).find("img").css("opacity","0.8")
}).on('mouseleave',function(){
    $(this).find("img").css("opacity","1")
});

/*商品分类*/
var $clsLi = $(".cls_li li");
$clsLi.mouseenter(function(){
    $(this).css("background-color","#fff").children().css("color","#e54077");
    $(".cls_info").show()
});
$clsLi.mouseleave(function(){
    $(this).css("background-color","").children().css("color","#fff");
});
$('.nav_cls').mouseleave(function(){
    $(".cls_info").hide()
});


/*品牌栏*/
var $bn = $(".br_cls_nav");
$bn.mouseenter(function(){
    $(this).children().eq(1).show();
});
$bn.mouseleave(function(){
    $(this).children().eq(1).hide()
});


/*右侧边栏鼠标进入ico字体变白*/
$("#sr_payCar").on("mouseenter",function(){
    $(this).children("div").css("color","#fff")
}).on("mouseleave",function(){
    $(this).children("div").css("color","#ff0016")
});


/*左侧栏及返回顶部效果块*/
$(window).on('scroll',function(){ /*左侧栏显示和隐藏动画*/
    if($(window).scrollTop() >= 600){
        $("#side_left").stop(false,true).slideDown(200)
    }else{
        $("#side_left").slideUp(200);    /*加上stop会导致动画过程不执行*/
    }
});

var $slm = $(".sl_main>div");
var sl_main_bgc = ['rgb(99,195,51)','rgb(255,7,54)','rgb(234,95,141)','rgb(9,166,232)','rgb(99,195,51)','rgb(241,83,83)',
    'rgb(26,200,169)','rgb(255,7,54)'];
$slm.on('mouseenter',function(){     /*鼠标经过小方框变色*/
    var index = $slm.index(this);
    $(this).css("background-color",sl_main_bgc[index])
});
$slm.on('mouseleave',function(){
    $(this).css("background-color","rgba(0,0,0,.6)")
});
$slm.on('click',function(){ /*鼠标点击小方框事件*/
    var index = $slm.index(this);
    var sl_scroll = [1450,1450,2250,2250,2250,2250,2250,2950];
    $('html,body').animate({scrollTop:sl_scroll[index]},300); /*点击滚动至对应模块*/
    $(this).css("background-color",sl_main_bgc[index]);
    $(this).off('mouseleave').siblings();/*解绑鼠标离开事件，不恢复原来颜色*/
    $(this).siblings().on('mouseleave',function(){/*重新给兄弟注册鼠标离开事件*/
        $(this).css("background-color","rgba(0,0,0,.6)")
    }).css("background-color","rgba(0,0,0,.6)");

});


    $(".sl_goTop,#Top").on('click',function(){/*返回顶部动画*/
        $("html,body").animate(
            {scrollTop:0},300)
});


/*天猫超市*/
$(".mart_br_stTitle>div").eq(0).on('mouseenter',function(){
   $(this).css("background-color","#00B262").siblings().css("background-color","#f1f1f1");
    $(".mbstInfo1").removeClass("mbstInfoHide").addClass("mbstInfoShow");
    $(".mbstInfo2").removeClass("mbstInfoShow").addClass("mbstInfoHide");
});
$(".mart_br_stTitle>div").eq(1).on('mouseenter',function(){
    $(this).css("background-color","#00B262").siblings().css("background-color","#f1f1f1");
    $(".mbstInfo2").removeClass("mbstInfoHide").addClass("mbstInfoShow");
    $(".mbstInfo1").removeClass("mbstInfoShow").addClass("mbstInfoHide");
});

