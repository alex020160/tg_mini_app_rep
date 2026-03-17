interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
}

interface TelegramGlobal {
  WebApp: TelegramWebApp;
}

interface Window {
  Telegram?: TelegramGlobal;
}
