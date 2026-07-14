import api from "./api";

export interface Settings {
  dark_mode: boolean;
  email_notifications: boolean;
  ai_notifications: boolean;
}

export interface PasswordChange {
  current_password: string;
  new_password: string;
}

export async function updateSettings(
  settings: Settings
) {
  const response = await api.patch(
    "/profile/settings",
    settings
  );

  return response.data;
}

export async function changePassword(
  password: PasswordChange
) {
  const response = await api.patch(
    "/profile/password",
    password
  );

  return response.data;
}