Template.toolbar.helpers({
  'title': function() {
    var selector = Session.get("document");
    if(Books.find(selector)._selectorId != undefined) {
      return Books.find(selector).fetch()[0].title;
    } else {
      return false;
    }
  }
});


Template.toolbar.events({
  'click #dowloadmd': function () {
      console.log('test');
      var text = Books.findOne(Session.get("document")).content;
      var title = Books.findOne(Session.get("document")).title;
      var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, title + ".md");
  }
});
