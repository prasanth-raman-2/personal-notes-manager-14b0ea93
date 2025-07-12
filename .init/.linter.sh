#!/bin/bash
cd /tmp/kavia/workspace/code-generation/personal-notes-manager-14b0ea93/notes_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

