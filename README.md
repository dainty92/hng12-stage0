# HNG12 Stage 0

## Project Description
This is a simple public API developed as part of the HNG12 Internship (Stage 0 Backend Task).  
The API returns a JSON response containing:  
- The registered email address.  
- The current date and time in **ISO 8601** format (UTC).  
- The GitHub URL of the project's codebase.  

##  Live Deployment  
You can access the deployed API here:  
[https://hng12-stage0-xvnk.onrender.com/](https://hng12-stage0-xvnk.onrender.com/)  

---

##  Setup Instructions  
To run this project locally, follow these steps:

### 1️. Clone the Repository  
```sh
git clone https://github.com/dainty92/hng12-stage0.git
cd hng12-stage0

### 2. Install Dependencies
```sh
npm install

### 3. Start the server
```sh
node app.js

##  API Documentation

### Endpoint URL
```sh
GET https://hng12-stage0-xvnk.onrender.com/

### Response Format
```json
{
  "email": "dainty92@example.com",
  "current_datetime": "2025-01-30T15:13:00Z",
  "github_url": "https://github.com/dainty92/hng12-stage0"
}

## Backlinks
https://hng.tech/hire/nodejs-developers