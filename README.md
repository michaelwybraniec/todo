# Todo Project

![Build](https://img.shields.io/github/actions/workflow/status/michaelwybraniec/todo/ci.yml)
![License](https://img.shields.io/github/license/michaelwybraniec/todo)

## Table of Contents
- [Todo Project](#todo-project)
  - [Table of Contents](#table-of-contents)
  - [Badges](#badges)
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
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)
  - [Demo](#demo)
  - [Contact \& Support](#contact--support)

## Badges
![Build](https://img.shields.io/github/actions/workflow/status/michaelwybraniec/todo/ci.yml)
![License](https://img.shields.io/github/license/michaelwybraniec/todo)

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

## Deployment
You can deploy this app to any static hosting provider (e.g., Vercel, Netlify) by building the project and serving the contents of the `dist/` directory. For example, to deploy to Vercel:

```bash
npm run build
vercel --prod
```

For mobile deployment, use Capacitor to build native apps:
```bash
npx cap add ios
npx cap add android
npx cap open ios # or android
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

## Demo
Below is a screenshot of the Todo app. If you have a live demo, you can also link it here.

![Screenshot](./resources/screenshot.png)

## Contact & Support
For questions, issues, or feature requests, please open an issue on the [GitHub Issues page](https://github.com/yourusername/todo/issues) or contact the maintainer at michaelwybraniec@me.com.