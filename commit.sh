#!/bin/bash

git add --all
git commit -m $1
git push

# echo "You typed $1"
# ls