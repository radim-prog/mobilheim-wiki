#!/usr/bin/env python3
"""Zjistí dostupné Notion workspace a teamspace"""

import os
from notion_client import Client

NOTION_TOKEN = os.getenv("NOTION_TOKEN")

def find_workspace():
    notion = Client(auth=NOTION_TOKEN)

    print("🔍 Hledám dostupné workspace a stránky...\n")

    try:
        # Vyhledej všechny stránky a databáze
        results = notion.search(filter={"property": "object", "value": "page"})

        print(f"Nalezeno {len(results.get('results', []))} stránek:\n")

        for item in results.get('results', []):
            item_type = item.get('object')
            item_id = item['id']

            # Získej titulek
            title = "Untitled"
            if item.get('properties'):
                title_prop = item['properties'].get('title') or item['properties'].get('Name')
                if title_prop and title_prop.get('title') and len(title_prop['title']) > 0:
                    title = title_prop['title'][0]['text']['content']

            # Parent info
            parent = item.get('parent', {})
            parent_type = parent.get('type', 'unknown')

            print(f"📄 {title}")
            print(f"   ID: {item_id}")
            print(f"   Parent: {parent_type}")

            if parent_type == 'workspace':
                print(f"   ⭐ WORKSPACE PAGE - můžu použít jako parent!")

            print()

        # Zkus vyhledat "Domečky"
        print("\n🔍 Hledám 'Domečky'...")
        domecky_results = notion.search(query="Domečky")

        if domecky_results.get('results'):
            print(f"\n✅ Nalezeno {len(domecky_results['results'])} výsledků pro 'Domečky':\n")
            for item in domecky_results['results']:
                item_id = item['id']
                print(f"   ID: {item_id}")
                print(f"   Type: {item.get('object')}")
                print()
        else:
            print("❌ 'Domečky' nenalezeno")
            print("\n💡 Zkusím vytvořit stránku v workspace root...")

    except Exception as e:
        print(f"❌ Chyba: {e}")

if __name__ == "__main__":
    find_workspace()
