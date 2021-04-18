import React from 'react';
import GoogleLogin from 'react-google-login';

const clientId =
  '998436492117-me9tqubklkoqg84077la4imvgvbnpct1.apps.googleusercontent.com';

export default function GoogleButton({ onGoogle }) {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name, picture },
    } = response;

    await onGoogle({
      socialId: googleId,
      email,
      nickname: name,
      imgUrl: picture,
    });
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
