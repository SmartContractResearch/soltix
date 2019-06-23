#!/bin/sh

if test "$#" != 3; then
	echo "Usage: build-docker-image.sh [source-repo] [temp-dir] [branch]"
	echo "                      e.g.   .             _TMP        master" 
	exit 1
fi

SOURCE_REPO="$1"
TEMP_DIR="$2"
BRANCH_NAME="$3"


if test -e "$TEMP_DIR"; then
	echo "Error: temp dir "$TEMP_DIR" already exists - please delete it first"
	exit 1
fi

if ! git clone "$SOURCE_REPO" "$TEMP_DIR"; then
	echo Error: Cannot git clone "$SOURCE_REPO" "$TEMP_DIR"
	exit 1
fi
cd "$TEMP_DIR"
if ! git checkout "$BRANCH_NAME"; then
	echo Error: Cannot checkout branch $BRANCH_NAME
	exit 1
fi

docker rmi -f soltix
if test -d ../builddeps; then
	cp -R ../builddeps .
fi

if ! docker build --no-cache . -t soltix; then
#if ! docker build . -t soltix; then
	echo Error: docker build failed
	exit 1
fi


