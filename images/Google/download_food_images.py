"""
Food Image Downloader
=====================
This script automatically downloads aesthetic food images for your bakery menu
and saves them into this folder.

HOW TO RUN:
-----------
1. Open Terminal (press Cmd+Space, type "Terminal", press Enter)
2. Type:  pip3 install requests duckduckgo-search
   and press Enter. Wait for it to finish.
3. Then type:  python3 /Users/joventung/Desktop/Google/download_food_images.py
   and press Enter.
4. The images will appear in this Google folder!
"""

import os
import time
import requests
from pathlib import Path
from duckduckgo_search import DDGS

# ── Configuration ──────────────────────────────────────────────────────────────
SAVE_DIR = Path(__file__).parent          # saves right next to this script
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

# ── Food items list ────────────────────────────────────────────────────────────
FOOD_ITEMS = [
    ("plain_pie",                   "plain meat pie Australian bakery food photography"),
    ("steak_cheese_pie",            "steak cheese pie Australian bakery food photography"),
    ("steak_pepper_pie",            "steak pepper pie Australian bakery food photography"),
    ("shepherds_pie",               "shepherd's pie rustic homemade food photography"),
    ("steak_mushroom_pie",          "steak mushroom pie Australian bakery food photography"),
    ("cheese_bacon_pie",            "cheese bacon pie Australian bakery food photography"),
    ("steak_curry_pie",             "steak curry pie Australian bakery food photography"),
    ("steak_chilli_pie",            "steak chilli pie food photography"),
    ("butter_chicken_pie",          "butter chicken pie Australian food photography"),
    ("meat_pastie_beef",            "beef meat pastie Australian bakery food photography"),
    ("vegetable_pastie",            "vegetable pastie Australian bakery food photography"),
    ("sausage_roll",                "sausage roll Australian bakery golden food photography"),
    ("spinach_ricotta_rolls",       "spinach ricotta rolls pastry baked food photography"),
    ("vanilla_slice",               "vanilla slice Australian bakery cream food photography"),
    ("raspberry_jelly_slice",       "raspberry jelly slice Australian bakery food photography"),
    ("lemon_slice",                 "lemon slice Australian bakery sweet food photography"),
    ("tim_tam_slice",               "tim tam slice chocolate Australian bakery food photography"),
    ("caramel_slice",               "caramel slice Australian bakery food photography"),
    ("hedgehog_slice",              "hedgehog slice Australian bakery chocolate food photography"),
    ("rocky_road_slice",            "rocky road slice Australian bakery food photography"),
    ("peppermint_slice",            "peppermint slice Australian bakery chocolate food photography"),
    ("cherry_ripe_slice",           "cherry ripe slice Australian bakery food photography"),
    ("lamingtons_chocolate",        "lamington chocolate Australian bakery food photography"),
    ("lamingtons_strawberry",       "lamington strawberry pink Australian bakery food photography"),
    ("banana_cake",                 "banana cake slice bakery aesthetic food photography"),
    ("banana_bread",                "banana bread loaf slice bakery food photography"),
    ("carrot_cake",                 "carrot cake cream cheese frosting food photography"),
    ("apple_cake",                  "apple cake slice bakery aesthetic food photography"),
    ("apple_scroll",                "apple scroll pastry bakery food photography"),
    ("coffee_scroll",               "coffee scroll pastry bakery cinnamon food photography"),
    ("cheese_vegemite_scroll",      "cheese vegemite scroll Australian bakery food photography"),
    ("egg_bacon_quiche",            "egg bacon quiche pastry golden food photography"),
    ("spinach_quiche",              "spinach quiche pastry vegetarian food photography"),
]


def search_ddg_images(query: str) -> list:
    """Search DuckDuckGo Images and return a list of direct image URLs."""
    try:
        with DDGS() as ddgs:
            results = list(ddgs.images(
                query,
                max_results=10,
                size="Large",
                type_image="photo",
                layout="Square",
            ))
        return [r["image"] for r in results if r.get("image")]
    except Exception as e:
        print(f"   ⚠  DDG search failed: {e}")
        return []


def download_image(url: str, filepath: Path) -> bool:
    """Download an image from a URL and save to filepath. Returns True on success."""
    try:
        resp = requests.get(url, headers=HEADERS, timeout=20, stream=True)
        resp.raise_for_status()
        content_type = resp.headers.get("Content-Type", "")
        if "image" not in content_type:
            return False
        with open(filepath, "wb") as f:
            for chunk in resp.iter_content(8192):
                f.write(chunk)
        # Sanity check — must be at least 10 KB
        if filepath.stat().st_size < 10_000:
            filepath.unlink()
            return False
        return True
    except Exception:
        if filepath.exists():
            filepath.unlink()
        return False


def main():
    print("=" * 60)
    print("  Bakery Food Image Downloader")
    print("=" * 60)
    SAVE_DIR.mkdir(parents=True, exist_ok=True)

    success_count = 0
    fail_list = []

    for i, (filename, query) in enumerate(FOOD_ITEMS, 1):
        # Check for existing file (any extension)
        existing = list(SAVE_DIR.glob(f"{filename}.*"))
        if existing:
            print(f"[{i:02}/{len(FOOD_ITEMS)}] Skipping '{filename}' (already exists)")
            success_count += 1
            continue

        print(f"[{i:02}/{len(FOOD_ITEMS)}] Searching: {query} ...")
        urls = search_ddg_images(query)

        downloaded = False
        for url in urls:
            # Determine extension from URL or default to jpg
            url_lower = url.lower().split("?")[0]
            if url_lower.endswith(".png"):
                ext = "png"
            elif url_lower.endswith(".webp"):
                ext = "webp"
            else:
                ext = "jpg"
            filepath = SAVE_DIR / f"{filename}.{ext}"
            if download_image(url, filepath):
                size_kb = filepath.stat().st_size // 1024
                print(f"           Saved -> {filepath.name}  ({size_kb} KB)")
                downloaded = True
                success_count += 1
                break

        if not downloaded:
            print(f"           Could not download image for: {filename}")
            fail_list.append(filename)

        # Be polite — small pause between requests
        time.sleep(1.5)

    print()
    print("=" * 60)
    print(f"  Done!  {success_count}/{len(FOOD_ITEMS)} images saved to:")
    print(f"     {SAVE_DIR}")
    if fail_list:
        print()
        print(f"  {len(fail_list)} item(s) could not be downloaded:")
        for name in fail_list:
            print(f"     - {name}")
    print("=" * 60)


if __name__ == "__main__":
    main()
