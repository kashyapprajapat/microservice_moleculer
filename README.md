# Microservice - Moleculer  

## 🚀 Overview  
This project is a microservices-based system using **Moleculer**, a powerful microservices framework. It consists of:  
- **Meaning Service**: Fetches the meaning of a name using the Gemini AI API.  
- **Email Service**: Sends emails using a messaging broker.  
- **API Gateway**: An Express.js server that interacts with the services.  

---
## 🛠 Setup & Installation  

## 1️⃣ Clone the Repository  
```sh
git clone https://github.com/yourusername/kashyapprajapat-microservice_moleculer.git
cd kashyapprajapat-microservice_moleculer
```

2️⃣ Install Dependencies
```sh
npm install
```

3️⃣ Configure Environment Variables
Rename sample.env to .env and update the required keys:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
GEMINI_API_KEY=your-google-api-key-here
```

🚀 Running the Services
Start Moleculer Services
```sh
node index.js
```
This starts the meaning and email services.

Start Express API Gateway
```sh
node api/server.js
```
The API Gateway runs on http://localhost:7000.

Made with ❤️ by kashyapprajapat 🚀

