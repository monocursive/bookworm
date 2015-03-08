Template.archives.helpers({
  archivelist: function () {
    return Archives.find();
  }
});

Template.archives.rendered = function() {
  Session.set("document", "");
};

Template.archiveEntry.events({
  'click button': function() {
    if(confirm('Are you sure you want to restore?')) {
      Books.update({"_id": this.docId}, {"$set" :{"content": this.content}});
      Session.set("document", this.docId);
      Router.go('/');
    }

  }
});