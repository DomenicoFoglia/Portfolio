#!/bin/bash
set -e

# Load environment variables from .env
if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

echo "→ Building..."
npm run build

echo "→ Uploading to VPS..."
scp -r dist/* "$VPS_HOST:$VPS_PATH/"

echo "→ Fixing permissions..."
ssh "$VPS_HOST" "chown -R www-data:www-data $VPS_PATH"

echo "✓ Deploy complete: https://domenicofoglia.dev"