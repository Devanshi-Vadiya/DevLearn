<div align="center">
  <img src="public/favicon.svg" alt="DevLearn Logo" width="120" />
  <h1>🚀 DevLearn</h1>
  <p><strong>A Premium Learning Platform for Developers & Programming Students</strong></p>

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](#)
</div>

<br />

## 📖 About The Project  b

**DevLearn** is a modern, fast, and highly interactive online educational platform built with React and Vite. It serves as a unified hub where developers can find comprehensive courses, insightful articles, and connect with top instructors in fields like Web Development, AI, Data Structures, and more.

## Key Features

- **📚 Expansive Course Catalog:** Explore premium courses ranked by popularity, rating, and student count.
- **✍️ Tech Blog Integration:** Read the latest technical articles, tutorials, and tech news directly on the platform.
- **👨‍🏫 Instructor Profiles:** Dive deep into the portfolios of renowned instructors, their social links, and associated courses.
- **🔐 Secure Dashboard:** (Protected Routes) A personalized learning hub to track your enrolled courses and saved blogs.
- **⚡ Blazing Fast Performance:** Powered by Vite, lazy-loaded routes, and optimized component rendering.
- **📱 Responsive UI:** Fully mobile-responsive implementation leveraging Tailwind CSS.
- **🎨 Smooth Animations:** Fluid page transitions and micro-interactions constructed with Framer Motion.
- **🔍 SEO Optimized:** Fully configured `sitemap.xml` and `robots.txt` out of the box.

## 🛠️ Tech Stack

**Client:**
- ⚛️ [React 18](https://reactjs.org/)
- ⚡ [Vite](https://vitejs.dev/)
- 🛣️ [React Router DOM](https://reactrouter.com/) (v6)
- 💅 [Tailwind CSS](https://tailwindcss.com/)
- 🎬 [Framer Motion](https://www.framer.com/motion/)

**Other Tools:**
- 🛡️ React Helmet Async (for SEO headers)
- 🧊 UI Icons (Lucide React)

## 🚀 Running Locally

Follow these steps to run the project on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Devanshi-Vadiya/DevLearn.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd DevLearn
   ```

3. **Install the dependencies**
   ```bash
   npm install
   ```
   *or if you are using yarn/pnpm:*
   ```bash
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** and navigate to `http://localhost:5173`.

## 📁 Folder Structure

```text
📦 src
 ┣ 📂 assets         # Static assets (images, svg vectors)
 ┣ 📂 components     # Reusable UI components (Navbar, CourseCard, Footer)
 ┣ 📂 data           # Hardcoded dummy JSON data (courses, blogs, instructors)
 ┣ 📂 layouts        # Wrapper generic layouts (MainLayout, DashboardLayout)
 ┣ 📂 pages          # Individual page views (Home, Courses, Blogs, etc.)
 ┃ ┗ 📂 dashboard    # Protected dashboard pages
 ┣ 📂 routes         # Routing configuration mapping (AppRoutes)
 ┣ 📜 App.css        # Root application styles
 ┣ 📜 index.css      # Tailwind configuration & global CSS rules
 ┗ 📜 main.jsx       # React application mounting point
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](#) if you want to contribute.

<br />

<div align="center">
  <sub>Built with ❤️ by Devanshi</sub>
</div>
