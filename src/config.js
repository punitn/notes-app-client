export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-pond"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://k3iubvr0y6.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_oJdhDytRy",
      APP_CLIENT_ID: "2o8hib479sp1165i51b21jk1en",
      IDENTITY_POOL_ID: "us-east-1:3c52c897-552f-4e42-9cc3-57714762ce4b"
    }
  };