import TwitterLogin from "react-twitter-login";

const ConnectSocial = () => {
  const authHandler = (err: string, data: string) => {
    console.log(err, data);
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey={process.env.CONSUMER_KEY ?? ""}
      consumerSecret={process.env.CONSUMER_SECRET ?? ""}
    />
  );
};

export default ConnectSocial;
