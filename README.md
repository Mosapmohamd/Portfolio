# Mosap Abdel-Ghany | Personal Portfolio

A modern, responsive, and dynamic personal portfolio website built for an **AI Engineer and Data Scientist**. The portfolio beautifully showcases professional experience, education, a wide range of certifications, technical skills, and projects using an elegant dark-mode aesthetic with glassmorphism effects.

## 🚀 Built With

- **[Next.js](https://nextjs.org/)** - React Framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling and layout
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth UI animations and transitions
- **[Lucide React](https://lucide.dev/)** - Beautiful, consistent iconography
- **React Hooks** - State and effect management

## 🌟 Key Features

- **Dynamic Hero Section**: Interactive background and bold typography.
- **Skills Grid**: Interactive cards displaying core competencies (Programming, Machine Learning, Deep Learning, NLP, Data Visualization) complete with animated proficiency bars.
- **Training & Courses**: A unified timeline and showcase grouping university education, intensive AI bootcamps, and a massive list of certifications with a smooth "Show More/Less" toggle.
- **Project Showcase**: Display top AI & Data Science projects with tech stack tags and links.
- **Contact Form**: An integrated contact section offering email, phone, and standard form messaging.
- **Mobile Responsive**: Custom mobile navigation sidebar and graceful grid stacking on smaller screens. 

## 🛠️ Getting Started

First, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
Clone the repository (or extract the project folder), then install the dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running the Development Server
Start the Next.js development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the live result. The page automatically reloads as you edit the source files.

## 📁 Project Structure 

```plaintext
├── public/                 # Static assets (logo, images, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global Tailwind styles
│   │   ├── layout.tsx      # Root application layout
│   │   └── page.tsx        # Main comprehensive single-page portfolio
│   └── components/
│       ├── About.tsx       # Professional summary & B.Sc. card
│       ├── Contact.tsx     # Contact details and email form
│       ├── Experience.tsx  # Work history 
│       ├── Hero.tsx        # Landing/Hero section 
│       ├── Navbar.tsx      # Fixed upper navigation bar
│       ├── Projects.tsx    # Project highlights
│       ├── Skills.tsx      # Skill matrices with progress bars
│       └── TrainingCourses.tsx # Unified education and 365 Data Science certificates
├── tailwind.config.ts      # Tailwind CSS mapping & color palette
└── package.json            # Scripts & project dependencies
```

## 🎨 Customization
- **Colors**: The master colors (like the primary electric blue and secondary violet) are defined in `tailwind.config.ts`. Change them globally there!
- **Data**: Update `skillsData` or `trainingAndCources` arrays directly within the individual components (`Skills.tsx` and `TrainingCourses.tsx`) to rapidly add or remove entries.

## 📄 License
This project is open-source and available for unrestricted use.
