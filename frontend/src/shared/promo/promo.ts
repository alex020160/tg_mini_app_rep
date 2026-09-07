import { getTelegramInitData } from "@/shared/platform/telegram";

const promoParamNames = ["promo", "tgWebAppStartParam", "start_param", "startapp"];
const launchParamNames = ["tgWebAppStartParam", "start_param", "startapp"];
const telegramBotUsername = "SmartPetHelper_bot";
const vkAppId = "54599546";
const transferPrefix = "transfer_";
const transferStorageKey = "smartpet_launch_transfer_token";

function readFromParams(value: string, paramNames: string[]) {
  const params = new URLSearchParams(value.replace(/^[?#]/, ""));

  for (const paramName of paramNames) {
    const paramValue = params.get(paramName);
    if (paramValue) return paramValue;
  }

  return "";
}

function normalizePromoCode(value: string) {
  return value.startsWith(transferPrefix) ? "" : value;
}

function normalizeTransferToken(value: string) {
  if (!value) return "";
  return value.startsWith(transferPrefix) ? value.slice(transferPrefix.length) : value;
}

function normalizeHashValue(value: string) {
  return value.replace(/^#/, "");
}

function readTransferTokenFromPath() {
  const match = window.location.pathname.match(/^\/transfer\/([^/]+)/);
  return match?.[1] ? decodeURIComponent(match[1]) : "";
}

export function getLaunchPromoCode() {
  const fromWebApp = window.Telegram?.WebApp?.initDataUnsafe?.start_param;
  if (fromWebApp) return normalizePromoCode(fromWebApp);

  const fromTelegramInitData = readFromParams(getTelegramInitData(), promoParamNames);
  if (fromTelegramInitData) return normalizePromoCode(fromTelegramInitData);

  return normalizePromoCode(
    readFromParams(window.location.search, promoParamNames)
      || readFromParams(window.location.hash, promoParamNames),
  );
}

export function getLaunchTransferToken() {
  const fromPath = readTransferTokenFromPath();
  if (fromPath) return normalizeTransferToken(fromPath);

  const fromWebApp = window.Telegram?.WebApp?.initDataUnsafe?.start_param;
  if (fromWebApp?.startsWith(transferPrefix)) return normalizeTransferToken(fromWebApp);

  const fromTelegramInitData = readFromParams(getTelegramInitData(), launchParamNames);
  if (fromTelegramInitData?.startsWith(transferPrefix)) {
    return normalizeTransferToken(fromTelegramInitData);
  }

  const directSearchTransfer = readFromParams(window.location.search, ["transfer"]);
  if (directSearchTransfer) return normalizeTransferToken(directSearchTransfer);

  const directHashTransfer = readFromParams(window.location.hash, ["transfer"]);
  if (directHashTransfer) return normalizeTransferToken(directHashTransfer);

  const rawHash = normalizeHashValue(window.location.hash);
  if (rawHash.startsWith(transferPrefix)) return normalizeTransferToken(rawHash);

  const launchSearchTransfer = readFromParams(window.location.search, launchParamNames);
  if (launchSearchTransfer?.startsWith(transferPrefix)) {
    return normalizeTransferToken(launchSearchTransfer);
  }

  const launchHashTransfer = readFromParams(window.location.hash, launchParamNames);
  return launchHashTransfer?.startsWith(transferPrefix)
    ? normalizeTransferToken(launchHashTransfer)
    : "";
}

export function rememberLaunchTransferToken(token = getLaunchTransferToken()) {
  if (!token) return "";

  sessionStorage.setItem(transferStorageKey, token);
  return token;
}

export function consumeLaunchTransferToken() {
  const token = getLaunchTransferToken() || sessionStorage.getItem(transferStorageKey) || "";

  sessionStorage.removeItem(transferStorageKey);

  return token;
}

export function buildTelegramPromoLink(code = getLaunchPromoCode()) {
  const query = code ? `?startapp=${encodeURIComponent(code)}` : "?startapp";
  return `https://t.me/${telegramBotUsername}${query}`;
}

export function buildTelegramTransferLink(token: string) {
  return `https://t.me/${telegramBotUsername}?start=${transferPrefix}${encodeURIComponent(token)}`;
}

export function buildVkTransferLink(token: string) {
  return `https://vk.ru/app${vkAppId}#${transferPrefix}${encodeURIComponent(token)}`;
}
