var app = angular.module('emailApp', []);

// app.factory('emails', [function(){
//   var o = {
//     posts: []
//   };
//   return o;
// }]);


app.controller('emailController', [
    '$scope',
    // 'emails',
    function($scope, emails) {
        console.log('emailController');

        $scope.test = 'Hello Bear!';

        $scope.isPopupVisible = false;

        $scope.showPopup = function(email) {
            $scope.isPopupVisible = true;
            $scope.selectedEmail = email;
        };

        $scope.emails = [
            { from: 'John', subject: 'I love angular', date: 'Jan 1' }, 
            { from: 'Jack', subject: 'Angular and I are just friends', date: 'Feb 15' }, 
            { from: 'Ember', subject: 'I hate you Angular!', date: 'Dec 8' }
        ];

		// $scope.emails = emails.emails;

        // $scope.addPost = function() {
        //     if (!$scope.title || $scope.title === '') {
        //         return; }
        //     $scope.posts.push({
        //         title: $scope.title,
        //         link: $scope.link,
        //         upvotes: 0
        //     });
        //     $scope.title = '';
        //     $scope.link = '';
        // };

        // $scope.incrementUpvotes = function(post) {
        //     post.upvotes += 1;
        // };
    }

]);