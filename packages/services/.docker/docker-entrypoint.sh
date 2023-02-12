#!/bin/sh

if [ $# -eq 0 ]; then
  exec node ./dist/main.js
else
  exec "$@"
fi

exit $?