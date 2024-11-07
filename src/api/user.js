import axios from "axios";

export const fetchUserInfo = async (token) => {
  try {
    const response = await axios.get(`/api/myPageDetail`, {
      headers: {
        Authorization: `Bearer ${token}`, // 토큰을 헤더에 포함하여 요청
      },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    throw error;
  }
};
