$(document).ready(function(){
var open = ".open";
var close = ".close";
var curtainL = "#curtain1";
var curtainR = "#curtain2";
var openW = $(open).width();
var openH = $(open).height();
var windowW = $(window).width();
var windowH=$(window).height();

centerElement = function(element){
  var desiredx = windowW/2-$(element).width()/2;
  var desiredy = windowH/2-$(element).height()/2;
  $(element).css({left: desiredx, top: desiredy});
}
centerElement(open);
centerElement(close);

$(close).click(function(){
  $(curtainL).animate({left:"+="+(windowW/2)+"px"},750);
  $(curtainR).animate({left:"-="+(windowW/2)+"px"},750);
  setTimeout(function () {
    $("body").append("<div class='open'><br><br>OPEN</div>");
    centerElement(open);
  }, 750);
})

//has to be event delegation because .open is removed and reappended
$('body').on('click','.open',function(){
  //removes open button, slides curtains
  $(open).remove();
  $(curtainL).animate({left:"-="+(windowW/2)+"px"},750);
  $(curtainR).animate({left:"+="+(windowW/2)+"px"},750);
});



})
