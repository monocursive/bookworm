Template.editor.rendered = function() {
  $("#main-editor").markdown({
    autofocus:false,
    savable:false,
    height: "800px"
  });
  if(archiveSave) {
    Meteor.clearInterval(archiveSave);
  }
  var archiveSave =  Meteor.setInterval(function () {
    var currentDoc = Session.get("document");
    var saveContent = $("#main-editor").val();
    var saveTitle = Books.find(currentDoc).fetch()[0].title;
    if(Session.get("document") != "") {
      Archives.insert({
        date: new Date(),
        content: saveContent,
        docId: currentDoc,
        title: saveTitle
      });
    }
  }, 60000);

};

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