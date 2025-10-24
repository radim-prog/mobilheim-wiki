#!/usr/bin/env python3
"""Test Notion API připojení"""

import os
from notion_client import Client

NOTION_TOKEN = os.getenv("NOTION_TOKEN")

def test_connection():
    notion = Client(auth=NOTION_TOKEN)

    # Test 1: Zjisti, co umíme
    print("🔍 Testuji Notion API připojení...\n")

    try:
        # Zkus vyhledat stránky
        results = notion.search(query="Mobilheim")
        print(f"✅ API funguje! Nalezeno {len(results.get('results', []))} stránek\n")

        for page in results.get('results', [])[:5]:
            page_id = page['id']
            title = "Untitled"
            if page.get('properties', {}).get('title', {}).get('title'):
                title = page['properties']['title']['title'][0]['text']['content']
            print(f"📄 {title}")
            print(f"   ID: {page_id}\n")

    except Exception as e:
        print(f"❌ Chyba: {e}")
        print("\n💡 ŘEŠENÍ:")
        print("1. Otevřete stránku v Notion: https://notion.so/292c49dc953281529cc3cac0254b591a")
        print("2. Klikněte na '...' → 'Connections' (nebo 'Add connections')")
        print("3. Vyberte vaši integraci a přidejte ji")
        print("4. Zkuste znovu spustit skript")

if __name__ == "__main__":
    test_connection()
