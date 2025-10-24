#!/usr/bin/env python3
import os
import json
import requests
from pathlib import Path

# Notion config - REPLACE WITH YOUR VALUES
TOKEN = "YOUR_NOTION_TOKEN_HERE"  # Get from notion.so/my-integrations
PARENT_PAGE_ID = "YOUR_PAGE_ID_HERE"  # Get from Notion page URL

headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28"
}

def markdown_to_blocks(md_content):
    """Convert markdown to Notion blocks (simplified)"""
    blocks = []
    lines = md_content.split('\n')

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Headings
        if line.startswith('# '):
            blocks.append({
                "object": "block",
                "type": "heading_1",
                "heading_1": {
                    "rich_text": [{"type": "text", "text": {"content": line[2:]}}]
                }
            })
        elif line.startswith('## '):
            blocks.append({
                "object": "block",
                "type": "heading_2",
                "heading_2": {
                    "rich_text": [{"type": "text", "text": {"content": line[3:]}}]
                }
            })
        elif line.startswith('### '):
            blocks.append({
                "object": "block",
                "type": "heading_3",
                "heading_3": {
                    "rich_text": [{"type": "text", "text": {"content": line[4:]}}]
                }
            })
        else:
            # Regular paragraph (limit to 2000 chars per block)
            if len(line) > 2000:
                line = line[:1997] + "..."
            blocks.append({
                "object": "block",
                "type": "paragraph",
                "paragraph": {
                    "rich_text": [{"type": "text", "text": {"content": line}}]
                }
            })

        # Notion API limit: max 100 blocks per request
        if len(blocks) >= 90:
            break

    return blocks

def create_page(parent_id, title, blocks):
    """Create a Notion page"""
    url = "https://api.notion.com/v1/pages"

    data = {
        "parent": {"page_id": parent_id},
        "properties": {
            "title": {
                "title": [{"text": {"content": title}}]
            }
        },
        "children": blocks[:100]  # Max 100 blocks
    }

    response = requests.post(url, headers=headers, json=data)
    return response

# Process blog files
blog_dir = Path("blog")
wiki_dir = Path("wiki")
faq_dir = Path("faq")

print("Uploading to Notion...")
count = 0

# Upload blog articles
if blog_dir.exists():
    for md_file in sorted(blog_dir.glob("*.md")):
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()

        title = md_file.stem.replace('-', ' ').title()
        blocks = markdown_to_blocks(content)

        response = create_page(PARENT_PAGE_ID, f"Blog: {title}", blocks)
        if response.status_code == 200:
            count += 1
            print(f"✓ {md_file.name}")
        else:
            print(f"✗ {md_file.name}: {response.status_code}")

print(f"\nUploaded {count} files to Notion!")
print("\n⚠️ DŮLEŽITÉ: SMAŽ TEN TOKEN HNED (notion.so/my-integrations)")
