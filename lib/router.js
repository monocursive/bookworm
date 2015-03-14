Router.configure({
  layoutTemplate: 'layout',
  onBeforeAction: function () {
    Meteor.subscribe('config');
    if (Config.findOne().firstRun == true) {
      Router.go ('/first-run');
    } else {
      if( !Meteor.user()) {
        Router.go ('/sign-in');
      }
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
    ARCHIVES_INCREMENT = 20;
    Session.setDefault('archivesLimit', ARCHIVES_INCREMENT);
    Deps.autorun(function() {
      Meteor.subscribe('archives', Session.get('archivesLimit'));
    });
  },
  action: function () {
    this.render('archives');
  }
});

Router.route('/first-run', {
  action: function () {
    this.render('firstRun');
  }
});