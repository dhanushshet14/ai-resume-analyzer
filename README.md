# TalentIQ - AI-Powered Resume Analyzer

TalentIQ is an intelligent resume analysis platform that helps job seekers optimize their resumes for specific positions using AI-powered feedback and ATS (Applicant Tracking System) scoring.

## 🚀 Live Demo

**[View Live Application](https://puter.com/app/talentiq)** - Experience TalentIQ in action!

## 📋 About the Project

TalentIQ analyzes resumes against job descriptions and provides comprehensive feedback across multiple dimensions:

- **ATS Compatibility Score** - How well your resume performs with Applicant Tracking Systems
- **Content Analysis** - Quality and relevance of your resume content
- **Structure & Formatting** - Layout and organization assessment  
- **Tone & Style** - Professional writing evaluation
- **Skills Matching** - Alignment with job requirements

The application uses AI to provide detailed, actionable feedback to help users improve their resumes for specific job applications.

## 🛠️ Technologies Used

### Frontend & Framework
- **React 19** - Modern React with latest features
- **React Router 7** - File-based routing and SSR capabilities
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom CSS** - Additional styling and animations
- **Responsive Design** - Mobile-first approach

### Cloud Services & AI
- **Puter.js** - Cloud storage, authentication, and AI services
- **Claude Sonnet 4** - AI model for resume analysis
- **PDF.js** - PDF processing and image conversion

### State Management & Utilities
- **Zustand** - Lightweight state management
- **React Dropzone** - File upload handling
- **clsx & tailwind-merge** - Conditional styling utilities

### Development Tools
- **Docker** - Containerization support
- **ESLint & TypeScript** - Code quality and type checking

## 🏗️ Project Structure

```
├── app/
│   ├── components/          # Reusable UI components
│   ├── lib/                # Utility functions and integrations
│   │   ├── puter.ts        # Puter cloud service integration
│   │   ├── pdf2img.ts      # PDF to image conversion
│   │   └── format.ts       # Formatting utilities
│   ├── routes/             # Application routes
│   │   ├── home.tsx        # Dashboard with resume history
│   │   ├── upload.tsx      # Resume upload and analysis
│   │   ├── resume.tsx      # Detailed feedback view
│   │   ├── auth.tsx        # Authentication
│   │   └── wipe.tsx        # Data management
│   ├── root.tsx           # Root layout component
│   └── routes.ts          # Route configuration
├── constants/             # Application constants and types
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── build/               # Production build output
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd ai-resume-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking

## 🔧 Configuration

The application uses Puter.js for cloud services. Authentication and file storage are handled automatically through the Puter platform.

### Environment Setup

No additional environment variables are required as the app uses Puter's hosted services.

## 📱 Features

### Core Functionality
- **Resume Upload** - Drag & drop PDF resume upload
- **Job Information** - Input company name, job title, and description
- **AI Analysis** - Comprehensive resume evaluation using Claude AI
- **Detailed Feedback** - Scores and improvement suggestions across 5 categories
- **Resume History** - Track all analyzed resumes in your dashboard
- **PDF Viewer** - View original resume alongside feedback

### User Experience
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Real-time Processing** - Live status updates during analysis
- **Secure Authentication** - Puter-based user authentication
- **Cloud Storage** - All data stored securely in the cloud

## 🐳 Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t talentiq .

# Run the container
docker run -p 3000:3000 talentiq
```

### Deployment Platforms

The application can be deployed to any platform supporting Docker:

- **Vercel** - Recommended for React Router apps
- **Netlify** - Static site deployment
- **Railway** - Full-stack deployment
- **Fly.io** - Global deployment
- **AWS ECS** - Enterprise deployment
- **Google Cloud Run** - Serverless containers
- **Azure Container Apps** - Microsoft cloud

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Puter.js** - For providing cloud infrastructure and AI services
- **React Router** - For the excellent full-stack framework
- **Tailwind CSS** - For the utility-first styling approach
- **Claude AI** - For intelligent resume analysis capabilities

---

**Built with ❤️ using React Router, TypeScript, and AI**
