   
    Template.posts.helpers({
        posts: function() {
            let posts = Posts.find({},{sort: {date:-1}});
            return posts;
        },

       image: function() {
      var image = PostImages.findOne({associatedObjectId: this._id});
      if (image) {
        return image.url({store: "postImages-normal"});
      }
    },

      poster: function() {
        username = Meteor.user().username
        poster = this.username
        console.log(username)
        console.log(poster)
        if (username == poster){
          return true
        }else{
          return false
        }
      }

    });

    Template.userPosts.helpers({
        posts: function() {
            username = Meteor.user().username
            console.log(username)
            return Posts.find({'username':username},{sort: {date:-1}});
        },

       image: function() {
      var image = PostImages.findOne({associatedObjectId: this._id});
      if (image) {
        return image.url({store: "postImages-normal"});
      }
    }

    });
