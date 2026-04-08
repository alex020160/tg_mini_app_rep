interface TelegramWebApp {
  ready: () => void;
  expand: () => void;
  initData: string;
}

interface TelegramGlobal {
  WebApp: TelegramWebApp;
}

interface Window {
  Telegram?: TelegramGlobal;
}
