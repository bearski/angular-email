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
        $scope.activeTab = "inbox";
        $scope.sentEmails = [];


        $scope.sendEmail = function() {
            $scope.composeEmail.date = new Date();
            $scope.composeEmail.from = 'me';

            $scope.isComposePopupVisible = false;
            $scope.sentEmails.push($scope.composeEmail);
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
            to: 'me',
            subject: 'I love angular',
            date: 'Jan 1',
            body: 'hello world!'
        }, {
            from: 'Jack', 
            to: 'me',
            subject: 'Angular and I are just friends',
            date: 'Feb 15',
            body: 'just kidding'
        }, {
            from: 'Ember', 
            to: 'me',
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
