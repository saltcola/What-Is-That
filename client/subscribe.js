Meteor.subscribe("posts");
Meteor.subscribe("users");
Session.set("formTemplate", "makeAPost");
Session.set("formData", undefined);
Session.set("lastImageId-postImages", undefined);