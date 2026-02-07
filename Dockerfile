# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Install all dependencies
RUN npm install --prefix backend
RUN npm install --prefix frontend

# Copy source code
COPY backend ./backend
COPY frontend ./frontend

# Build frontend
RUN npm run build --prefix frontend

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy backend and built frontend from build stage
COPY --from=build /app/backend ./backend
COPY --from=build /app/frontend/dist ./frontend/dist

# Set working directory to backend
WORKDIR /app/backend

# Expose port 5001
EXPOSE 5001

# Start the backend server
CMD ["npm", "start"]
```

## Step 2: Update Azure Application Settings

## Step 3: Optional - Add .dockerignore