var app = angular.module("flapperNews",[]);
app.controller("MainCtrl", function($scope){
    $scope.posts = [
        {title: 'post 1', upvotes: 3},
        {title: 'post 2', upvotes: 45},
        {title: 'post 3', upvotes: 3},
        {title: 'post 4', upvotes: 31},
        {title: 'post 5', upvotes: 6}
    ];
    $scope.addPost = function(){
        if(!$scope.title || $scope.title === ''){return;}
        $scope.posts.push({title: $scope.title, upvotes: 0});
        $scope.title='';
    }
});