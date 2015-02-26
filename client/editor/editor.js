Template.editor.rendered = function() {
  $("#main-editor").markdown({
    autofocus:false,
    savable:false,
    height: "800px"
  });
  Tracker.autorun(function() {
    setInterval(function () {
      var currentDoc = Session.get("document");
      var saveContent = $("#main-editor").val();
      if(Session.get("document") != "") {
        console.log(currentDoc);
        Archives.insert({
          date: new Date(),
          content: saveContent,
          docId: currentDoc
        });
      }

    }, 10000);
 });

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