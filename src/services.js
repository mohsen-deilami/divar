import api from "./configs/api";
import { getCookie } from "./utils/cookie";
const sendOtp = async (mobile) => {
  try {
    const response = await api.post("auth/send-otp", { mobile });
    return response;
  } catch (error) {
    return { error };
  }
};

const checkOtp = async (mobile, code) => {
  try {
    const response = await api.post("auth/check-otp", { mobile, code });
    return { response };
  } catch (error) {
    return error;
  }
};

const token = getCookie("accessToken");
const getProfile = () => api.get("/user/whoami");
const getNewToken = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;
  try {
    const response = await api.post("/auth/check-refresh-token", {
      refreshToken,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};
export { sendOtp, checkOtp, getProfile, getNewToken };
