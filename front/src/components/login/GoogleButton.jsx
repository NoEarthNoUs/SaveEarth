import React from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";

const GoogleButton = (props) => {
  const history = useHistory();
  const onSuccess = async (response) => {
    const {
      googleId,
      profileObj: { email, name, imageUrl },
    } = response;
    try {
      // 회원 가입 유저 확인을 위한 조회
      const res = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/user/${googleId}`
      );
      // 회원 테이블에 없으면 회원 가입하기
      if (!res.id) {
        const userData = {
          id: googleId,
          email,
          name,
          imgUrl: imageUrl,
        };
        await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/user`,
          userData
        );
      }
      // 로컬 스토리지에 유저 정보 저장
      localStorage.setItem("USER_TOKEN", googleId);
      props.close();
    } catch (e) {
      console.log("유저 정보 조회 에러");
      console.error(e);
    }
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={`${process.env.REACT_APP_GOOGLE_ID}`}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
};

export default GoogleButton;
