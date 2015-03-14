Config = new Mongo.Collection('config');
Ground.Collection(Config);

Meteor.methods({
  'createFirstUser': function(firstUser) {
    Accounts.createUser(firstUser);
    var configId = Config.findOne()._id;
    Config.update({_id: configId},
      {
        $set : {
          firstRun : "false"
        }
      }
    );
  }
});