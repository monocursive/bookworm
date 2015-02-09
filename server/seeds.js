if ( Meteor.users.find().count() === 0 ) {
  Accounts.createUser({
    email: "toto@toto.com",
    password: "tatayoyo"
  });
}