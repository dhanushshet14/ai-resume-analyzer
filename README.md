# TalentIQ - AI-Powered Resume Analyzer

An intelligent resume analysis platform that helps job seekers optimize their resumes for specific positions using AI-powered feedback and ATS (Applicant Tracking System) scoring.

## 🚀 Live Demo

**[View Live Application](https://puter.com/app/talentiq)**

## 📋 About

TalentIQ analyzes resumes against job descriptions and provides comprehensive feedback across five key dimensions:

- **ATS Compatibility** - How well your resume performs with Applicant Tracking Systems
- **Content Quality** - Relevance and impact of your resume content
- **Structure & Formatting** - Layout and organization assessment  
- **Tone & Style** - Professional writing evaluation
- **Skills Matching** - Alignment with job requirements

Each category provides a detailed score (0-100) with actionable tips for improvement. The application uses Claude Sonnet 4 AI to deliver personalized, context-aware feedback based on the specific job you're applying for.

## 🛠️ Tech Stack

### Core Framework
- **React 19** - Latest React with concurrent features
- **React Router 7** - Modern full-stack routing with SPA mode
- **TypeScript** - Type-safe development
- **Vite 7** - Lightning-fast build tool and dev server

### Styling
- **Tailwind CSS 4** - Utility-first CSS with Vite plugin
- **tw-animate-css** - Animation utilities
- **clsx & tailwind-merge** - Dynamic class composition

### Cloud & AI
- **Puter.js** - Cloud platform providing:
  - User authentication
  - File storage (KV store)
  - AI integration (Claude Sonnet 4)
- **PDF.js** - Client-side PDF processing and rendering

### State & UI
- **Zustand** - Minimal state management
- **React Dropzone** - Drag-and-drop file uploads

### Development
- **Docker** - Multi-stage containerization
- **TypeScript** - Strict type checking
- **vite-tsconfig-paths** - Path alias resolution

## 🏗️ Project Structure

```
├── app/
│   ├── components/          # UI components
│   │   ├── Accordion.tsx    # Expandable feedback sections
│   │   ├── ATS.tsx          # ATS score display
│   │   ├── Details.tsx      # Detailed feedback view
│   │   ├── FileUploader.tsx # Drag-and-drop upload
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── ResumeCard.tsx   # Resume preview card
│   │   ├── ScoreBadge.tsx   # Score indicator badge
│   │   ├── ScoreCircle.tsx  # Circular score display
│   │   ├── ScoreGauge.tsx   # Score gauge visualization
│   │   └── Summary.tsx      # Feedback summary
│   ├── lib/                 # Core utilities
│   │   ├── puter.ts         # Puter SDK integration (auth, storage, AI)
│   │   ├── pdf2img.ts       # PDF to image conversion
│   │   └── format.ts        # Data formatting helpers
│   ├── routes/              # Route components
│   │   ├── home.tsx         # Dashboard with resume history
│   │   ├── upload.tsx       # Resume upload and analysis
│   │   ├── resume.tsx       # Detailed feedback view
│   │   ├── auth.tsx         # Authentication flow
│   │   └── wipe.tsx         # Data cleanup utility
│   ├── root.tsx             # Root layout with Puter initialization
│   ├── routes.ts            # Route configuration
│   └── app.css              # Global styles
├── constants/
│   └── index.ts             # Mock data and AI prompt templates
├── types/
│   ├── index.d.ts           # Core type definitions (Resume, Feedback)
│   └── puter.d.ts           # Puter SDK type declarations
├── public/                  # Static assets
│   ├── icons/               # App icons
│   ├── images/              # Resume preview images
│   └── pdf.worker.min.mjs   # PDF.js web worker
├── Dockerfile               # Multi-stage Docker build
└── react-router.config.ts   # React Router configuration (SPA mode)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd ai-resume-analyzer
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173

### Available Scripts

- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - Build for production
- `npm run start` - Serve production build
- `npm run typecheck` - Type check with TypeScript

## 🔧 Configuration

### Puter Integration

The app uses Puter.js for cloud services - no environment variables or API keys needed. Puter provides:

- **Authentication** - Automatic user login/signup via Puter SDK
- **Storage** - Key-value store for resume data and feedback
- **AI** - Claude Sonnet 4 integration for resume analysis

The Puter SDK is initialized in `app/root.tsx` and loaded via CDN (`https://js.puter.com/v2/`).

### React Router Configuration

The app runs in SPA mode (`ssr: false` in `react-router.config.ts`) for optimal client-side performance with Puter's cloud services.

## ✨ Features

### Core Functionality
- **PDF Upload** - Drag-and-drop resume upload with React Dropzone
- **Job Context** - Input company name, job title, and job description
- **AI Analysis** - Claude Sonnet 4 evaluates resume against job requirements
- **5-Category Scoring** - ATS, Content, Structure, Tone & Style, Skills
- **Actionable Feedback** - Detailed tips marked as "good" or "improve"
- **Resume History** - Dashboard showing all analyzed resumes with scores
- **PDF Preview** - Client-side PDF rendering with PDF.js

### User Experience
- **Responsive Design** - Mobile-first UI with Tailwind CSS
- **Real-time Updates** - Processing status during AI analysis
- **Secure Auth** - Puter-based authentication (no passwords to manage)
- **Cloud Storage** - All data persisted in Puter's KV store
- **Data Management** - Wipe route for clearing user data

## 🐳 Docker Deployment

The project includes a multi-stage Dockerfile optimized for production:

```bash
# Build image
docker build -t talentiq .

# Run container
docker run -p 3000:3000 talentiq
```

### Dockerfile Stages
1. **development-dependencies-env** - Install all dependencies
2. **production-dependencies-env** - Install production dependencies only
3. **build-env** - Build the application
4. **Final image** - Minimal Node.js Alpine image with built app

### Deployment Options

- **Vercel** - Recommended for React Router apps
- **Netlify** - Static hosting with SPA support
- **Railway** - Container deployment
- **Fly.io** - Edge deployment
- **Docker Hub** - Any container platform

## 🔍 How It Works

1. **Upload** - User uploads PDF resume and provides job details
2. **Convert** - PDF is converted to image for preview using PDF.js
3. **Store** - Resume and metadata saved to Puter KV store
4. **Analyze** - AI prompt sent to Claude Sonnet 4 via Puter AI API
5. **Parse** - JSON response parsed into structured feedback
6. **Display** - Scores and tips shown with interactive UI components
7. **History** - All analyses saved and accessible from dashboard

### AI Prompt Structure

The app uses a detailed prompt template (see `constants/index.ts`) that instructs Claude to:
- Analyze resume against job description
- Score 5 categories (0-100)
- Provide 3-4 tips per category
- Mark tips as "good" or "improve"
- Return structured JSON response

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Puter.js** - Cloud platform with auth, storage, and AI
- **React Router** - Modern full-stack React framework
- **Tailwind CSS** - Utility-first styling
- **Claude AI** - Intelligent resume analysis
- **PDF.js** - Client-side PDF processing

---

Built with React Router 7, TypeScript, and AI
