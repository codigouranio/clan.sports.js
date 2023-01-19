#!/bin/sh

if [ $# -eq 0 ]; then
  exec node build/main.js
else
  exec "$@"
fi

exit $?