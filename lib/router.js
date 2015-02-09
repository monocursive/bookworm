Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
    return Meteor.subscribe('books');
  }
});

Router.route('/', function () {
  if( !Meteor.user()) {
    Router.go('/sign-in');
  } else {
    this.render('editor');
  }
});