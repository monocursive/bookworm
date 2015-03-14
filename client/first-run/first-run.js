Template.firstRun.events({
  'submit .first-run': function(e) {
    e.preventDefault();
    var firstUser = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    Meteor.call('createFirstUser', firstUser, function(err, res) {
      if(err) {
        console.log(err);
      } else {
        Router.go('/');
      }
    });
  }
});