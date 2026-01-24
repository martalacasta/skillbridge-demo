# SkillBridge

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](../../actions)
[![HTML](https://img.shields.io/badge/HTML-%23E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-%231572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## What the Project Does

SkillBridge is a lightweight, frontend-only web application that connects companies and individuals with vetted technical experts and students for short-term technical projects. The landing page showcases the platform's services, how it works, and example projects, providing a modern, responsive, and easy-to-navigate experience with interactive features for project submission and theme customization.

## Why the Project Is Useful

- **Showcases project opportunities**: Highlights real-world example projects and the value of short-term technical engagements.
- **Modern, responsive design**: Works seamlessly on desktop and mobile devices with accessibility in mind.
- **Interactive features**: Includes a project submission form and light/dark mode toggle for enhanced user experience.
- **No backend required**: Easy to deploy as a static site for demos or informational purposes.
- **Clear user journey**: Explains how SkillBridge matches users with technical talent with intuitive navigation.

## Key Features

- **Hero section** with project mission and call-to-action button
- **Services overview** (Expert Matching, Short-term Projects, Flexible Engagement)
- **Step-by-step "How It Works" guide** with visual progression
- **Example projects** with tags, status badges, and detailed descriptions
- **Project Submission Form** ("Get Started" section) - Users can submit new project ideas with title, description, and category selection
- **Light/Dark Mode Toggle** - Theme switcher in the header for personalized viewing experience
- **Header Anchor Navigation** - Smooth scrolling navigation linking to all major sections
- **Footer Contact Section** - Links to social media and contact information
- **Responsive navigation** with mobile menu support
- **Clean, accessible UI** with semantic HTML and smooth interactions

## Features in Detail

### Project Submission Form
The "Get Started" section allows users to submit project ideas directly from the landing page. The form includes:
- Project title and description fields
- Category selection dropdown
- Form validation and user feedback
- Responsive design for mobile and desktop

### Light/Dark Mode Toggle
Users can switch between light and dark themes using the toggle button in the header:
- Preference is stored locally for persistent experience
- Smooth transitions between themes
- Optimized color schemes for readability in both modes

### Header Navigation
The header includes:
- Smooth scrolling anchor links to all major sections (Services, How It Works, Projects, Get Started)
- Active section highlighting as users scroll
- Mobile-responsive hamburger menu
- Theme toggle button

### Footer Contact Section
The footer provides:
- Social media links and contact information
- Quick access to company details
- Professional presentation of organizational information

## How Users Can Get Started

### Prerequisites
- [Node.js](https://nodejs.org/) (optional, only if you want to use a static server)
- Or any static file server (e.g., Python's `http.server`)

### Installation & Local Development

1. **Clone the repository:**
	```sh
	git clone https://github.com/martalacasta/skillbridge-demo.git
	cd skillbridge-demo
	```
2. **Start a local server:**
	- With Python 3:
	  ```sh
	  python -m http.server 8000
	  ```
	- Or with Node.js (if installed):
	  ```sh
	  npx serve .
	  ```
3. **Open your browser:**
	Visit [http://localhost:8000](http://localhost:8000) to view the landing page.

### Usage Example

- **Browse the landing page** to learn about SkillBridge's services and see example projects
- **Use the header navigation** to jump to specific sections and explore the content
- **Toggle light/dark mode** using the button in the header for your preferred viewing experience
- **Submit a project** using the "Get Started" form to see how users can contribute project ideas
- **Contact us** using the links in the footer section
- The site is static and does not require any backend or database setup

## Where Users Can Get Help

- For questions or support, open an issue in the [GitHub Issues](../../issues) section.
- For documentation or updates, check the repository's [Wiki](../../wiki) or project board.

## Who Maintains and Contributes

- **Maintainer:** [martalacasta](https://github.com/martalacasta)
- Contributions are welcome! Please see the [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for guidelines.

---

> This project is open source and welcomes community contributions. See [LICENSE](LICENSE) for details.
