#!/usr/bin/env python3
"""
Jednoduchý Notion Upload - nahraje markdown jako code bloky
"""

import os
import sys
from pathlib import Path
from notion_client import Client
import time

NOTION_TOKEN = os.getenv("NOTION_TOKEN")
PARENT_PAGE_ID = "292c49dc953281529cc3cac0254b591a"

def create_page_with_markdown(notion, parent_id, title, md_file_path, emoji=None):
    """Vytvoří stránku a přidá markdown jako code blok"""

    # Načti markdown
    with open(md_file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Vytvoř stránku
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
    print(f"✅ {title}")

    # Přidej obsah po částech (max 2000 znaků)
    time.sleep(0.3)
    chunks = [content[i:i+1900] for i in range(0, len(content), 1900)]

    for i, chunk in enumerate(chunks[:10]):  # Max 10 chunks
        try:
            notion.blocks.children.append(
                block_id=page["id"],
                children=[{
                    "object": "block",
                    "type": "code",
                    "code": {
                        "rich_text": [{
                            "type": "text",
                            "text": {"content": chunk}
                        }],
                        "language": "markdown"
                    }
                }]
            )
            time.sleep(0.3)
        except Exception as e:
            print(f"   ⚠️  Chunk {i}: {e}")
            break

    return page

def create_section_page(notion, parent_id, title, emoji):
    """Vytvoří stránku sekce (bez obsahu)"""
    properties = {
        "title": {
            "title": [{
                "text": {"content": title}
            }]
        }
    }

    page_data = {
        "parent": {"page_id": parent_id},
        "properties": properties,
        "icon": {"type": "emoji", "emoji": emoji}
    }

    page = notion.pages.create(**page_data)
    print(f"\n📂 {title}")
    time.sleep(0.3)
    return page

def main():
    if not NOTION_TOKEN:
        print("❌ NOTION_TOKEN není nastaven!")
        sys.exit(1)

    notion = Client(auth=NOTION_TOKEN)
    base_path = Path("/home/user/mobilheim-wiki")

    print("🚀 Začínám upload do Notion...\n")

    # Vytvoř hlavní sekce
    blog_page = create_section_page(notion, PARENT_PAGE_ID, "📝 Blog", "📝")
    wiki_page = create_section_page(notion, PARENT_PAGE_ID, "📚 Wiki", "📚")
    faq_page = create_section_page(notion, PARENT_PAGE_ID, "❓ FAQ", "❓")
    studies_page = create_section_page(notion, PARENT_PAGE_ID, "📊 Případové studie", "📊")

    # Blog články
    print("\n📝 BLOG (24 článků):")
    blog_files = sorted((base_path / "blog").glob("*.md"))
    for md_file in blog_files:
        title = md_file.stem.replace('-', ' ').title()
        create_page_with_markdown(notion, blog_page["id"], title, md_file, "📰")

    # Wiki - Legislativa
    print("\n⚖️ WIKI - Legislativa:")
    leg_page = create_section_page(notion, wiki_page["id"], "⚖️ Legislativa", "⚖️")

    leg_files = [
        ("README", "wiki/legislativa/README.md"),
        ("Starý zákon 183/2006", "wiki/legislativa/stavebni-zakon/stary-zakon-183-2006.md"),
        ("Nový zákon 283/2021", "wiki/legislativa/stavebni-zakon/novy-zakon-283-2021.md"),
        ("Vyhláška 501/2006", "wiki/legislativa/vyhlášky/vyhlaska-501-2006.md"),
        ("Vyhláška 268/2009", "wiki/legislativa/vyhlášky/vyhlaska-268-2009.md"),
        ("Metodika MMR 2022", "wiki/legislativa/metodiky-mmr/metodika-mobilni-domy-2022.md"),
        ("Judikatura", "wiki/legislativa/judikatura/prehled-soudnich-rozhodnuti.md"),
    ]

    for title, path in leg_files:
        full_path = base_path / path
        if full_path.exists():
            create_page_with_markdown(notion, leg_page["id"], title, full_path, "📜")

    # Wiki - Technické specifikace
    print("\n🔧 WIKI - Technické specifikace:")
    tech_page = create_section_page(notion, wiki_page["id"], "🔧 Technické specifikace", "🔧")

    tech_files = list((base_path / "wiki/technicke-specifikace").rglob("*.md"))
    for md_file in sorted(tech_files):
        title = md_file.stem.replace('-', ' ').title()
        create_page_with_markdown(notion, tech_page["id"], title, md_file, "🔩")

    # Wiki - Připojení sítí
    print("\n🔌 WIKI - Připojení k sítím:")
    sit_page = create_section_page(notion, wiki_page["id"], "🔌 Připojení k sítím", "🔌")

    sit_files = sorted((base_path / "wiki/pripojeni-siti").glob("*.md"))
    for md_file in sit_files:
        title = md_file.stem.replace('-', ' ').title()
        create_page_with_markdown(notion, sit_page["id"], title, md_file, "⚡")

    # Wiki - Financování
    print("\n💰 WIKI - Financování:")
    fin_page = create_section_page(notion, wiki_page["id"], "💰 Financování", "💰")

    fin_files = sorted((base_path / "wiki/financovani").glob("*.md"))
    for md_file in fin_files:
        title = md_file.stem.replace('-', ' ').title()
        create_page_with_markdown(notion, fin_page["id"], title, md_file, "💵")

    # Wiki - Údržba
    print("\n🔨 WIKI - Údržba:")
    udr_page = create_section_page(notion, wiki_page["id"], "🔨 Údržba", "🔨")

    udr_files = sorted((base_path / "wiki/udrzba").glob("*.md"))
    for md_file in udr_files:
        title = md_file.stem.replace('-', ' ').title()
        create_page_with_markdown(notion, udr_page["id"], title, md_file, "🛠️")

    # FAQ
    print("\n❓ FAQ:")
    faq_file = base_path / "faq/faq-kompletni.md"
    if faq_file.exists():
        create_page_with_markdown(notion, faq_page["id"], "Kompletní FAQ (112 otázek)", faq_file, "❔")

    # Případové studie
    print("\n📊 PŘÍPADOVÉ STUDIE:")
    study_files = sorted((base_path / "wiki/pripadove-studie").glob("*.md"))
    for md_file in study_files:
        title = md_file.stem.replace('studie-', 'Studie ').replace('-', ' ').title()
        create_page_with_markdown(notion, studies_page["id"], title, md_file, "📈")

    print("\n\n✅ HOTOVO!")
    print(f"\n🔗 Otevřete: https://notion.so/{PARENT_PAGE_ID.replace('-', '')}")
    print("\n💡 Další kroky:")
    print("   1. Otevřete stránku v Notion")
    print("   2. Klikněte 'Share' → 'Publish to web'")
    print("   3. Zkopírujte veřejný odkaz a pošlete ke kontrole")

if __name__ == "__main__":
    main()
