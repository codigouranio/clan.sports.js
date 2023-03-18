#!/bin/sh

if [ $# -eq 0 ]; then
  exec node server.js
else
  exec "$@"
fi

exit $?