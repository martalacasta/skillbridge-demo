# GitHub Copilot Instructions (Generic / Behavior)

These instructions are meant to guide the Copilot coding agent in this repository. They are **not project-specific**, but define how Copilot should behave when generating or editing code.

## General Behavior

- Always **read the entire file** you are editing before making suggestions.
- Prefer **modern, clean, and readable code** with comments where appropriate.
- Use **semantic HTML, modern CSS practices, and vanilla JavaScript**.
- When editing JavaScript:
  - Always check for **existing functions and variables** before creating new ones.
  - Suggest modular, reusable functions when possible.
- When editing HTML/CSS:
  - Keep structure **semantic and responsive**.
  - Maintain consistent styling and class naming.
- For any new feature:
  - **Plan first** if the feature is complex. Provide a step-by-step plan before generating code.
  - Ensure code is **safe, valid, and runs without errors**.
- For documentation (README.md):
  - Always summarize features clearly and professionally.
  - Include code references and usage instructions where appropriate.
- Inline suggestions:
  - Prefer short, precise snippets.
  - Respect existing comments and TODOs, using them as context.
- Avoid overwriting unrelated parts of files