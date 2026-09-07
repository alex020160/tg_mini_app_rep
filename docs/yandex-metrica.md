# Yandex Metrica handoff

## Counter

The frontend uses Yandex Metrica counter `108964987`.

The counter is initialized as an SPA counter with:

```text
defer=true
webvisor=true
clickmap=true
trackLinks=true
accurateTrackBounce=true
trackHash=true
```

The app sends virtual page views with `ym(..., "hit", ...)` when screens change
and sends JavaScript goals with `ym(..., "reachGoal", ...)`.

## Promo UTM links

Direct Telegram links, without UTM:

```text
https://t.me/SmartPetHelper_bot?startapp=premium7
https://t.me/SmartPetHelper_bot?startapp=premium30
https://t.me/SmartPetHelper_bot?startapp=family7
https://t.me/SmartPetHelper_bot?startapp=family30
```

Do not add `utm_*` parameters directly to Telegram Mini App links. Telegram
deep links are not SmartPet pages, and the Metrica counter cannot count visits
on `t.me`.

Direct VK links:

```text
https://vk.ru/app54599546#promo=premium7&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=premium7
https://vk.ru/app54599546#promo=premium30&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=premium30
https://vk.ru/app54599546#promo=family7&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=family7
https://vk.ru/app54599546#promo=family30&utm_source=vk&utm_medium=promo_link&utm_campaign=free_trial&utm_content=family30
```

Best links for Metrica and QR campaigns:

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

Use the `smartpet-lunyc.amvera.io` links when the traffic source must be visible
in Yandex Metrica UTM reports. Direct `t.me` links are still useful for Telegram
posts and chats, but the Metrica counter is not installed on `t.me`, so the
cleanest tracked first visit happens on the SmartPet domain.

## Goals

Create JavaScript-event goals in Yandex Metrica with these identifiers:

```text
app_open
auth_success
promo_open_platform_clicked
promo_redeemed
promo_redeem_failed
subscription_plan_selected
subscription_cta_clicked
pet_created
reminder_created
health_check_created
passport_pdf_exported
pet_transfer_created
pet_transfer_accepted
vk_messages_enabled
vk_messages_test_sent
```

For button analytics, use the `button_click` goal and filter event parameters by
`button_id`.

For feature analytics, use the `feature_use` goal and filter event parameters by
`feature` and `action`.

## Reports

Recommended reports:

```text
Reports -> Sources -> UTM tags
Reports -> Conversions
Reports -> Content -> Popular pages
Reports -> Parameters -> Event parameters
```

Useful parameters:

```text
utm_source
utm_medium
utm_campaign
utm_content
promo
promo_code
platform
subscription_plan
button_id
feature
action
```

## Click Map

Click Map is enabled in the counter code, but SmartPet is a Telegram/VK Mini App.
Yandex Metrica opens pages in an iframe without Telegram/VK launch parameters,
so it may show the boot-error screen instead of a real authenticated screen.

For product decisions, prefer JavaScript goals and event parameters. They are
more reliable for Mini Apps than the visual click map.

If Click Map shows an iframe error, check:

```text
Settings -> Counter -> Webvisor, scroll map, form analytics: enabled
Counter domains include smartpet-lunyc.amvera.io
The checked URL is https://smartpet-lunyc.amvera.io/
Browser extensions/ad blockers are disabled
```

The app does not intentionally set `X-Frame-Options`, but the authenticated Mini
App UI still may not replay correctly in the Metrica iframe.
