import requests
import time

while True:
    try:
        url = "https://api.coingecko.com/api/v3/simple/price"
        params = {
            "ids": "bitcoin,ethereum",
            "vs_currencies": "usd"
        }

        response = requests.get(url, params=params, timeout=20)
        response.raise_for_status()
        data = response.json()

        print("\n=== WEB3 PRICE MONITOR ===")
        print("BTC: $", data["bitcoin"]["usd"])
        print("ETH: $", data["ethereum"]["usd"])

    except Exception as e:
        print("Error:", e)

    time.sleep(60)
