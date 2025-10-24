#!/usr/bin/env python3
"""
Notion Import Script - Simplified
Creates page hierarchy in Notion with instructions for manual markdown import
"""

import os
import sys
from pathlib import Path
from notion_client import Client
import time

# Notion konfigurace
NOTION_TOKEN = os.getenv("NOTION_TOKEN")
PARENT_PAGE_ID = "292c49dc953281529cc3cac0254b591a"  # Hlavní Mobilheim Wiki stránka

def create_page(notion, parent_id, title, emoji=None, content_text=None):
    """Vytvoří novou stránku v Notion"""
    properties = {
        "title": {
            "title": [{
                "text": {"content": title}
            }]
        }
    }

    page_data = {
        "parent": {"page_id": parent_id},
        "properties": properties
    }

    if emoji:
        page_data["icon"] = {"type": "emoji", "emoji": emoji}

    page = notion.pages.create(**page_data)

    # Přidej obsah jako callout s instrukcemi
    if content_text:
        time.sleep(0.3)  # Rate limiting
        try:
            notion.blocks.children.append(
                block_id=page["id"],
                children=[{
                    "object": "block",
                    "type": "callout",
                    "callout": {
                        "rich_text": [{
                            "type": "text",
                            "text": {"content": content_text[:1900]}
                        }],
                        "icon": {"emoji": "📄"}
                    }
                }]
            )
        except Exception as e:
            print(f"   ⚠️  Chyba při přidávání obsahu: {e}")

    return page

def count_files(directory, pattern="*.md"):
    """Spočítá soubory v adresáři"""
    return len(list(Path(directory).rglob(pattern)))

def create_placeholder_page(notion, parent_id, title, emoji, file_path):
    """Vytvoří placeholder stránku s instrukcemi pro import"""
    file_name = Path(file_path).name
    instruction = f"📁 Soubor k importu: {file_name}\n\nKlikněte ⋯ → Import → Markdown a vyberte tento soubor z repozitáře."
    return create_page(notion, parent_id, title, emoji, instruction)

def main():
    if not NOTION_TOKEN:
        print("❌ CHYBA: NOTION_TOKEN není nastaven!")
        print("Spusť: export NOTION_TOKEN='tvuj_token'")
        sys.exit(1)

    # Inicializuj Notion klienta
    notion = Client(auth=NOTION_TOKEN)

    print("🚀 Začínám import do Notion...\n")

    # Vytvoř hlavní sekce
    print("📂 Vytvářím hlavní strukturu...")

    blog_page = create_page(notion, PARENT_PAGE_ID, "📝 Blog", "📝")
    wiki_page = create_page(notion, PARENT_PAGE_ID, "📚 Wiki", "📚")
    faq_page = create_page(notion, PARENT_PAGE_ID, "❓ FAQ", "❓")
    studies_page = create_page(notion, PARENT_PAGE_ID, "📊 Případové studie", "📊")

    print("\n📝 BLOG - Importuji články...")
    blog_dir = Path("/home/user/mobilheim-wiki/blog")
    for md_file in sorted(blog_dir.glob("*.md")):
        upload_markdown_file(notion, blog_page["id"], md_file)

    print("\n📚 WIKI - Importuji dokumentaci...")

    # Legislativa
    leg_page = create_page(notion, wiki_page["id"], "⚖️ Legislativa", "⚖️")
    leg_files = [
        "wiki/legislativa/README.md",
        "wiki/legislativa/stavebni-zakon/stary-zakon-183-2006.md",
        "wiki/legislativa/stavebni-zakon/novy-zakon-283-2021.md",
        "wiki/legislativa/vyhlášky/vyhlaska-501-2006.md",
        "wiki/legislativa/vyhlášky/vyhlaska-268-2009.md",
        "wiki/legislativa/metodiky-mmr/metodika-mobilni-domy-2022.md",
        "wiki/legislativa/judikatura/prehled-soudnich-rozhodnuti.md"
    ]
    for file_path in leg_files:
        full_path = Path("/home/user/mobilheim-wiki") / file_path
        if full_path.exists():
            upload_markdown_file(notion, leg_page["id"], full_path)

    # Technické specifikace
    tech_page = create_page(notion, wiki_page["id"], "🔧 Technické specifikace", "🔧")
    tech_dir = Path("/home/user/mobilheim-wiki/wiki/technicke-specifikace")
    for md_file in tech_dir.rglob("*.md"):
        upload_markdown_file(notion, tech_page["id"], md_file)

    # Připojení sítí
    sit_page = create_page(notion, wiki_page["id"], "🔌 Připojení k sítím", "🔌")
    sit_dir = Path("/home/user/mobilheim-wiki/wiki/pripojeni-siti")
    for md_file in sorted(sit_dir.glob("*.md")):
        upload_markdown_file(notion, sit_page["id"], md_file)

    # Financování
    fin_page = create_page(notion, wiki_page["id"], "💰 Financování a dotace", "💰")
    fin_dir = Path("/home/user/mobilheim-wiki/wiki/financovani")
    for md_file in sorted(fin_dir.glob("*.md")):
        upload_markdown_file(notion, fin_page["id"], md_file)

    # Údržba
    udr_page = create_page(notion, wiki_page["id"], "🔨 Údržba a životnost", "🔨")
    udr_dir = Path("/home/user/mobilheim-wiki/wiki/udrzba")
    for md_file in sorted(udr_dir.glob("*.md")):
        upload_markdown_file(notion, udr_page["id"], md_file)

    print("\n❓ FAQ - Importuji FAQ...")
    faq_file = Path("/home/user/mobilheim-wiki/faq/faq-kompletni.md")
    if faq_file.exists():
        upload_markdown_file(notion, faq_page["id"], faq_file)

    print("\n📊 PŘÍPADOVÉ STUDIE - Importuji studie...")
    studies_dir = Path("/home/user/mobilheim-wiki/wiki/pripadove-studie")
    for md_file in sorted(studies_dir.glob("*.md")):
        upload_markdown_file(notion, studies_page["id"], md_file)

    print("\n✅ HOTOVO!")
    print(f"\n🔗 Otevřete: https://www.notion.so/{PARENT_PAGE_ID.replace('-', '')}")
    print("\n💡 Pro zveřejnění:")
    print("   1. Otevřete stránku v Notion")
    print("   2. Klikněte 'Share' → 'Publish to web'")
    print("   3. Zkopírujte veřejný odkaz")

if __name__ == "__main__":
    main()
