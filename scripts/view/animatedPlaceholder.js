var txt = ["Search Here", "Hopkins", "Search Here", "Coding", "Search Here", "Minnetonka", "Search Here", "Robotics"];
var timeOut;
var txtLen = txt[0].length;
var char = 0;
var stringNumber = 0;
var complete = false;
$('.main-search').attr('placeholder', '|');
(function typeIt() {
  var humanize = Math.round(Math.random() * (200 - 30)) + 30;
  timeOut = setTimeout(function () {
    if (!complete) {
      char++;
    }
    else {
      char--;
    }
    var type = txt[stringNumber].substring(0, char);
    $('.main-search').attr('placeholder', type + '|');
    typeIt();

    if (char == txtLen) {
      $('.main-search').attr('placeholder', $('.main-search').attr('placeholder').slice(0, -1)) // remove the '|'
      setTimeout(function () {
        complete = true;
      }, 600);
    } else if (char == 0) {
      complete = false;
      stringNumber++;
      if (stringNumber == txt.length) { stringNumber = 0; }
    }

  }, humanize);
}());
