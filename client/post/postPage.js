Template.postPage.helpers({
  comments: function() {
 	let id = Router.current().params._id;
    return Comments.find({postId: id},{sort: {date:-1}});
  },
  post:function(){
  	let id = Router.current().params._id;
  	return Posts.find({"_id":id});
  },
 
});