import { useState } from "react";

const useProfileImgForm = () => {
  const [profileImg, setProfileImg] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return {
    profileImg,
    imagePreview,
    handleImageChange,
  };
};

export default useProfileImgForm;
