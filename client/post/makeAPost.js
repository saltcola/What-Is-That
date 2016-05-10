 
 Template.makeAPost.events = {
        'submit form': function(event, template) {
            event.preventDefault();
            let title = template.find('#title').value;
            let body = template.find('#body').value;
            let username = "";
            if (!Meteor.user()){
                username = "Anonymous"
            }else{
                username = Meteor.user().username;
            }
            console.log(title);
            console.log(body);
            console.log(username);

            var imgId = Session.get("lastImageId-postImages");
            Session.set("lastImageId-postImages", undefined);

            Posts.insert({
                title: title,
                username: username,
                body: body,
                date: Date.now()
            },
            function(error, postId) {
              if (error) {
                throw new Meteor.Error(error);
              }
              PostImages.update(imgId, {$set: { associatedObjectId: postId }});
            }

            );
            $('#title, #body').val('');
        }
    };