Template.commentItem.helpers({
  submittedText: function() {
    return this.submitted.toString();
  },
  ownComments:function(){
  	let postId = this.postId;
  	let username= Posts.findOne({"_id":postId}).username;
  	if (username == this.commentBy){
  		return true;
  	}
  	return false;

  }
});