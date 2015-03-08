Meteor.publish('archives', function(limit) {
  return Archives.find({}, {sort: {date: -1}, limit: limit});
});

