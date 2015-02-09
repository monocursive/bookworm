Template.editor.rendered = function() {
  $("#main-editor").markdown({
    autofocus:false,
    savable:false,
    height: "800px"
  });
}

Template.editor.helpers({
  text: function() {
    var bookId = Session.get("document");
    return Books.find(bookId);
  }
});

Template.editor.events({
  'keyup #main-editor': function() {
    var bookContent = $("#main-editor").val();
    Books.update({_id: Session.get("document")},
      { $set: {
        content: bookContent
      }
    });
  }
});