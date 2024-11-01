import { useState } from "react";

const useProfileImgForm = () => {
  const defaultImage =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  const [profileImg, setProfileImg] = useState(defaultImage);
  const [imagePreview, setImagePreview] = useState(defaultImage);

  // 파일 선택 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(defaultImage);
    }
  };

  return {
    profileImg,
    imagePreview,
    handleImageChange,
  };
};

export default useProfileImgForm;
