FROM node:20-bullseye

# Install useful system packages
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    git \
    curl \
    jq \
    ca-certificates \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /workspaces/portfolio
