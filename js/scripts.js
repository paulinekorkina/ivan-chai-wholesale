$("input[type='number']").number();

$(document).ready(function() {
  var menu_show = $(".mobile-menu-btn");
  var link = $(".menu-link");
  var menu = $(".main-menu");

  menu_show.click(function(event) {
    event.preventDefault();
    menu.toggleClass("main-menu-open");
  });

  link.click(function(event) {
    menu.removeClass("main-menu-open")
  });

});

