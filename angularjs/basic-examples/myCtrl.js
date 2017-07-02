app.controller('myCtrl', function($scope) {
  $scope.firstName = 'MyName';
  $scope.lastName = 'MyLastName3';
  $scope.age = 12;

  $scope.changeAge = function() {
    $scope.age = 54;
  }
});

app.directive("myTestDirective", function() {
    return {
        template : "I was made in a directive constructor!"
    };
});

app.directive("bigTextDirective", function() {
  return {
    restrict : "AE",
    template : "<h1> some big text written here by directive</h1>"
  }
});
