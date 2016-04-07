
Template.register.events({
        'submit form': function(event) {
            event.preventDefault();
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
          	Meteor.call('create', email, password);
            Meteor.loginWithPassword(email, password, function(error) {
                if (error) {
                    console.log(error.reason);
                } else {
                    Router.go("posts");
                }
            });
        }
    });

Template.login.events({
        'submit form': function(event) {
            event.preventDefault();
            var email = $('[name=loginEmail]').val();
            var password = $('[name=loginPassword]').val();
            Meteor.loginWithPassword(email, password, function(error) {
                if (error) {
                    console.log(error.reason);
                } else {
                    Router.go("posts");
                }
            });
        }
    });