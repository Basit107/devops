#!/usr/bin/env bash
set -e

# This script is used to build and run the Docker container for development.
# It mounts the current directory into the container to allow for live code editing.


echo "Starting Docker container..."
docker compose -f docker-compose.dev.yaml up

docker compose -f docker-compose.dev.yaml build --no-cache

echo "Docker container is running. Access the application at http://localhost:8000"
echo "To stop the container, press Ctrl+C in this terminal."

docker compose ps