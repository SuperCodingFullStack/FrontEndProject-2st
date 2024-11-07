import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../store/slice/authSlice";
import { fetchUserInfo } from "../../api/user"; // API 함수 가져오기

const useFetchUserInfo = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const getUserInfo = async () => {
      if (token) {
        try {
          const userInfo = await fetchUserInfo(token);
          dispatch(setUserInfo(userInfo));
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
    };

    getUserInfo();
  }, [token, dispatch, auth]);
};

export default useFetchUserInfo;
