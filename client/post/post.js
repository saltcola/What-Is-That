   
    Template.posts.helpers({
        posts: function() {
            return Posts.find();
        },

       image: function() {
      var image = PostImages.findOne({associatedObjectId: this._id});
      if (image) {
        return image.url({store: "postImages-normal"});
      }
    }

    });

    Template.userPosts.helpers({
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
    }

    });
