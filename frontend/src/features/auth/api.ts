import { api } from "@/shared/api/client";

export type AuthUser = {
  id: string;
  telegram_id: number;
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  timezone: string;
};

export type AuthResponse = {
  access_token: string;
  token_type: "bearer";
  user: AuthUser;
};

export async function devLogin(telegramId: number) {
  const response = await api.post<AuthResponse>(
    `/dev/login?telegram_id=${telegramId}`,
  );
  return response.data;
}

export async function telegramLogin(initData: string) {
  const response = await api.post<AuthResponse>("/auth/telegram", {
    init_data: initData,
  });
  return response.data;
}
