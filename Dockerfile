
# Use Node.js as the base image
FROM node:24-alpine

# Set the working directory
WORKDIR /app

# Copy application files
COPY package*.json ./
COPY server.js ./

# Expose application port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
