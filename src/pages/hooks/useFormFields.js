import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 이메일 유효성 검사용 정규식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useFormFields = () => {
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [phoneNumber, setPhoneNumber] = useState("");

  const [recommandId, setRecommandId] = useState("");

  const navigate = useNavigate();

  const handleIdChange = (e) => setId(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCheckPasswordChange = (e) => setCheckPassword(e.target.value);
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // 이메일 유효성 검사 실행
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // 숫자만 허용하고 11자리로 제한
    const formattedValue = value.replace(/\D/g, "").slice(0, 11);
    setPhoneNumber(formattedValue);
  };

  const handleRecommandIdChange = (e) => setRecommandId(e.target.value);

  const handleRemoveId = () => setId("");
  const handleRemovePassword = () => setPassword("");
  const handleRemoveCheckPassword = () => setCheckPassword("");
  const handleRemoveEmail = () => setEmail("");
  const handleRemovePhone = () => setPhoneNumber("");
  const handleRemoveRecommandId = () => setRecommandId("");

  const clickPasswordVisibility = () => setShowPassword(!showPassword);
  const clickCheckPasswordVisibitity = () =>
    setShowCheckPassword(!showCheckPassword);

  const handleSignUpClick = () => navigate("/signup");
  const handleLoginPagePrevBtnClick = () => navigate("/mypage");
  const handleSignUpPagePrevBtnClick = () => navigate("/login");

  return {
    id,
    password,
    checkPassword,
    showPassword,
    showCheckPassword,
    email,
    isEmailValid,
    phoneNumber,
    recommandId,
    handleIdChange,
    handlePasswordChange,
    handleCheckPasswordChange,
    handleEmailChange,
    handlePhoneChange,
    handleRecommandIdChange,
    handleRemoveId,
    handleRemovePassword,
    handleRemoveCheckPassword,
    handleRemoveEmail,
    handleRemovePhone,
    handleRemoveRecommandId,
    clickPasswordVisibility,
    clickCheckPasswordVisibitity,
    handleSignUpClick,
    handleLoginPagePrevBtnClick,
    handleSignUpPagePrevBtnClick,
  };
};

export default useFormFields;
