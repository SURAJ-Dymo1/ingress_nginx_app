# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:stable-alpine

# --- THE TRICK ---
# Create a folder named 'apple' inside the html directory
RUN mkdir -p /usr/share/nginx/html/apple

# Copy your build files INTO that 'apple' folder
COPY --from=build /app/dist /usr/share/nginx/html/banana

# We don't even need a custom nginx.conf for this! 
# The default one you showed me will find the 'apple' folder.

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]