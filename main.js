$(document).ready(function(){


var curtain = {
  curtainSpeed: 750,
  init: function(){
    this.cacheDom();
    this.bindEvents();
    this.centerElement(this.$open);
    this.centerElement(this.$close);
  },
  cacheDom: function(){
    this.cacheOpen();
    this.$close=$('.close');
    this.$curtainL=$('#curtain1');
    this.$curtainR=$('#curtain2');
    this.$window=$(window);
    this.$body=$('body');
  },
  cacheOpen: function(){
    //needs recached upon append, others do not.
    this.$open=$('.open');
  },
  bindEvents: function(){
    this.bindOpen();
    this.$close.on('click',this.closeCurtain.bind(this));
  },
  bindOpen: function(){
    //separate bind event needed for appended div, else double "closing" curtains
    this.$open.on('click',this.openCurtain.bind(this));
  },
  centerElement: function($el){
    var desiredx = this.$window.width()/2-$el.width()/2;
    var desiredy = this.$window.height()/2-$el.height()/2;
    $el.css({left:desiredx,top:desiredy});
  },
  closeCurtain: function(){
    this.$curtainL.animate({left:"+="+(this.$window.width()/2)+"px"},this.curtainSpeed);
    this.$curtainR.animate({left:"-="+(this.$window.width()/2)+"px"},this.curtainSpeed);
    setTimeout(function () {
      //this being reset to window for some reason? have to use curtain.stuff
      curtain.$body.append("<div class='open'><br><br><br>OPEN</div>");
      curtain.cacheOpen();
      curtain.bindOpen();
      curtain.centerElement(curtain.$open);
    }, curtain.curtainSpeed);
  },
  openCurtain: function(){
    this.$open.remove();
    this.$curtainL.animate({left:"-="+(this.$window.width()/2)+"px"},this.curtainSpeed);
    this.$curtainR.animate({left:"+="+(this.$window.width()/2)+"px"},this.curtainSpeed);
  }

};

curtain.init();

});
