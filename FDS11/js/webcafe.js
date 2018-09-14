// jQuery를 활용한 인터렉션 ...
var item = $('.menu-item'); // 0번~5번부터의 .menu-item이 item에 담긴다.
var subItem = $('.sub-menu a');
item.attr('tabindex', '0');
subItem.attr('class', 'fas fa-angle-left'); // 마크업 자체에 해당 클래스 삽입

item.on('mouseover focusin', function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});


subItem.hover(function(){
    $(this).toggleClass('fa-angle-right'); // remove와 add를 알아서 처리해주는  togleClass
});