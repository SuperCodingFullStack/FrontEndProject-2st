import { useState } from "react";

const useAddressForm = () => {
  const [postcode, setPostcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");

  // 주소 검색을 위한 함수 (Daum 우편번호 API)
  const handlePostcodeSearch = (e) => {
    e.preventDefault();
    new window.daum.Postcode({
      oncomplete: function (data) {
        // 선택한 주소 데이터를 받아와서 필요한 정보를 업데이트
        setPostcode(data.zonecode); // 우편번호
        setAddress(data.address); //기본 주소
      },
    }).open();
  };

  return {
    postcode,
    address,
    detailedAddress,
    handlePostcodeSearch,
    setDetailedAddress,
  };
};

export default useAddressForm;
