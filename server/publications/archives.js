Meteor.publish('archives', function() {
  return Archives.find();
});

