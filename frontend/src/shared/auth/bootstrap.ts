import { devLogin, telegramLogin } from "@/features/auth/api";

export async function bootstrapAuth() {
  const existingToken = localStorage.getItem("access_token");
  if (existingToken) return;

  const useDevLogin = import.meta.env.VITE_USE_DEV_LOGIN === "true";

  if (useDevLogin) {
    const telegramId = Number(
      import.meta.env.VITE_DEV_TELEGRAM_ID || "999999999",
    );
    const data = await devLogin(telegramId);

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("current_user", JSON.stringify(data.user));
    return;
  }

  const initData = window.Telegram?.WebApp?.initData;

  if (!initData) {
    throw new Error("Telegram initData is missing");
  }

  const data = await telegramLogin(initData);

  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("current_user", JSON.stringify(data.user));
}
