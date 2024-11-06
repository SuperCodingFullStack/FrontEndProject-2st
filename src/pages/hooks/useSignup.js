import { useState } from "react";
import api from "../../utils/api";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await api.post("http://52.78.168.169/api/signup", {
        userName: id,
        password,
        phone: phoneNumber,
        address,
        referenceId: recommandId || "",
        cashed: 0,
        profile_img: profileImg,
        email,
      });
      setError(null);
      onSuccess();
      navigate("/login"); // 회원가입 성공 시 로그인 페이지로 이동
    } catch (err) {
      setError(err.response?.message || "회원가입 실패");
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
