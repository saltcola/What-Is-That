Meteor.publish("users", function() {
    return Meteor.users.find({});
  });

  Meteor.publish("posts", function() {
    return Posts.find({});
  });
