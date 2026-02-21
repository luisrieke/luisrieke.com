$(".buttonLanguage[href='#']").first().addClass("active");

$(".buttonLanguage").click(function (e) {
  var $this = $(this);
  if ($this.attr("href") === "#") {
    e.preventDefault();
  }
  var $siblings = $this.parent().children(".buttonLanguage[href='#']");
  var position = $siblings.index($this);

  if (position >= 0) {
    $(".contentLanguage div")
      .removeClass("active")
      .eq(position)
      .addClass("active");

    $siblings.removeClass("active");
    $this.addClass("active");
  }
});
