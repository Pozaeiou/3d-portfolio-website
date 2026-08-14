#!/bin/zsh
# watch-push.sh — Watches src/, public/, index.html for changes.
# On save, waits 3 seconds (debounce), then auto-commits and pushes to GitHub.

PROJECT="/Users/apple/Downloads/3d-portfolio-website-main"
DEBOUNCE=3
TIMER_PID=""

echo "👀 Watching for file changes... (Ctrl+C to stop)"

debounced_push() {
  # Cancel any pending push
  if [[ -n "$TIMER_PID" ]]; then
    kill "$TIMER_PID" 2>/dev/null
  fi

  # Schedule a push after DEBOUNCE seconds
  (
    sleep $DEBOUNCE
    cd "$PROJECT"

    # Only push if there are actual changes
    if [[ -n $(git status --porcelain) ]]; then
      TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")
      git add -A
      git commit -m "Auto-update: $TIMESTAMP"
      git push origin main
      echo "✅ Pushed at $TIMESTAMP"
    fi
  ) &
  TIMER_PID=$!
}

fswatch -o \
  "$PROJECT/src" \
  "$PROJECT/public" \
  "$PROJECT/index.html" \
  | while read; do
      debounced_push
    done
