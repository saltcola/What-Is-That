
Template.register.events({
        'submit form': function(event,template) {
            event.preventDefault();
            let email = template.find('#email').value;
            let password = template.find('#password').value;
            let username = template.find('#username').value;
            console.log(username);
          	Meteor.call('create', username,email, password);
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
        'submit form': function(event,template) {
            event.preventDefault();
            let email = template.find('#loginEmail').value;
            let password = template.find('#loginPassword').value;
            Meteor.loginWithPassword(email, password, function(error) {
                if (error) {
                    console.log(error.reason);
                } else {
                    Router.go("posts");
                }
            });
        }
    });