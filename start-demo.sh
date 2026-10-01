#!/usr/bin/env bash
set -e

PORT=${PORT:-3000}
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

python3 -m http.server "$PORT" --directory "$DIR/app/web"
