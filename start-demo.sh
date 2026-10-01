#!/usr/bin/env bash
set -e

PORT=${PORT:-3000}
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

node server.js
