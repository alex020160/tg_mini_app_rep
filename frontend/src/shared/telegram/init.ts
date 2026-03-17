export function initTelegram() {
  const tg = window.Telegram?.WebApp;

  if (!tg) return;

  tg.ready();
  tg.expand();
}
