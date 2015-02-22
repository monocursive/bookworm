Template.panel.helpers({
  books: function() {
    return Books.find();
  }
})

Template.panel.events({
  'click #new-doc': function(e) {

    e.preventDefault();
    var userId = Meteor.userId();
    var inputBook = $('input[name=book-title]');

    var book = {
      userId: userId,
      title: inputBook.val(),
      content: ""
    };

    Books.insert(book, function(err, res) {
      if(err) {
        alert('Problemo')
      } else {
        var previousDoc = Session.get("document");
        $('#' + previousDoc).removeClass('btn-success');
        $('#' + res).addClass('btn-success');
        Session.set("document", res);
      }
    });
    inputBook.val("");
  },
  'click .doc-btn': function() {

    var previousDoc = Session.get("document");
    $('#' + previousDoc).removeClass('btn-success');

    Session.set("document", this._id);
    $('#' + this._id).addClass('btn-success');

    var selectedText = Books.find(Session.get('document')).fetch()[0].content;
    $('#main-editor').markdown()[0].value = selectedText;
  },
  'click .delete-doc': function() {

    if(confirm('Are you sure?')) {
      Books.remove(this._id);
    }
  }
});