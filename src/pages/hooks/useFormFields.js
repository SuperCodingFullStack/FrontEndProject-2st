import { useState } from "react";
import { useNavigate } from "react-router-dom";

// 이메일 유효성 검사용 정규식
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useFormFields = () => {
  const [id, setId] = useState("");
  const [isIdValid, setIsIdValid] = useState(false);

  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");

  const [recommandId, setRecommandId] = useState("");

  const navigate = useNavigate();

  const handleIdChange = (e) => {
    const value = e.target.value;
    setId(value);

    // 유효성 검사
    const isValid = /^[a-zA-Z0-9]{5,11}$/.test(value);
    setIsIdValid(isValid);
  };

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 유효성 검사
    setIsPasswordValid(validatePassword(newPassword));

    // 비밀번호 일치 여부 확인
    setIsPasswordMatch(newPassword === checkPassword);
  };

  const handleCheckPasswordChange = (e) => {
    const newCheckPassword = e.target.value;
    setCheckPassword(newCheckPassword);

    // 비밀번호 일치 여부 확인
    setIsPasswordMatch(password === newCheckPassword);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailTouched(true);

    // 이메일 유효성 검사 실행
    setIsEmailValid(emailRegex.test(newEmail));
  };

  const handleEmailFocus = () => {
    setIsEmailTouched(true);
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
    isIdValid,
    password,
    checkPassword,
    showPassword,
    showCheckPassword,
    isPasswordValid,
    isPasswordMatch,
    email,
    isEmailValid,
    isEmailTouched,
    phoneNumber,
    recommandId,
    handleIdChange,
    handlePasswordChange,
    handleCheckPasswordChange,
    handleEmailChange,
    handleEmailFocus,
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
