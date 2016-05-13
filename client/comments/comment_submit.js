
Template.commentSubmit.events({
  'submit form': function(event, template) {
    event.preventDefault();

    let body = template.find('#commentBody').value;
    let user = Meteor.user().username;
    var comment = {
      body: body,
      postId: Router.current().params._id,
      commentBy: user,
      date: Date.now()
    };

      console.log(Router.current().params._id);
      Comments.insert(comment);
      template.find('#commentBody').value = "";

    // Meteor.call('commentInsert', comment, function(error, commentId) {
    //   if (error){
    //     throwError(error.reason);
    //   } else {
    //     $body.val('');
    //   }
    // });
  }
});