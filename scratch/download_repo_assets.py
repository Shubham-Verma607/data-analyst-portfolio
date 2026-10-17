import urllib.request
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

def download_images(repo_name):
    print(f"\nChecking images for {repo_name}...")
    for sub in ['Dashboard', 'Require Images']:
        url = f"https://api.github.com/repos/Shubham-Verma607/{repo_name}/contents/{sub}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            with urllib.request.urlopen(req) as resp:
                items = json.loads(resp.read().decode('utf-8'))
                for item in items:
                    print(f"[{sub}] {item.get('name')} -> {item.get('download_url')}")
                    # Download image to public/assets/projects/
                    download_url = item.get('download_url')
                    if download_url and any(item.get('name').lower().endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.webp']):
                        fname = f"{repo_name.replace('-', '_')}_{item.get('name').lower()}"
                        out_path = os.path.join("public", "assets", "projects", fname)
                        print(f"Downloading to {out_path}...")
                        img_req = urllib.request.Request(download_url, headers={'User-Agent': 'Mozilla/5.0'})
                        with urllib.request.urlopen(img_req) as img_resp:
                            with open(out_path, "wb") as f_out:
                                f_out.write(img_resp.read())
                        print("Saved!")
        except Exception as e:
            print(f"Error checking {sub}:", e)

download_images("mobile-product-sales-dashboard")
download_images("amazon-sales-dashboard")
