# 🌉 **The Bridge** 

Welcome to **The Bridge**, a dynamic learning platform designed to provide comprehensive courses across a variety of modern technologies. From **Spring Boot** to **Artificial Intelligence**, this project is built to offer an intuitive user interface and an admin panel that makes course management seamless. Whether you're a learner exploring new tech or an admin managing course content, **The Bridge** makes the process as smooth and engaging as possible.

---

## 🚀 **Features**

### **User-Friendly Landing Page**
- **Engaging Design:** The landing page is designed with the latest web design trends in mind. A sleek, modern layout ensures that users can easily navigate through the content.
- **About Us Section:** A brief but captivating introduction to the mission and vision of **The Bridge**, detailing how we aim to connect learners with valuable skills.
- **Courses Section:** A listing of available courses with detailed descriptions, such as:
  - **Spring Boot / Angular**
  - **Node JS / React**
  - **Flutter / Firebase**
  - **Business Intelligence**
  - **Artificial Intelligence**
  - **DevOps** 
  and more
- **Contact Form:** A simple, user-friendly form that allows visitors to easily get in touch with the team for inquiries.

### **Admin Panel**
- **CRUD Operations:** Fully functional admin panel that allows administrators to:
  - **Create** new courses
  - **Read** and view course details
  - **Update** course content (titles, descriptions, prices, duration, status, images)
  - **Delete** outdated or irrelevant courses/contact form submissions
- **Image Uploads:** Administrators can upload images for each course to visually enhance the learning experience.
- **Data Management:** Easily manage course data, including pricing and availability, all from a single intuitive interface.

---

## 🌟 **Technologies Used**

The Bridge is built with cutting-edge technologies to ensure reliability, scalability, and a top-tier user experience:

- **Frontend:** 
  - **Angular** for dynamic, single-page app functionality
  - **Bootstrap/Tailwind** for responsive design

- **Backend:** 
  - **Spring Boot** for robust backend APIs
  - **Node.js** for handling asynchronous operations
  - **JWT Authentication** for secure user login and session management
  
- **Database:** 
  - **MySQL** for fast, relational data storage

---
## **Screenshots**

![Landing Page](https://github.com/CodeWizard-404/The_Bridge/Screenshots/LandingPage.png)
![Admin Panel](https://github.com/CodeWizard-404/The_Bridge/assets/106864034/0942424f-2363-496c-850d-722812d30854)

---

## 🛠️ **Installation Guide**

Follow these steps to get **The Bridge** running locally:

### 1. Clone the Repository
```bash
git clone https://github.com/CodeWizard-404/The_Bridge.git
```

### 2. Install Frontend Dependencies
Navigate to the `frontend` directory and install dependencies:
```bash
cd frontend
npm install
```

### 3. Set Up the Backend
Navigate to the `backend` directory and install the dependencies:
```bash
cd backend
mvn install
```

### 4. Database Setup
Create a MySQL database and import the `the_bridge_db.sql` schema file provided.

### 5. Running the Project
To start the project locally:
- **Start the Backend:** 
  ```bash
  mvn spring-boot:run
  ```
- **Start the Frontend:**
  ```bash
  npm start
  ```

Access the application at [http://localhost:4200](http://localhost:4200) (frontend) and [http://localhost:8080](http://localhost:8080) (backend).

---

## 💻 **How to Contribute**

We value contributions from the community! Whether it's fixing bugs, adding features, or improving documentation, all help is appreciated. Here’s how to contribute:

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Implement your changes.
4. Run tests and ensure everything works smoothly.
5. Submit a pull request with a detailed description of your changes.

---


## ✨ **Vision for the Future**

At **The Bridge**, we’re always evolving. Future updates will include:
- Add User signup and login functionality
- Add a user dashboard for personalized learning experiences
- Add a course rating and review system
- Add a payment gateway for course purchases
- Enhanced user interface with even more interactive elements
- Improved admin functionalities for greater ease of use

Stay tuned for more!

---
