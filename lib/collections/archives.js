Archives = new Mongo.Collection('archives');

if(Meteor.isServer) {
  Archives._createCappedCollection(5242880);
}

Archives.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  },
  remove: function(userId, doc) {
    return !!userId;
  }
});

