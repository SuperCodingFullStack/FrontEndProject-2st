import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useFormFields = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const [recommandId, setRecommandId] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);
  const navigate = useNavigate();

  const handleIdChange = (e) => setId(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleCheckPasswordChange = (e) => setCheckPassword(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
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
  const handlePrevBtnClick = () => navigate("/login");

  return {
    id,
    password,
    checkPassword,
    showPassword,
    showCheckPassword,
    email,
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
    handlePrevBtnClick,
  };
};

export default useFormFields;
