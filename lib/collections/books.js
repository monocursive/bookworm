Books = new Mongo.Collection('books');
Ground.Collection(Books);

Books.allow({
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


Meteor.methods({
  save: function(text, docId) {
    Books.update({_id: docId},
      { $set: {
        content: text
      }
    });
  }
});
