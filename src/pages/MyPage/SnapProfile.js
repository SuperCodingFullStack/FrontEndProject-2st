import React, { useRef } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import useFetchUserInfo from "../hooks/useFetchUserInfo";

const Snaps = styled.div`
  max-width: 600px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  background-color: white;
  border: 1px solid black;
  padding: 18px;
  font-family: "Pretendard";
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const HeaderLeft = styled.div`
  p {
    font-size: 12px;
    margin-top: 4px;
    font-weight: 300;
  }
`;

const HeaderRight = styled.a`
  align-self: end;
  font-size: 12px;
  color: #6d8eda;
  text-decoration: underline;
`;

const ProfileBody = styled.div``;

const ProfileImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.65);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    bottom: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    z-index: 50;
    background-color: #7d8392;
    svg {
      fill: #fff;
    }
  }
`;

const SnapProfile = () => {
  const fileRef = useRef(null);
  const profileInfo = useSelector((state) => state.auth);
  console.log(profileInfo);

  const profileButton = () => {
    fileRef.current.click();
  };

  const axiosProfileImg = async (formData) => {
    const response = await axios.put(
      `http://52.78.168.169/api/myPageImageUpload/${profileInfo.userId}`,
      formData
    );
  };

  const mutation = useMutation({
    mutationFn: axiosProfileImg,
  });

  const inputChange = async (e) => {
    const files = e.target.files[0];
    const formData = new FormData();

    formData.append("image", files);

    const res = mutation.mutateAsync(formData);
  };

  return (
    <Snaps>
      <ProfileHeader>
        <HeaderLeft>
          <h2>프로필 정보</h2>
          <p>{profileInfo.userEmail}</p>
        </HeaderLeft>
        <HeaderRight>회원정보 변경하기</HeaderRight>
      </ProfileHeader>
      <ProfileBody>
        <ProfileImage>
          <img src={profileInfo.profile_img} alt="profile" />
          <button onClick={profileButton}>
            <FaCamera />
          </button>
          <input
            type="file"
            style={{ display: "none" }}
            ref={fileRef}
            onChange={inputChange}
          />
        </ProfileImage>
      </ProfileBody>
    </Snaps>
  );
};

export default SnapProfile;
