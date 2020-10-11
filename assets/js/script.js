$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var tag_sect = this.hash;

      $("html, body").animate({
        scrollTop: $(tag_sect).offset().top
      }, 800, function(){
        window.location.hash = tag_sect;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

});
