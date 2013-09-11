angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.profile',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
  // .when('/Profile', {
  //   controller: 'ProfileController',
  //   templateUrl: 'views/login.html'
  // })
  // .when('/home', {
  //   controller: 'HomeCtrl',
  //   templateUrl: 'home/home.tpl.html'
  // })
  
})

.run( function run ( titleService ) {
  titleService.setSuffix( ' | ngBoilerplate' );
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
})

;

