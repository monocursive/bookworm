Books = new Mongo.Collection('books');

Books.allow({
  insert: function(userId, doc) {
    return //!!userId;
  },
  update: function(userId, doc) {
    return //!!userId;
  }
});

