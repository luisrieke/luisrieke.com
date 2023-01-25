$(".buttonLanguage").first().addClass("active");

$(".buttonLanguage").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);

  $(".contentLanguage div")
    .removeClass("active")
    .eq(position)
    .addClass("active");

  $siblings.removeClass("active");
  $this.addClass("active");
});
