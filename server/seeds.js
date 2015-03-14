if ( Meteor.users.find().count() === 0 ) {
  if ( !Config.findOne()) {
    Config.insert({firstRun: true});
  }
}