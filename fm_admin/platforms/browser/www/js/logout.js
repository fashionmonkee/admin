angular.module('routerApp')
  .controller('LogoutCtrl', function($location,$auth,$state) {
    if (!$auth.isAuthenticated()) { return; }
    $auth.logout()
      .then(function() {
        console.log('You have been logged out');
        $state.go('home');
      });
  });