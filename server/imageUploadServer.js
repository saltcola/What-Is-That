Posts.allow({
    insert: function(userId, text) {
      return !!userId;
    },
    update: function(userId, doc) {
      /*
       * Posts can't be edited after they're created
       */
      return doc && doc.user._id === userId;
    }
  });

  UserImages.allow({
    insert: function(userId, doc) {
      return !!userId;
    },
    update: function(userId, doc) {
      /*
       * User can update their own image only
       */
      return doc && doc.addedBy === userId;
    },
    remove: function(userId, doc) {
      /*
       * User can remove their own image only
       */
      return doc && doc.addedBy === userId;
    },
    download: function(userId, fsFile) {
      /*
       * Anyone can see a user's avatar
       */
      return true;
    }
  });

  PostImages.allow({
    insert: function(userId, doc) {
      return true;
    },
    update: function(userId, doc) {
      /*
       * Creator can update. Not that this is required because a PostImage
       * is created immediately after the upload is completed, but before
       * an associated Post document is created. In order to create the
       * association, the user must be able to update their message. There
       * are work arounds that go beyond the scope of this demo.
       */
      return doc && doc.addedBy === userId;
    },
    remove: function(userId, doc) {
      /*
       * Can't be deleted, ever
       */
      return false;
    },
    download: function(userId, fsFile) {
      /*
       * Must be signed in
       * Note that if `publicRead` is set for ImageUpload, download is
       * implicitly permitted, even if this function would return false.
       */
      return userId;
    }
  });

   /*
   * Purge data every hour
   
  Meteor.setInterval(function purge() {
    PostImages.remove({});
    UserImages.remove({});
    Posts.remove({});
    Meteor.users.remove({});
  }, 1000 * 60 * 60);

  */