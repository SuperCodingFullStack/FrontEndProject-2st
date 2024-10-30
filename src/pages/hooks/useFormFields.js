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

  const handleRecommandIdChange = (e) => setRecommandId(e.target.value);

  const handleRemoveId = () => setId("");
  const handleRemovePassword = () => setPassword("");
  const handleRemoveCheckPassword = () => setCheckPassword("");
  const handleRemoveEmail = () => setEmail("");
  const handleRemoveRecommandId = () => setRecommandId("");

  const clickPasswordVisibility = () => setShowPassword(!showPassword);
  const clickCheckPasswordVisibitity = () =>
    setShowCheckPassword(!showCheckPassword);

  const handleSignUpClick = () => navigate("/signup");
  const handleSignUpPagePrevBtnClick = () => navigate("/login");

  return {
    id,
    password,
    checkPassword,
    showPassword,
    showCheckPassword,
    email,
    isEmailValid,
    recommandId,
    handleIdChange,
    handlePasswordChange,
    handleCheckPasswordChange,
    handleEmailChange,
    handleRecommandIdChange,
    handleRemoveId,
    handleRemovePassword,
    handleRemoveCheckPassword,
    handleRemoveEmail,
    handleRemoveRecommandId,
    clickPasswordVisibility,
    clickCheckPasswordVisibitity,
    handleSignUpClick,
    handleSignUpPagePrevBtnClick,
  };
};

export default useFormFields;
