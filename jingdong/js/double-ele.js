// 在前面显示的元素，隐藏在后面的元素
var eleBack = null, eleFront = null,
    // 纸牌元素们 
    eleList = $(".list");

// 确定前面与后面元素
var funBackOrFront = function() {
    eleList.each(function() {
        if ($(this).hasClass("out")) {
            eleBack = $(this);
        } else {
            eleFront = $(this);
        }
    });
};
funBackOrFront();


$("#bt_click").bind("click", function() {
    console.log('click')
    $('.bt_log').removeClass('none');
    
    // 切换的顺序如下
    // 1. 当前在前显示的元素翻转90度隐藏, 动画时间225毫秒
    // 2. 结束后，之前显示在后面的元素逆向90度翻转显示在前
    // 3. 完成翻面效果
    eleFront.removeClass("bt_animation").addClass("out").removeClass("in");
    setTimeout(function() {
        eleBack.addClass("in").removeClass("out").addClass("bt_animation");
        // 重新确定正反元素
        funBackOrFront();
    }, 225);
    return false;
});
