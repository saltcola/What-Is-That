/*
Template.navBar.helpers({	
    'apprentice': function(){
        return Apprentices.find({'userID' : Meteor.userId()});
    }
});
*/

Template.navBar.events({
        'click .logout': function(event) {
            event.preventDefault();
            Meteor.logout();
            Router.go('login');
        }
    });