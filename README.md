# What-Is-That

## Prerequisites okgrow:image-upload package upload images.
### One-time Setup (https://github.com/okgrow/meteor-image-upload)
- AWS S3 account for cloud file storage. (Done)
- GraphicsMagick or ImageMagick on your local machine and deployment server for image manipulation.
 - OS X: ``` brew install imagemagick  ``` or ``` brew install graphicsmagick ```
 - Modulus.io: supports ImageMagick no setup needed
 - Heroku, DigitalOcean, AWS EC2: requires manual ImageMagick/GraphicsMagick installation.
 - Meteor.com free hosting does not support ImageMagick/GraphicsMagick, sorry no way around it :( 
- OS X: At project directory in terminal, type: ```chmod +x meteor.sh```

### Install
``` meteor add okgrow:image-upload ```

### Run meteor
In your project directory type ``` ./meteor.sh ``` and hit enter.
