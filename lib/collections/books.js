Books = new Mongo.Collection('books');
Ground.Collection(Books);

Books.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

