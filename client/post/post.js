   
    Template.posts.helpers({
        posts: function() {
            return Posts.find();
        }
    });

    Template.form.events = {
        'click #submit': function(event) {
            event.preventDefault();
            var title = $('#title').val();
            var body = $('#body').val();
            Posts.insert({
                title: title,
                username: Meteor.user().username,
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