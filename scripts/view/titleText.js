var divs = $('.header-outer a');
if ($("ul:first li:nth-child(1) a").text().indexOf("Home") > -1) {
  $(document).ready(function () {
    divs.attr("href", $("ul:first li:nth-child(2) a").attr("href"));
  });
} else {
  $(document).ready(function () {
    divs.attr("href", $("ul:first li:nth-child(1) a").attr("href"));
  });
}
