Template.panel.helpers({
  books: function() {
    return Books.find();
  }
})

Template.panel.events({
  'click #new-doc': function(e) {
    e.preventDefault();
    var userId = Meteor.userId();

    var book = {
      userId: userId,
      title: $('input[name=book-title]').val()
    }

    Books.insert(book);
    $('input[name=book-title]').val("");
  }
});