# SkillBridge

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](../../actions)
[![HTML](https://img.shields.io/badge/HTML-%23E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-%231572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## What the Project Does

SkillBridge is a lightweight, frontend-only web application that connects companies and individuals with vetted technical experts and students for short-term technical projects. The landing page showcases the platform's services, how it works, and example projects with modern, interactive features including a light/dark mode toggle, responsive navigation, and a "Get Started" project submission form.

## Why the Project Is Useful

- **Showcases project opportunities**: Highlights real-world example projects and the value of short-term technical engagements.
- **Modern, responsive design**: Works seamlessly on desktop and mobile devices with light/dark mode support.
- **Interactive features**: Includes theme toggle, form submission, and smooth section navigation.
- **No backend required**: Easy to deploy as a static site for demos or informational purposes.
- **Clear user journey**: Explains how SkillBridge matches users with technical talent.

## Key Features

- Hero section with project mission and call to action
- Services overview (Expert Matching, Short-term Projects, Flexible Engagement)
- Step-by-step "How It Works" guide
- Example projects with tags and status
- **Get Started form** for project submission with form validation
- **Light/Dark mode toggle** in the header with persistent theme preference
- **Responsive header navigation** with smooth anchor scrolling to sections
- **Footer contact section** with company information and quick links
- Responsive navigation and mobile menu
- Clean, accessible UI with smooth scrolling and section highlighting

## Features in Detail

### Get Started Form
Submit your project ideas directly through the "Get Started" section. The form includes:
- Project title and description
- Category and timeline selection
- Basic form validation
- Confirmation feedback on submission

### Light/Dark Mode Toggle
Click the theme toggle button in the header to switch between light and dark modes:
- Preference is saved to your browser's local storage
- Automatically applied on subsequent visits
- Smooth transitions between themes

### Header Navigation
The header includes:
- Smooth anchor links to navigate between sections
- Active section highlighting as you scroll
- Responsive mobile menu for smaller screens
- Easy access to the "Get Started" form

### Footer Contact Section
The footer provides:
- Company contact information
- Quick links to main sections
- Social media or additional resources links

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

- Browse the landing page to learn about SkillBridge's services and see example projects.
- Use the **Get Started form** to submit a project idea.
- Toggle between **light and dark modes** using the theme button in the header.
- Navigate between sections using the **responsive header navigation**.
- Check the **footer** for contact information and additional links.
- The site is static and does not require any backend or database setup.

## Where Users Can Get Help

- For questions or support, open an issue in the [GitHub Issues](../../issues) section.
- For documentation or updates, check the repository's [Wiki](../../wiki) or project board.

## Who Maintains and Contributes

- **Maintainer:** [martalacasta](https://github.com/martalacasta)
- Contributions are welcome! Please see the [CONTRIBUTING.md](docs/CONTRIBUTING.md) file for guidelines.

---

> This project is open source and welcomes community contributions. See [LICENSE](LICENSE) for details.
