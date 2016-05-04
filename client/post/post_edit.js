
Template.postEdit.helpers({
      post:function(){
    let id = Router.current().params._id;
    console.log(id);
    return Posts.findOne({"_id":id});
  },

     image:function(){
       let id = Router.current().params._id;
       let image = PostImages.findOne({ associatedObjectId: id });
        if (image){
          return true;
        }else{
          return false;
        }
     },

     imageURL:function(){
      let id = Router.current().params._id;
      let image = PostImages.findOne({ associatedObjectId: id });
      if (image) {
            return image.url({ store: "postImages-normal"});

        }
     }

});

Template.postEdit.events({
  'submit form': function(e) {
    e.preventDefault();

  //   var currentPostId = this._id;

  //   var postProperties = {
  //     url: $(e.target).find('[name=url]').val(),
  //     title: $(e.target).find('[name=title]').val()
  //   };

  //   var errors = validatePost(postProperties);
  //   if (errors.title || errors.url)
  //     return Session.set('postEditErrors', errors);

  //   Posts.update(currentPostId, {$set: postProperties}, function(error) {
  //     if (error) {
  //       // 向用户显示错误信息
  //       Errors.throw(error.reason);
  //     } else {
  //       Router.go('postPage', {_id: currentPostId});
  //     }
  //   });
  // },

  // 'click .delete': function(e) {
  //   e.preventDefault();

  //   if (confirm("Delete this post?")) {
  //     var currentPostId = this._id;
  //     Posts.remove(currentPostId);
  //     Router.go('postsList');
  //   }
  // }
},

  'click #changeImage':function(e){
    e.preventDefault();
     let id = Router.current().params._id;
     PostImages.remove({ associatedObjectId: id });

  }
});