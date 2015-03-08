Router.configure({
  layoutTemplate: 'layout',
  onBeforeAction: function () {
    if( !Meteor.user()) {
      Router.go ('/sign-in');

    }
    this.next();
  }
});

Router.route('/', {
  waitOn: function () {
    return Meteor.subscribe('books');
  },
  action: function () {
    this.render('editor');
  }
});

Router.route('/archives', {
  waitOn: function () {
    return Meteor.subscribe('archives');
  },
  action: function () {
    this.render('archives');
  }
});