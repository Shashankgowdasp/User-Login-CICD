# Use an official Nginx image as a parent image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the static files into the Nginx container
COPY . .

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx (default command for Nginx)
CMD ["nginx", "-g", "daemon off;"]
