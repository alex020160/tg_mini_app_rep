# Growth promos and reactivation

## Free promo links

Available promo codes:

```text
premium30
premium7
family30
family7
```

The backend gives the authenticated user the matching subscription after
redeeming a code. Each user can redeem each code only once.

Direct Telegram Mini App links, without UTM:

```text
https://t.me/SmartPetHelper_bot?startapp=premium7
https://t.me/SmartPetHelper_bot?startapp=premium30
https://t.me/SmartPetHelper_bot?startapp=family7
https://t.me/SmartPetHelper_bot?startapp=family30
```

Do not add `utm_*` parameters directly to Telegram Mini App links. Use the
SmartPet-domain links below when campaign traffic must be visible in Yandex
Metrica UTM reports.

VK Mini App links:

```text
https://vk.ru/app54599546#promo=premium7&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=premium7
https://vk.ru/app54599546#promo=premium30&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=premium30
https://vk.ru/app54599546#promo=family7&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=family7
https://vk.ru/app54599546#promo=family30&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=family30
```

Best links for Yandex Metrica tracking:

```text
https://smartpet-lunyc.amvera.io/?promo=premium7&utm_source=telegram&utm_medium=promo_link&utm_campaign=free_trial&utm_content=premium7
https://smartpet-lunyc.amvera.io/?promo=premium30&utm_source=telegram&utm_medium=promo_link&utm_campaign=free_trial&utm_content=premium30
https://smartpet-lunyc.amvera.io/?promo=family7&utm_source=telegram&utm_medium=promo_link&utm_campaign=free_trial&utm_content=family7
https://smartpet-lunyc.amvera.io/?promo=family30&utm_source=telegram&utm_medium=promo_link&utm_campaign=free_trial&utm_content=family30
https://smartpet-lunyc.amvera.io/?promo=premium7&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=premium7
https://smartpet-lunyc.amvera.io/?promo=premium30&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=premium30
https://smartpet-lunyc.amvera.io/?promo=family7&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=family7
https://smartpet-lunyc.amvera.io/?promo=family30&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=family30
```

Use the direct Telegram link only when a one-tap Telegram opening matters more
than source attribution. Use the VK link for VK campaigns; VK keeps the hash part
after `app54599546`, and the Mini App reads `promo` from it after VK auth
identifies the user.

For clean Yandex Metrica source tracking, prefer the `smartpet-lunyc.amvera.io`
links in campaign materials. They open a lightweight platform-choice page first,
so the counter records the UTM visit before the user opens Telegram or VK.

## Amvera environment variables

Optional promo settings:

```text
PROMO_PREMIUM_CODE=premium30
PROMO_PREMIUM_DAYS=30
```

These settings are kept for compatibility with the original `premium30` promo.
The fixed promo codes above work without additional Amvera variables.

Inactive user messages are disabled by default. To enable Telegram reactivation:

```text
RUN_INACTIVE_USER_MESSAGES=true
INACTIVE_USER_DAYS=3
INACTIVE_MESSAGE_COOLDOWN_DAYS=7
```

This sends a Telegram message only to users who have opened the Mini App before,
have a Telegram ID, and have not opened it for the configured number of days.
The cooldown prevents repeated messages every day.

Subscription expiry messages are also disabled by default. To warn Telegram users
before their paid access ends:

```text
RUN_SUBSCRIPTION_EXPIRY_MESSAGES=true
SUBSCRIPTION_EXPIRY_NOTICE_DAYS=3,1
```

With these values, users get one message when 3 days remain and one more message
when 1 day remains. Messages are deduplicated per subscription end date.

## Breeder plan and pet transfer

The `breeder` plan unlocks breeder tools inside the same user account. It has
all family-plan limits plus pet transfer by invite link.

Admin subscription update example:

```powershell
$body = @{
  plan = "breeder"
  expires_at = "2026-12-31T00:00:00Z"
} | ConvertTo-Json -Compress

Invoke-RestMethod `
  -Method Post `
  -Uri "https://smartpet-lunyc.amvera.io/admin/platform-users/telegram/USER_ID/subscription" `
  -Headers @{ Authorization = "Bearer ADMIN_SECRET" } `
  -ContentType "application/json" `
  -Body $body
```

After a breeder creates a transfer from the pet passport, the app generates:

```text
https://t.me/SmartPetHelper_bot?start=transfer_TOKEN
https://vk.ru/app54599546#transfer_TOKEN
https://smartpet-lunyc.amvera.io/transfer/TOKEN
```

The invite is valid for 14 days. When the new owner accepts it, the pet,
reminders, and health-check history move to the new owner account.

## VK community reminder messages

VK reminder messages are sent through the SmartPet VK community. A VK user must
open the Mini App and press the profile button that allows messages from the
community. After that, due reminders can be delivered with `messages.send`.

Backend Amvera variables:

```text
VK_GROUP_ID=239532031
VK_GROUP_ACCESS_TOKEN=community_access_token
VK_API_VERSION=5.199
```

Frontend build variable, optional because the app defaults to the same group:

```text
VITE_VK_GROUP_ID=239532031
```

The group token should be generated in the VK community settings. It must allow
the community to send messages. Do not put the group token into frontend builds.
After enabling messages in the profile, use the `Отправить тест VK` button to
verify that the community token and permissions work before testing scheduled
reminders.
