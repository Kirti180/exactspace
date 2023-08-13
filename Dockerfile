# Use the official Node.js 14 Alpine image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the application code
COPY . .

# Expose the port that the app listens on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]