
var bucketUrl = Meteor.settings.public.bucketUrl;

if (Meteor.isServer) {
  var accessKeyId = Meteor.settings.accessKeyId;
  var secretAccessKey = Meteor.settings.secretAccessKey;
  var bucketName = Meteor.settings.bucketName;
}

ImageUpload.configure({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  bucketName: bucketName,
  bucketUrl: bucketUrl
});

UserImages = 
  ImageUpload.createCollection("userImages", Meteor.users, {
  defaultPermissions: true,
  publicRead: true,
  sizes: {
    normal: [800,800],
    thumbnail: [200, 200],
    avatar: [50, 50]
  }
});

PostImages = ImageUpload.createCollection("postImages", Posts, {
  defaultPermissions: true,
  sizes: {
    normal: [300,300],
    thumbnail: [100, 100],
    avatar: [50, 50]
  }
});