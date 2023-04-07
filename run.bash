#!/bin/bash
set -e

rm -f bundle*.js

esbuild --banner:js="module.exports = function() {
    " --footer:js="
    }" \
    --platform=node --target=node10 \
    --outfile=bundle.edge1.js edge1.js

esbuild    --banner:js="module.exports = function() {
   " --footer:js="
   }" \
    --platform=node --target=node10 \
    --outfile=bundle.edge2.js edge2.js

esbuild --bundle --platform=node --target=node10 --outfile=bundle.js parent.js
node bundle.js
