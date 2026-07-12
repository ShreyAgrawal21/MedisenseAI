import api from "./api";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "@/types/auth";

export const login = async (
  data: LoginRequest
): Promise<AuthResponse> => {
  const formData = new URLSearchParams();

  formData.append("username", data.email);
  formData.append("password", data.password);

  const response = await api.post<AuthResponse>(
    "/auth/login",
    formData,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return response.data;
};

export const register = async (
  data: RegisterRequest
): Promise<void> => {
  await api.post("/users/register", data);
};

export const logout = () => {
  localStorage.removeItem("access_token");
  window.location.href = "/login";
};

