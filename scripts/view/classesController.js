//allows for loading data from google spreadsheets to angular
var app = angular.module('classes', ['ngResource']);
app.controller('classes.controller', function ($scope, getClasses) {
  $scope.limitLength = 10;
  $scope.growList = function () {
    $scope.limitLength += 10;
  }


  function correctClass(title, original) {
    //create a list of all of the properties
    var currentEdit = original;
    var correctedClass = {};
    correctedClass['title'] = title;


    while (currentEdit.length > 0 && currentEdit.indexOf(": ") > -1) {
      var propertyEnd = currentEdit.lastIndexOf(": ");
      var newValue = currentEdit.substring(propertyEnd + 2, currentEdit.length);
      currentEdit = currentEdit.substring(0, propertyEnd);
      var valueEnd = currentEdit.lastIndexOf(", ");
      var newProperty = currentEdit.substring(valueEnd, currentEdit.length).replace(", ", "");
      currentEdit = currentEdit.substring(0, valueEnd);
      correctedClass[newProperty] = newValue;
    }

    $scope.correctedList.push(correctedClass);
  };

  var getClassList = getClasses.get({}, function () {
    $scope.classList = getClassList.feed.entry;
    $scope.correctedList = [];
    for (i in $scope.classList) {
      correctClass($scope.classList[i].title.$t, $scope.classList[i].content.$t);
    }

  });




});

app.factory('getClasses', function ($resource) {
  return $resource("https://spreadsheets.google.com/feeds/list/1DLAVN3q758sPohCFeZlVSVRZKXzEser1SIsQnH2mvrw/ogwtdyp/public/basic?hl=en_US&alt=json");
});
