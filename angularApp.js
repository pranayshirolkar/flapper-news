var app = angular.module("flapperNews",['ui.router']);
app.config(function($stateProvider, $urlRouterProvider){
   $stateProvider
       .state('home', {
           url: '/home',
           templateUrl: '/home.html',
           controller: 'MainCtrl'
       })
       .state('posts',{
           url: '/posts/{id}',
           templateUrl: '/posts.html',
           controller: "PostsCtrl"
       });

    $urlRouterProvider.otherwise('home');
});
app.factory('posts', function(){
    var o={
        posts:[
            {title: 'post 1', upvotes: 3,
                comments: [
                    {author: 'Joe', body: 'Cool post!', upvotes: 0},
                    {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}]},
            {title: 'post 2', upvotes: 45,
                comments: [
                    {author: 'Doe', body: 'Garbage post!', upvotes: 0},
                    {author: 'Carl', body: 'No idea but everything is wrong!', upvotes: 0}]},
            {title: 'post 3', upvotes: 3,
                comments: [
                    {author: 'Alo', body: 'Real post!', upvotes: 0},
                    {author: 'Palo', body: 'Some idea but everything is wrong!', upvotes: 0}]},
            {title: 'post 4', upvotes: 31,
                comments: [
                    {author: 'Zeb', body: 'A post of comment!', upvotes: 0},
                    {author: 'Goer', body: 'Everything is wrong!', upvotes: 0}]}
        ]
    };
    return o;
});
app.controller("PostsCtrl", function($scope,posts, $stateParams){
    $scope.post=posts.posts[$stateParams.id];
    $scope.addComment = function(){
        if($scope.body===''){return}
        $scope.post.comments.push({
          body: $scope.body,
          author: 'user',
          upvotes: 0
        });
        $scope.body='';
    };
});
app.controller("MainCtrl", function($scope, posts){
    $scope.posts=posts.posts;
    $scope.addPost = function(){
        if(!$scope.title || $scope.title === ''){return;}
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            comments: [],
            upvotes: 0
        })
        $scope.title='';
        $scope.link='';
    };
    $scope.incrementUpvotes = function(post){
        post.upvotes += 1;
    };
});