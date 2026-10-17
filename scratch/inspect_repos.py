import urllib.request
import json
import base64
import sys

sys.stdout.reconfigure(encoding='utf-8')

def inspect_repo(repo_name):
    print(f"\n=================== REPO: {repo_name} ===================")
    # Get contents
    url = f"https://api.github.com/repos/Shubham-Verma607/{repo_name}/contents"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as resp:
            files = json.loads(resp.read().decode('utf-8'))
            print("Files in repo:")
            for f in files:
                print(f" - {f.get('name')} ({f.get('type')}, {f.get('size')} bytes)")
                if f.get('name').lower() == 'readme.md':
                    # download and print readme
                    readme_req = urllib.request.Request(f.get('url'), headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(readme_req) as r_resp:
                        r_data = json.loads(r_resp.read().decode('utf-8'))
                        content = base64.b64decode(r_data.get('content')).decode('utf-8', errors='ignore')
                        print("\n--- README.md ---")
                        print(content)
                        print("--- END README ---\n")
    except Exception as e:
        print("Error inspecting repo:", e)

inspect_repo("amazon-sales-dashboard")
inspect_repo("mobile-product-sales-dashboard")
