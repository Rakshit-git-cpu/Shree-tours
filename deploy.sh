#!/bin/bash

# Install dependencies
npm install

# Build the project
npm run build

# The dist folder will be served by Render
echo "Build completed successfully!" 