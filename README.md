# Chipeleganye Online

Mobile-first prototype for a group contribution and payout tracking platform.

## Current prototype
- Responsive blue-and-white fintech-inspired dashboard
- Group capacity display (20 members)
- K2,000 proposed daily contribution and K40,000 potential daily pool (only if all 20 pay)
- Demo spin interaction (not a real or recorded draw)
- Registration preview (does not store or transmit personal information)
- Airtel Money and TNM Mpamba integration placeholders

## Important
This is a frontend demo only. It does not create accounts, collect money, verify payments, or issue real payout positions. Do not enter real member details. Before handling real money, implement a secure backend, access controls, payment-provider-approved integration, audit logs, missed-payment/dispute rules, and obtain appropriate Malawi regulatory/legal guidance.

## Run locally in Termux
A simple static server can be used:

```sh
pkg update
pkg install nodejs
cd chipeleganye-online
npx serve .
```

Open the local URL shown by the server in your browser. If `npx serve` is unavailable, use Python if installed:

```sh
python -m http.server 8080
```

Then open `http://127.0.0.1:8080`.

## Deploy
The static frontend can be published with GitHub Pages. Backend-dependent features must be hosted separately.