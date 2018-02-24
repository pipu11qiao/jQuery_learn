/**
 * Created by huber on 2016/7/2.
 */
$(function(){
    $(".level1>a").click(function(){
        $(this).addClass("current").next().show().parent().siblings().children("a").removeClass("current").next().hide();
    });
})