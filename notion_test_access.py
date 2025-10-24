#!/usr/bin/env python3
"""Test: K čemu mám přístup v Notionu"""

import os
from notion_client import Client

NOTION_TOKEN = os.getenv("NOTION_TOKEN")

def test_access():
    notion = Client(auth=NOTION_TOKEN)

    print("🔍 Testuji přístup k Notion API...\n")

    # Test 1: Získej informace o tokenu
    try:
        # Zkus vytvořit stránku BEZ parent ID (vytvoří se v root workspace)
        print("1️⃣ Zkouším vytvořit stránku v root workspace...\n")

        page = notion.pages.create(
            parent={"type": "workspace"},
            properties={
                "title": {
                    "title": [{
                        "text": {"content": "TEST - Mobilheim Wiki"}
                    }]
                }
            },
            icon={"type": "emoji", "emoji": "🏠"}
        )

        print(f"✅ ÚSPĚCH! Stránka vytvořena!")
        print(f"   URL: https://notion.so/{page['id'].replace('-', '')}")
        print(f"   ID: {page['id']}\n")

        return page['id']

    except Exception as e:
        print(f"❌ Chyba při vytváření stránky: {e}\n")

        # Zkus search
        print("2️⃣ Zkouším vyhledat existující stránky...\n")
        try:
            results = notion.search()
            print(f"✅ Search funguje! Nalezeno: {len(results.get('results', []))} položek\n")

            for i, item in enumerate(results.get('results', [])[:5]):
                print(f"{i+1}. {item.get('object')}: {item['id']}")

        except Exception as e2:
            print(f"❌ Search také selhal: {e2}\n")

        # Zkus list users
        print("3️⃣ Zkouším získat seznam uživatelů...\n")
        try:
            users = notion.users.list()
            print(f"✅ Users API funguje! Počet: {len(users.get('results', []))}\n")
        except Exception as e3:
            print(f"❌ Users API selhalo: {e3}\n")

        print("\n" + "="*60)
        print("ZÁVĚR: Integrace má omezený přístup nebo špatný token.")
        print("="*60)

if __name__ == "__main__":
    test_access()
