# SkillBridge

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](../../actions)
[![HTML](https://img.shields.io/badge/HTML-%23E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-%231572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## What the Project Does

SkillBridge is a lightweight, frontend-only web application that connects companies and individuals with vetted technical experts and students for short-term technical projects. The landing page showcases the platform's services, how it works, and example projects, providing a modern, responsive, and easy-to-navigate experience with interactive features like project submission and theme customization.

## Why the Project Is Useful

- **Showcases project opportunities**: Highlights real-world example projects and the value of short-term technical engagements.
- **Modern, responsive design**: Works seamlessly on desktop and mobile devices.
- **No backend required**: Easy to deploy as a static site for demos or informational purposes.
- **Clear user journey**: Explains how SkillBridge matches users with technical talent.
- **Interactive features**: Allows users to submit projects, customize their viewing experience, and navigate seamlessly.

## Key Features

- Hero section with project mission and call to action
- Services overview (Expert Matching, Short-term Projects, Flexible Engagement)
- Step-by-step "How It Works" guide
- Example projects with tags and status
- **Get Started project submission form** - Users can submit new project opportunities with details
- **Light/Dark mode toggle** - Theme switcher for comfortable viewing in any lighting
- **Header anchor navigation** - Smooth scrolling navigation to all major sections
- **Footer contact section** - Quick access to contact information and additional resources
- Responsive navigation and mobile menu
- Clean, accessible UI with smooth scrolling and section highlighting

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

- **Browse the landing page** - Learn about SkillBridge's services and view example projects.
- **Navigate sections** - Use the header navigation links to smoothly scroll to Services, How It Works, Example Projects, and Contact sections.
- **Submit a project** - Fill out the "Get Started" project submission form to list new opportunities (note: this is a frontend demo; submissions are not persisted).
- **Toggle theme** - Click the light/dark mode toggle in the header to switch between themes based on your preference.
- **Contact us** - Visit the footer section for contact information and additional resources.
- **Responsive experience** - The site adapts automatically to mobile, tablet, and desktop screens.

## Features Breakdown

### Get Started Project Submission Form
- Users can input project details including title, description, required skills, and timeline
- Form includes validation to ensure data quality
- Responsive design works on all device sizes

### Light/Dark Mode Toggle
- Located in the header for easy access
- Preference is applied across the entire application
- Uses semantic color schemes for accessibility and user comfort

### Header Anchor Navigation
- Smooth scrolling links to major page sections
- Highlights the active section as you scroll
- Mobile-friendly navigation menu included

### Footer Contact Section
- Displays contact information and links
- Provides additional resources and social media connections
- Maintains consistent branding with the rest of the site

## Where Users Can Get Help

- For questions or support, open an issue in the [GitHub Issues](../../issues) section.
- For documentation or updates, check the repository's [Wiki](../../wiki) or project board.

## Who Maintains and Contributes

- **Maintainer:** [martalacasta](https://github.com/martalacasta)
- Contributions are welcome! Please see the [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for guidelines.

---

> This project is open source and welcomes community contributions. See [LICENSE](LICENSE) for details.
