Template.toolbar.helpers({
  'title': function() {
    var selector = Session.get("document");
    return Books.find(selector).fetch()[0].title;
  }
});