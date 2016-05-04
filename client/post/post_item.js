

Template.postItem.helpers({
        posts: function() {
            username = Meteor.user().username
            console.log(username)
            return Posts.find({'username':username});
        },

       image: function() {
      var image = PostImages.findOne({associatedObjectId: this._id});
      if (image) {
        return image.url({store: "postImages-normal"});
      }
    },

       commentsCount:function(){
    let count = 0;
    return Comments.find({postId: this._id}).count()
  },

    ownPost: function(){
      let userName = Meteor.user().username;
      let poster = this.username;
       if (username == poster){
          return true;
        }else{
          return false;
        }
      }
    

    });