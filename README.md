# Microservice - Moleculer  

## 🚀 Overview  
This project is a microservices-based system using **Moleculer**, a powerful microservices framework. It consists of:  
- **Meaning Service**: Fetches the meaning of a name using the Gemini AI API.  
- **Email Service**: Sends emails using a messaging broker.  
- **API Gateway**: An Express.js server that interacts with the services.  

---

## Understand Project Architecture
![Screenshot 2025-02-09 141331](https://github.com/user-attachments/assets/66c7e98a-5c40-40a7-92bf-d5e2e3a1e16b)



## Live Images
# Laptop 👨🏻‍💻
![Macbook-Air-microservicemoleculer onrender com](https://github.com/user-attachments/assets/3b1c25cd-6897-4874-bbaa-6acd94266afa)

# Tab 
![Galaxy-Tab-S7-microservicemoleculer onrender com](https://github.com/user-attachments/assets/6f7b55df-4e52-4294-b1d5-64ec2a97f55a)

# Mobile

![iPhone-11-PRO-MAX-microservicemoleculer onrender com](https://github.com/user-attachments/assets/311ebf0f-9446-422d-91ec-d9c4f0264882)



----


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

