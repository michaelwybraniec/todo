# Todo Project

## Table of Contents
- [Todo Project](#todo-project)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
    - [Building for Production](#building-for-production)
    - [Preview Production Build](#preview-production-build)
    - [Running Tests](#running-tests)
  - [Project Structure](#project-structure)
  - [Configuration](#configuration)
  - [Contributing](#contributing)
  - [License](#license)
  - [Demo](#demo)

## Overview
This project is a modern Todo application built with a focus on performance, maintainability, and developer experience. It leverages the latest web technologies and best practices, including TypeScript, Vite, and Ionic for a robust and scalable solution.

## Features
- Add, edit, and delete todo items
- Mark tasks as complete or incomplete
- Responsive design for mobile and desktop
- Fast development workflow with Vite
- TypeScript for type safety
- Cypress for end-to-end testing
- Linting and formatting for code quality

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
```bash
npm install
```

### Development
To start the development server:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Running Tests
This project uses Cypress for end-to-end testing. Run `npm run test` to execute all tests. Test results will be displayed in the terminal.

## Project Structure
- `src/` - Main source code for the application
- `public/` - Static assets
- `dist/` - Production build output
- `cypress/` - End-to-end tests
- `resources/` - Additional resources

## Configuration
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - Linting rules
- `capacitor.config.ts` - Capacitor configuration for native builds

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

## Demo
![Screenshot](./resources/screenshot.png)