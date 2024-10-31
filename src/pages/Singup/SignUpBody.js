import React from "react";
import styled from "styled-components";
import { RxEyeClosed } from "react-icons/rx";
import { PiEye } from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";
import useFormFields from "../hooks/useFormFields";
import useAddressForm from "../hooks/useAddressForm";
import useProfileImgForm from "../hooks/useProfileImgForm";

const SignUpBody = () => {
  const {
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
  } = useFormFields();

  const {
    postcode,
    address,
    detailedAddress,
    handlePostcodeSearch,
    setDetailedAddress,
  } = useAddressForm();

  const { imagePreview, handleImageChange } = useProfileImgForm();

  const isFormValid = id && password && checkPassword && email && phoneNumber;

  return (
    <Container>
      <form>
        <IdContainer>
          <TitleId>아이디 *</TitleId>
          <Id
            type="text"
            required
            placeholder="영문, 숫자 5-11자"
            value={id}
            onChange={handleIdChange}
          />
          {id && (
            <RemoveIdIcon onClick={handleRemoveId}>
              <IoMdCloseCircle />
            </RemoveIdIcon>
          )}
        </IdContainer>

        <PasswordContainer>
          <TitlePw>비밀번호 *</TitlePw>
          <Password
            type={showPassword ? "text" : "password"}
            required
            placeholder="숫자, 영문, 특수문자 조합 최소 8자"
            value={password}
            onChange={handlePasswordChange}
          />
          {password && (
            <RemovePwIcon onClick={handleRemovePassword}>
              <IoMdCloseCircle />
            </RemovePwIcon>
          )}
          <VisibleIcon1 onClick={clickPasswordVisibility}>
            {showPassword ? <PiEye /> : <RxEyeClosed />}
          </VisibleIcon1>

          <CheckPassword
            type={showCheckPassword ? "text" : "password"}
            required
            placeholder="새 비밀번호 확인"
            value={checkPassword}
            onChange={handleCheckPasswordChange}
          />
          {checkPassword && (
            <RemoveCheckPwIcon onClick={handleRemoveCheckPassword}>
              <IoMdCloseCircle />
            </RemoveCheckPwIcon>
          )}
          <VisibleIcon2 onClick={clickCheckPasswordVisibitity}>
            {showCheckPassword ? <PiEye /> : <RxEyeClosed />}
          </VisibleIcon2>
        </PasswordContainer>

        <EmailContainer>
          <TitleEmail>이메일 *</TitleEmail>
          <Email
            type="email"
            required
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={handleEmailChange}
            isValid={isEmailValid}
          />
          {email && (
            <RemoveEmailIcon onClick={handleRemoveEmail}>
              <IoMdCloseCircle />
            </RemoveEmailIcon>
          )}
          {isEmailValid ? (
            <EmailInfo>계정 분실 시 본인인증 정보로 활용됩니다.</EmailInfo>
          ) : (
            <EmailErrorMessage>
              올바른 이메일 주소를 입력하세요.
            </EmailErrorMessage>
          )}
        </EmailContainer>

        <PhoneContainer>
          <TitlePhone>전화번호 *</TitlePhone>
          <Phone
            type="tel"
            required
            placeholder="전화번호를 입력해 주세요"
            value={phoneNumber}
            onChange={handlePhoneChange}
            maxLength={11}
          />
          {phoneNumber && (
            <RemovePhoneNumIcon onClick={handleRemovePhone}>
              <IoMdCloseCircle />
            </RemovePhoneNumIcon>
          )}
          <PhoneNumInfo>숫자만 입력해 주세요.</PhoneNumInfo>
        </PhoneContainer>

        <AddressContainer>
          <TitleAddress>주소 *</TitleAddress>
          <PostcodeContainer>
            <Postcode
              type="text"
              placeholder="우편번호"
              value={postcode}
              readOnly
            />
            <SearchBtn onClick={handlePostcodeSearch}>우편번호 찾기</SearchBtn>
          </PostcodeContainer>
          <Address type="text" placeholder="주소" value={address} readOnly />
          <DetailedAddress
            type="text"
            placeholder="상세 주소를 입력하세요"
            value={detailedAddress}
            onChange={(e) => setDetailedAddress(e.target.value)}
          />
        </AddressContainer>

        <RecommandIdContainer>
          <TitleRecommandId>친구 초대 추천인 아이디 (선택)</TitleRecommandId>
          <RecommandId
            type="text"
            placeholder="추천인 아이디를 입력해 주세요"
            value={recommandId}
            onChange={handleRecommandIdChange}
          />
          {recommandId && (
            <RemoveRecommandIdIcon onClick={handleRemoveRecommandId}>
              <IoMdCloseCircle />
            </RemoveRecommandIdIcon>
          )}
          <RecommandIdInfo>
            가입 후 추천인과 신규회원 모두 적립금 5,000원을 드립니다.
          </RecommandIdInfo>
        </RecommandIdContainer>

        <ProfileImgContainer>
          <TitleProfileImg>프로필 이미지 업로드</TitleProfileImg>
          <ImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview && <ImagePreview src={imagePreview} alt="미리보기" />}
        </ProfileImgContainer>

        <SignUpBtnContainer>
          <SignUpBtn isFormValid={isFormValid}>가입하기</SignUpBtn>
        </SignUpBtnContainer>
      </form>
    </Container>
  );
};

// 스타일 정의
const Container = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  box-sizing: border-box;
`;

const IdContainer = styled.div`
  width: 35rem;
  position: relative;
  border: none;
`;

const TitleId = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Id = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  width: 100%;
  height: 2rem;
  text-align: start;
  padding-left: 0.5rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const RemoveIdIcon = styled.span`
  position: absolute;
  right: 0;
  top: 75%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const PasswordContainer = styled.div`
  width: 35rem;
  position: relative;
  margin-top: 2.5rem;
  border: none;
  display: flex;
  flex-direction: column;
`;

const TitlePw = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Password = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  text-align: start;
  padding-left: 0.5rem;
  width: 100%;
  height: 1.9rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const RemovePwIcon = styled.span`
  position: absolute;
  right: 1.7rem;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const VisibleIcon1 = styled.span`
  position: absolute;
  right: 0;
  top: 40%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #949494;
  font-size: 1.18rem;
`;

const CheckPassword = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  text-align: start;
  padding-left: 0.5rem;
  width: 100%;
  height: 1.9rem;
  margin-top: 1rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const RemoveCheckPwIcon = styled.span`
  position: absolute;
  right: 1.7rem;
  top: 87%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const VisibleIcon2 = styled.span`
  position: absolute;
  right: 0;
  top: 87%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #949494;
  font-size: 1.18rem;
`;

const EmailContainer = styled.div`
  width: 35rem;
  position: relative;
  margin-top: 2.5rem;
  border: none;
`;

const TitleEmail = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Email = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  width: 100%;
  height: 2rem;
  text-align: start;
  padding-left: 0.5rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: ${({ isValid }) => (isValid ? "gray" : "#f40103")};
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const RemoveEmailIcon = styled.span`
  position: absolute;
  right: 0;
  top: 57%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const EmailErrorMessage = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #f40103;
`;

const EmailInfo = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #949494;
`;

const PhoneContainer = styled.div`
  width: 35rem;
  position: relative;
  margin-top: 2.5rem;
  border: none;
`;

const TitlePhone = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Phone = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  text-align: start;
  padding-left: 0.5rem;
  width: 100%;
  height: 1.9rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const RemovePhoneNumIcon = styled.span`
  position: absolute;
  right: 0;
  top: 57%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const PhoneNumInfo = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #949494;
`;

const AddressContainer = styled.div`
  width: 35rem;
  position: relative;
  margin-top: 2.5rem;
  border: none;
`;

const TitleAddress = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`;

const PostcodeContainer = styled.div``;

const Postcode = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  text-align: start;
  padding-left: 0.5rem;
  width: 30%;
  height: 1.9rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const SearchBtn = styled.button`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  padding: 0.5rem;
  margin-left: 0.3rem;
  cursor: pointer;
`;

const Address = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  text-align: start;
  padding-left: 0.5rem;
  width: 100%;
  height: 1.9rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const DetailedAddress = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  text-align: start;
  padding-left: 0.5rem;
  width: 100%;
  height: 1.9rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const RecommandIdContainer = styled.div`
  width: 35rem;
  position: relative;
  margin-top: 2.5rem;
  border: none;
`;

const TitleRecommandId = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

const RecommandId = styled.input`
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
  width: 100%;
  height: 2rem;
  text-align: start;
  padding-left: 0.5rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: gray;
    outline: none;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 0.9rem;
  }
`;

const RecommandIdInfo = styled.p`
  margin-top: 0.4rem;
  font-size: 0.7rem;
  color: #949494;
`;

const RemoveRecommandIdIcon = styled.span`
  position: absolute;
  right: 0;
  top: 57%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #cccccc;
  font-size: 1.18rem;
`;

const ProfileImgContainer = styled.div`
  width: 35rem;
  position: relative;
  margin-top: 2.5rem;
  border: none;
`;

const TitleProfileImg = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
`;

const ImageInput = styled.input`
  margin-top: 0.5rem;
`;

const ImagePreview = styled.image`
  max-width: 200px;
  max-height: 200px;
  margin-top: 0.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.3rem;
`;

const SignUpBtnContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin-top: 2rem;
`;

const SignUpBtn = styled.button`
  background-color: ${({ isFormValid }) => (isFormValid ? "black" : "#EAEAEA")};
  border-radius: 0.3rem;
  border: none;
  color: ${({ isFormValid }) => (isFormValid ? "white" : "#CCCCCC")};
  width: 35.7rem;
  height: 2.7rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  margin-top: auto;
`;

export default SignUpBody;
