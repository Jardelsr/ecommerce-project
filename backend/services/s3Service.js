const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const getSignedUrl = (bucketName, key) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Expires: 60 * 5 // URL expira em 5 minutos
  };

  return s3.getSignedUrl('getObject', params);
};

module.exports = { getSignedUrl };
