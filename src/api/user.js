import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const fetchUserInfo = async (token) => {
  const decodeToken = jwtDecode(token);
  const userId = decodeToken.sub;

  try {
    const response = await axios.get(
      `http://52.78.168.169/api/myPageDetail/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 포함하여 요청
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user info:", error);
    throw error;
  }
};
