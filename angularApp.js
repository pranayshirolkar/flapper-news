var app = angular.module("flapperNews",['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
   $stateProvider
       .state('home', {
           url: '/home',
           templateUrl: '/home.html',
           controller: 'MainCtrl'
       });

    $urlRouterProvider.otherwise('home');
});
app.factory('posts', function(){
    var o={
        posts:[]
    };
    return o;
});
app.controller("MainCtrl", function($scope, posts){
    $scope.posts=posts.posts;
    $scope.posts = [
        {title: 'post 1', upvotes: 3},
        {title: 'post 2', upvotes: 45},
        {title: 'post 3', upvotes: 3},
        {title: 'post 4', upvotes: 31},
        {title: 'post 5', upvotes: 6}
    ];
    $scope.addPost = function(){
        if(!$scope.title || $scope.title === ''){return;}
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
        })
        $scope.title='';
        $scope.link='';
    };
    $scope.incrementUpvotes = function(post){
        post.upvotes += 1;
    };
});