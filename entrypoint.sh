#!/bin/bash

ROOT_DIR=/app/dist

echo "Replacing env constants in JS"
for file in /app/dist/js/*.js; do
  echo "Processing $file ...";

  sed -i 's|process.env.VUE_APP_API_URL|"'${VUE_APP_API_URL}'"|g' $file

done
