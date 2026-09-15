#!/bin/sh

if [ $# -eq 0 ]; then
    echo "No arguement supplied"
else

    for arg in "$@"; do
        mkdir "ex$arg"
    done
fi