#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_DIR="$ROOT_DIR/dist"

log() {
  printf '\n[%s] %s\n' "$(date '+%H:%M:%S')" "$1"
}

copy_dir_if_exists() {
  local dir="$1"
  if [ -d "$ROOT_DIR/$dir" ]; then
    log "Copying directory: $dir"
    mkdir -p "$OUTPUT_DIR/$dir"
    cp -R "$ROOT_DIR/$dir"/. "$OUTPUT_DIR/$dir"/
  fi
}

log "Creating clean output directory at $OUTPUT_DIR"
rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

log "Copying root-level site assets"
find "$ROOT_DIR" -maxdepth 1 -type f \
  \( -name '*.html' -o -name '*.css' -o -name '*.js' -o -name '*.json' -o -name '*.png' -o -name '*.ico' -o -name '*.svg' -o -name '*.webmanifest' \) \
  ! -name 'netlify.toml' \
  ! -name 'tmp-test.txt' \
  ! -name 'README.md' \
  ! -name 'plan.md' \
  -exec cp {} "$OUTPUT_DIR"/ \;

copy_dir_if_exists "public"
copy_dir_if_exists "data"

log "Static bundle ready in $OUTPUT_DIR"
