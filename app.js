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
        // console.log('emailController');

        $scope.test = 'Hello Bearski!';


        $scope.isPopupVisible = false;
        $scope.isComposePopupVisible = false;
        $scope.composeEmail = {};
        

        $scope.sendEmail = function() {
            $scope.isComposePopupVisible = false;
            alert($scope.composeEmail.to
                + " " + $scope.composeEmail.subject
                + " " + $scope.composeEmail.body);
        };


        $scope.showPopup = function(email) {
            $scope.isPopupVisible = true;
            $scope.selectedEmail = email;
        };


        $scope.closePopup = function() {
            $scope.isPopupVisible = false;
        };


        $scope.showComposePopup = function() {
            $scope.composeEmail = {};
            $scope.isComposePopupVisible = true;
        };


        $scope.closeComposePopup = function() {
            $scope.isComposePopupVisible = false;
        };


        $scope.emails = [{
            from: 'John',
            subject: 'I love angular',
            date: 'Jan 1',
            body: 'hello world!'
        }, {
            from: 'Jack',
            subject: 'Angular and I are just friends',
            date: 'Feb 15',
            body: 'just kidding'
        }, {
            from: 'Ember',
            subject: 'I hate you Angular!',
            date: 'Dec 8',
            body: 'wassup dude'
        }];

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
