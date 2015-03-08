Template.archives.helpers({
  archivelist: function () {
    return Archives.find();
  },
  moreResults: function() {
    return !(Archives.find().count() < Session.get("archivesLimit"));
  }
});

function showMoreVisible() {
  var threshold, target = $("#showMoreResults");
  if (!target.length) return;

  threshold = $(window).scrollTop() + $(window).height() - target.height();

  if (target.offset().top < threshold) {
    if (!target.data("visible")) {
      // console.log("target became visible (inside viewable area)");
      target.data("visible", true);
      Session.set("archivesLimit",
        Session.get("archivesLimit") + ARCHIVES_INCREMENT);
    }
  } else {
    if (target.data("visible")) {
      // console.log("target became invisible (below viewable arae)");
      target.data("visible", false);
    }
  }
}

$(window).scroll(showMoreVisible);


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