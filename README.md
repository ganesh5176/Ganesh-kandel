# Ganesh Kandel - Portfolio Website

A modern, responsive portfolio website showcasing my journey as a Computer Science student and aspiring Cybersecurity professional. B
## 🌟 Live Demo

**Frontend:** [https://dev-kandel.preview.emergentagent.com](https://dev-kandel.preview.emergentagent.com)
**Backend API:** [https://dev-kandel.preview.emergentagent.com/api](https://dev-kandel.preview.emergentagent.com/api)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

### Frontend Features
- **Modern Design**: Clean, professional interface with smooth animations and hover effects
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices (tested on 375px-1920px)
- **Interactive Navigation**: Fixed header with smooth scrolling to sections
- **Professional Hero Section**: Friendly greeting with professional background imagery
- **Comprehensive Sections**:
  - Hero with call-to-action buttons
  - About Me with academic achievements
  - Skills showcase with technology badges
  - Project portfolio with detailed descriptions
  - Contact form for direct communication

### Backend Features
- **RESTful API**: FastAPI-powered backend with automatic documentation
- **Database Integration**: MongoDB for data persistence
- **CORS Support**: Configured for cross-origin requests
- **Status Monitoring**: Health check endpoints for monitoring
- **Error Handling**: Proper HTTP status codes and validation

### Project Highlights
- **Library Management System**: Full-stack web application with user authentication
- **Tic-Tac-Toe with AI**: Python game with minimax algorithm implementation
- **Enhanced Project Details**: Each project includes purpose, role, technologies, and key features


### Development Tools
- **Python 3.8+** - Backend development
- **Node.js** - Frontend build tools
- **Git** - Version control
- **Environment Variables** - Configuration management

## 📁 Project Structure

```
portfolio-website/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.jsx   # Navigation header with logo
│   │   │   ├── Hero.jsx     # Hero section with greeting
│   │   │   ├── About.jsx    # About me section
│   │   │   ├── Skills.jsx   # Skills showcase
│   │   │   ├── Projects.jsx # Project portfolio
│   │   │   └── Contact.jsx  # Contact form
│   │   ├── mock.js         # Mock data and configurations
│   │   └── App.js          # Main application component
│   └── public/             # Static assets
├── backend/                # FastAPI backend
│   ├── server.py          # Main FastAPI application
│   └── requirements.txt   # Python dependencies
├── tests/                 # Test files
├── backend_test.py       # Comprehensive backend testing suite
├── test_result.md        # Testing documentation and results
└── README.md            # This file
```


3. **Access the Application**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8000](http://localhost:8000)
   - API Documentation: [http://localhost:8000/docs](http://localhost:8000/docs)

## 📚 API Documentation

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | Health check endpoint |
| GET | `/api/status` | Retrieve all status checks |
| POST | `/api/status` | Create a new status check |

### Example API Usage

```bash
# Health check
curl -X GET "https://dev-kandel.preview.emergentagent.com/api/"

# Get all status checks
curl -X GET "https://dev-kandel.preview.emergentagent.com/api/status"

# Create a status check
curl -X POST "https://dev-kandel.preview.emergentagent.com/api/status" \
  -H "Content-Type: application/json" \
  -d '{"client_name": "test_client"}'
```

## 🧪 Testing

### Backend Testing

A comprehensive testing suite is included (`backend_test.py`) that validates:

- ✅ **Server Health**: FastAPI server connectivity and response
- ✅ **API Endpoints**: All endpoint functionality
- ✅ **Database Connection**: MongoDB operations and persistence
- ✅ **CORS Configuration**: Cross-origin request handling
- ✅ **Response Format**: JSON formatting and headers
- ✅ **Error Handling**: 404 and validation error responses



## 👨‍💻 About the Developer

**Ganesh Kandel**  
Computer Science Student & Aspiring Cybersecurity Professional

- 🎓 **Education**: A*A*A in Cyber Security
- 🔍 **Interests**: IT curiosity, AI passion, cybersecurity
- 💻 **Skills**: Python, JavaScript, React, FastAPI, MongoDB
- 🌱 **Learning**: Advanced cybersecurity concepts and AI applications

## 📞 Contact

- **Portfolio**: [https://dev-kandel.preview.emergentagent.com](https://dev-kandel.preview.emergentagent.com)
- **GitHub**: [https://github.com/ganesh5176](https://github.com/ganesh5176)
- **Email**: Available through the contact form on the website

## 📄 License

This project is open source and available under the [MIT License](LICENSE).



*Built with ❤️ by Ganesh Kandel | Last updated: September 2025*
