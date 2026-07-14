import api from "./api";

export interface Profile {

  id: number;

  full_name: string;

  email: string;

  phone_number?: string;

  gender?: string;

  date_of_birth?: string;

  blood_group?: string;

  height?: number;

  weight?: number;

  allergies?: string;

  medical_conditions?: string;

  emergency_contact_name?: string;

  emergency_contact_phone?: string;

  emergency_contact_relation?: string;

  profile_image?: string;

  dark_mode: boolean;

  email_notifications: boolean;

  ai_notifications: boolean;
}

export interface ChangePassword {

  current_password: string;

  new_password: string;

}

export interface Settings {

  dark_mode: boolean;

  email_notifications: boolean;

  ai_notifications: boolean;

}

export async function getProfile() {

  const response = await api.get<Profile>(
    "/profile"
  );

  return response.data;

}

export async function updateProfile(
  profile: Partial<Profile>
) {

  const response = await api.put<Profile>(
    "/profile",
    profile
  );

  return response.data;

}

export async function changePassword(
  password: ChangePassword
) {

  const response = await api.patch(
    "/profile/password",
    password
  );

  return response.data;

}

export async function updateSettings(
  settings: Settings
) {

  const response = await api.patch<Profile>(
    "/profile/settings",
    settings
  );

  return response.data;

}