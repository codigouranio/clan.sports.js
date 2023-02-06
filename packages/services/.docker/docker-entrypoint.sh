#!/bin/sh

if [ $# -eq 0 ]; then
  cd ./packages/services
  exec node ./dist/main.js
else
  exec "$@"
fi

exit $?