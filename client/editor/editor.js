Template.editor.rendered = function() {
  $("#main-editor").markdown({
    autofocus:false,
    savable:false,
    height: "800px"
  });
}

Template.editor.events({
  'keydown #main-editor': function() {
    console.log('test');
  }
});