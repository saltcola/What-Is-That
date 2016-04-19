   
    Template.posts.helpers({
        posts: function() {
            return Posts.find();
        }
    });

    Template.form.events = {
        'click #submit': function(event, template) {
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
            Posts.insert({
                title: title,
                username: username,
                body: body
            });
            $('#title, #body').val('');
        }
    };

    Template.takePhoto.events({
    'click .takePhoto': function(event, template) {
        var cameraOptions = {
            width: 800,
            height: 600
        };
        MeteorCamera.getPicture(cameraOptions, function (error, data) {
           if (!error) {
               template.$('.photo').attr('src', data); 
           }
        });
        event.preventDefault();
    }
});