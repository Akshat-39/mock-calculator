# Mock Calculator

![Vite + React](https://img.shields.io/badge/vite-^7.2.2-blueviolet?style=flat&logo=vite)
![React](https://img.shields.io/badge/react-^19.2.0-blue?style=flat&logo=react)
![ESLint](https://img.shields.io/badge/eslint-^9.39.1-4B32C3?style=flat&logo=eslint)

A clean and functional web-based calculator application built with React and Vite. This project serves as a practical example of building a responsive user interface with basic arithmetic capabilities.

## Table of Contents

-   [Features](#features)
-   [Tech Stack](#tech-stack)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Development Scripts](#development-scripts)
-   [Project Structure](#project-structure)
-   [Contributing](#contributing)
-   [License](#license)

## Features

*   **Basic Arithmetic Operations**: Perform addition, subtraction, multiplication, and division.
*   **Decimal Support**: Input and calculate with decimal numbers.
*   **Clear Functionality**: `AC` button to clear the current display and reset the calculator state.
*   **Responsive Design**: A user-friendly interface that adapts to different screen sizes.

## Tech Stack

This project is built using the following technologies:

*   **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
*   **[Vite](https://vitejs.dev/)**: A fast build tool that provides a lightning-fast development experience.
*   **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: The core programming language.
*   **[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)**: For structuring the web content.
*   **[CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)**: For styling the calculator interface.
*   **[ESLint](https://eslint.org/)**: For maintaining code quality and consistency.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: [LTS version recommended](https://nodejs.org/en/download/)
*   **npm** (Node Package Manager) or **Yarn**: npm comes bundled with Node.js.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/mock-calculator.git
    cd mock-calculator
    ```
    *(Replace `https://github.com/your-username/mock-calculator.git` with the actual repository URL)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Usage

After installation, you can run the application in development mode or build it for production.

### Running in Development Mode

To start the development server with hot-reloading:

```bash
npm run dev
# or
yarn dev
```

The application will typically be available at `http://localhost:5173/` (or another port if 5173 is in use).

### Building for Production

To create a production-ready build of the application:

```bash
npm run build
# or
yarn build
```

This command will compile the project into the `dist/` directory, ready for deployment.

### Previewing the Production Build

After building the project, you can preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

This will serve the `dist/` directory, allowing you to test the optimized production build.

## Development Scripts

The `package.json` includes several scripts for common development tasks:

*   `dev`: Starts the Vite development server.
*   `build`: Compiles the project for production.
*   `lint`: Runs ESLint to check for code quality issues.
*   `preview`: Serves the production build locally for previewing.

## Project Structure

```
mock-calculator/
├── .github/                 # GitHub Actions workflows
│   └── workflows/
│       └── generate-readme.yml # Automated README generation workflow
├── public/                  # Static assets (e.g., vite.svg)
├── src/                     # Source code
│   ├── assets/              # Static assets (e.g., react.svg)
│   ├── components/          # (No explicit components folder, but `App.jsx` acts as main component)
│   ├── App.css              # Styles for the main App component
│   ├── App.jsx              # Main React application component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point for the React application
├── .gitignore               # Files and directories to ignore in Git
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML file
├── package-lock.json        # Records exact dependency versions
├── package.json               # Project metadata and dependencies
└── vite.config.js           # Vite configuration
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## License

This project is open-source and available under an unspecified license. Please contact the repository owner for licensing information.