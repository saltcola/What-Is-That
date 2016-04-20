
Template.takePhoto.events({
    'click .takePhoto': function(event, template) {

        var cameraOptions = {
            width: 400,
            height: 400
        };

        let imageData = "";

        MeteorCamera.getPicture(cameraOptions, function (error, data) {
           if (!error) {
               imageData = data;
           }

          return imageData;       
        });
        event.preventDefault();
    }
});

