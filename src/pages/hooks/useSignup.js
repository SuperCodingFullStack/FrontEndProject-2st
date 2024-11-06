import { useState } from "react";
import api from "../../utils/api";

const useSignup = ({ onSuccess }) => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [recommandId, setRecommandId] = useState("");
  const defaultImage =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const [profileImg, setProfileImg] = useState(defaultImage);
  const [error, setError] = useState(null);

  const handleSignup = async (data) => {
    console.log("회원가입:", data);

    try {
      await api.post("/api/signup", data);
      setError(null); // 오류 메세지나 상태를 초기화하는 역할
      onSuccess();
    } catch (err) {
      console.error("회원가입 오류:", err.response?.data || err.message);
      setError(err.response?.data?.message || "회원가입 실패");
    }
  };

  return {
    id,
    setId,
    email,
    setEmail,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    recommandId,
    setRecommandId,
    profileImg,
    setProfileImg,
    error,
    handleSignup,
  };
};

export default useSignup;
