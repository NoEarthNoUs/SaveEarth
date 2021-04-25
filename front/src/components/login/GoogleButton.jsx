import React from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const clientId =
  '998436492117-me9tqubklkoqg84077la4imvgvbnpct1.apps.googleusercontent.com';

export default function GoogleButton({ onGoogle }) {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name, picture },
    } = response;

    const userData = {
      id: googleId,
      email,
      nickname: name,
      imgUrl: picture,
    };
    await onGoogle(userData);

    axios.post(
      'http://ec2-3-37-3-101.ap-northeast-2.compute.amazonaws.com:8081/api/user',
      userData
    );
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
