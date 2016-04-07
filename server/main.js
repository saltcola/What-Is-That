import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

            Meteor.publish("posts");

            Meteor.methods({
                'create': function(email, password) {
                    Accounts.createUser({
                        email: email,
                        password: password
                    });
                },
            });

           })
