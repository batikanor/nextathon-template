# Batikan's Hackathon Project Template

This template provides a quick start for your next hackathon project! It includes:

- A **containerized Next.js frontend**
- A **containerized Flask backend**

Both are pre-configured to communicate, with sample code demonstrating connection. The frontend is designed for easy deployment on **GitHub Pages**, while the backend will need to be hosted separately.

---

## Prerequisites
- Make sure you have Docker installed and running.

## Project Structure

### Backend - Flask
- A simple Flask API that connects with the frontend.
- Dockerized for easy setup and deployment.

### Frontend - Next.js
- Built using `npx create-next-app@latest`.
- Includes sample requests to the Flask backend.

---

## Setup & Installation

1. **Build the containers**:
   ```bash
   docker-compose build
   ```
   
2. **Start the containers**:
   ```bash
   docker-compose up
   ```

3. **Stop the containers**:
   ```bash
   docker-compose down
   ```

4. **Run containers in detached mode** (in the background):
   ```bash
   docker-compose up -d
   ```

---

## Usage

### Common Commands

- **Build and start**: 
  ```bash
  docker-compose up --build
  ```
  
- **Restart the frontend**:
  ```bash
  docker-compose restart frontend
  ```

- **Restart the backend**:
  ```bash
  docker-compose restart backend
  ```

---

## Additional Notes

- **Frontend Deployment**: The Next.js frontend can be hosted on GitHub Pages.
- **Backend Deployment**: Flask backend requires hosting elsewhere (e.g., Heroku, AWS, DigitalOcean).

---
