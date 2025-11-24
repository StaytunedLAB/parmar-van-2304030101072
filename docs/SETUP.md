# 🛠️ Environment Setup Guide

This guide provides the necessary steps to set up your local development environment for the StaytunedLABS project, which is built primarily with **Node.js, TypeScript, and JavaScript**. This ensures everyone is working with the same tools and configurations.

## Prerequisites

Before starting, please ensure you have the following installed:

1. **Git:** For version control.
   - Installation check: `git --version`
2. **Node.js (LTS Version):** Required for running JavaScript/TypeScript code and managing dependencies (NPM/Yarn).
   - We recommend using the latest Long-Term Support (LTS) version.
   - Installation check: `node -v` and `npm -v`
3. **A Code Editor:** VS Code is preferred due to shared settings and extensions.

---

## 🚀 Hello Intern! Your Quick Start Guide

Follow these simple steps to get the application running on your local machine and confirm your environment is ready.

### The Run Commands

1. **Clone the Repository and Navigate:**
   Open your terminal and execute the following:

   ```bash
   git clone [REPO_URL_GOES_HERE]
   ```

2. **Install Dependencies:**
   Open your cloned repository in vscode and then run this command in the terminal. This installs the necessary packages using the `package.json` file:

   ```bash
   npm install
   ```

3. **Create Your First File (`src/hello-intern.js`):**
   Create the `/src` directory and the file inside it. This script will print a welcome message.

   _(Note: This file should already be in the repo, but you can create it manually if necessary. **Ensure you have this file's content** before running the next step.)_

   ```bash
   mkdir -p src
   # The file content is: "console.log('...Welcome to StaytunedLABS!...')"
   ```

4. **Run the Sample Application:**
   The `package.json` includes a script to run this file. Execute it now to confirm everything is working:

   ```bash
   npm start
   ```

   You should see the welcome message printed in your console.

If the message appears, your environment is successfully set up! Now, you can proceed to Step 3 in the main `README.md` to find your first project task.

Happy coding!
