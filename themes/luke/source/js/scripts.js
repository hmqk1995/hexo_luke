// 向下滚动顶部固定标题通栏
$(function(){

  // offset: 偏移修正
  function topFixer(selector, offset) {
    var $document = $(document),
        $selector = $(selector),
        // 选择元素距离页面顶部的高
        $selector_top = $selector.offset().top;
    $document.scroll(function(){
      console.log($(this).scrollTop(), $selector_top);
      if ($(this).scrollTop() > $selector_top + offset) {
        $selector.css({
          'position': 'fixed',
          'top': (0 - offset) + 'px',
          'z-index': 999,
          'opacity': 0.8
        });
      } else {
        $selector.css({
          'position': '',
          'top': '',
          'z-index': '',
          'opacity': ''
        });
      }
    });
  }

  topFixer('.heading', 180);

});
