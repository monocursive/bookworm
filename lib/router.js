Router.configure({
  layoutTemplate: 'layout',
  waitOn: function() {
    return Meteor.subscribe('books');
  }
});

Router.route('/', function () {
  this.render('editor');
});