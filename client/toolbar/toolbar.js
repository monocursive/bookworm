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