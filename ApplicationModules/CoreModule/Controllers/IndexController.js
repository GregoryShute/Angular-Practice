(function IndexController($scope) {

    $scope.IndexData = [];


    IndexController.$inject = ['$scope'];
    
    angular.module('PracticeApp')
        .controller('PracticeApp', IndexController);

}());