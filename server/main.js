import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

            Meteor.methods({
                'create': function(username,email, password) {
                    Accounts.createUser({
                        username:username,
                        email: email,
                        password: password
                    });
                },
            });

           })
