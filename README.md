# SkillBridge

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](../../actions)
[![HTML](https://img.shields.io/badge/HTML-%23E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-%231572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## What the Project Does

SkillBridge is a lightweight, frontend-only web application that connects companies and individuals with vetted technical experts and students for short-term technical projects. The landing page showcases the platform's services, how it works, and example projects, providing a modern, responsive, and easy-to-navigate experience with interactive features for user engagement.

## Why the Project Is Useful

- **Showcases project opportunities**: Highlights real-world example projects and the value of short-term technical engagements.
- **Modern, responsive design**: Works seamlessly on desktop and mobile devices with theme customization.
- **No backend required**: Easy to deploy as a static site for demos or informational purposes.
- **Clear user journey**: Explains how SkillBridge matches users with technical talent and allows project submissions.
- **Interactive elements**: Includes theme toggle, smooth navigation, and form handling for enhanced user experience.

## Key Features

- **Hero section** with project mission and call to action
- **Services overview** (Expert Matching, Short-term Projects, Flexible Engagement)
- **Step-by-step "How It Works" guide** with visual indicators
- **Example projects** with tags and status indicators
- **Project submission form** ("Get Started") for users to propose new projects
- **Light/Dark mode toggle** for comfortable viewing in any lighting condition
- **Header anchor navigation** with smooth scrolling and active section highlighting
- **Responsive navigation** with mobile-friendly menu
- **Footer contact section** with direct communication links and repository information
- **Clean, accessible UI** with modern design patterns and smooth interactions

## Features in Detail

### Project Submission Form
Users can submit new project proposals through the "Get Started" form, which captures project details and enables direct engagement with the SkillBridge platform.

### Theme Toggle
The application supports light and dark modes, allowing users to switch between themes via the toggle button in the header. Theme preference is persisted in the browser's local storage.

### Navigation & Smooth Scrolling
The header provides anchor links to all main sections (Services, How It Works, Example Projects, Get Started). Navigation highlights the current section as users scroll, improving user orientation.

### Footer Contact Section
A comprehensive footer includes contact information, quick links to services, and repository details for transparency and user engagement.

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

- **Browse the landing page**: Learn about SkillBridge's services and view example projects with detailed descriptions.
- **Toggle theme**: Use the light/dark mode button in the header to switch between themes based on your preference.
- **Navigate sections**: Click header links or use smooth scrolling to explore different sections of the site.
- **Submit a project**: Fill out the "Get Started" form to propose a new technical project and request expert matching.
- **Contact & connect**: Use footer contact information to reach out with questions or partnership opportunities.
- The site is static and frontend-only; form submissions demonstrate the UI/UX flow without backend integration.

## Where Users Can Get Help

- For questions or support, open an issue in the [GitHub Issues](../../issues) section.
- For documentation or updates, check the repository's [Wiki](../../wiki) or project board.

## Who Maintains and Contributes

- **Maintainer:** [martalacasta](https://github.com/martalacasta)
- Contributions are welcome! Please see the [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for guidelines.

---

> This project is open source and welcomes community contributions. See [LICENSE](LICENSE) for details.
