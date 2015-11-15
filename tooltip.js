//------------------------------------------------
// @ Simple Tooltip Plugin
//------------------------------------------------
$.fn.tooltip = function(t){
  var i = $.extend({
    duration: 300,          // set fadeIn | fadeOut duration
    mode: "top",            // set Tooltip mode (top | bottom)
    box: ".tooltip-item"    // just for jQuery simplicity
  },t),

  o = function(t){
    var o = t.width()/2-$(i.box).outerWidth()/2,
      e = -($(i.box).height()+35), 
      n = null;

    n = "top" === i.mode ? "margin-top" : "margin-bottom",
    $(i.box).css("margin-left", o + "px"),
    $(i.box).css(n, e + "px")
  };

  return this.each(function(){
    $(this).hover(function(){
      i.title = $(this).data("tip-title"),
      i.content = $(this).data("tip");

      var t = null;
      t = void 0 === i.title ? "" : '<div class="tooltip-title">'+i.title+'</div>';
      var e = '\
        <div class="tooltip-item tooltip-mode-'+i.mode+'">\
          <div class="tooltip-point-'+i.mode+'">\
            '+t+'\
            <div class="tooltip-content">'+i.content+'</div>\
          </div>\
        </div>';

      $(this).append(e),
      o($(this)),

      $(i.box).fadeIn(i.duration)},

      function(){
        $(i.box).fadeOut(i.duration,function(){
          $(this).remove()
        })
      })
  })
};