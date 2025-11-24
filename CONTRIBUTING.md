# 🧑‍💻 Contributing to StaytunedLABS

Welcome! We are excited that you are contributing to our mission to empower educational institutes. This document outlines the guidelines for contributing to this repository. By participating, you help us maintain a collaborative and effective working environment.

## 🤝 Our Code of Conduct

StaytunedLABS is committed to fostering a welcoming and harassment-free community. We treat everyone with respect and encourage constructive feedback. Please review the [Code of Conduct](CODE_OF_CONDUCT.md) for full details.

## 🚀 How to Contribute

We follow a standard Git workflow. Please use clear, descriptive names for all branches and commits.

### 1. Find a Task

Before writing any code, ensure you have a clear task:

- **Assigned Intern Tasks:** Check the Issues board for tickets assigned to you.
- **New Features/Bugs:** If you identify a new bug or have a feature idea, please open a new Issue first to discuss it with your mentor.

### 2. Branching

Always create a new branch for your work. **Never commit directly to `main` or `develop`.**

Use a clear prefix for your branch name:

- **Features:** `feat/descriptive-feature-name` (e.g., `feat/add-user-auth`)
- **Bug Fixes:** `fix/descriptive-issue-name` (e.g., `fix/data-loading-bug`)
- **Documentation:** `docs/documentation-update`

### 3. Commit Messages

We use **Conventional Commits** to keep the history clean and readable. Each commit message should follow this format:

<type>: <short description>

**Common Types:**

| Type       | When to Use                                           | Example                                        |
| :--------- | :---------------------------------------------------- | :--------------------------------------------- |
| `feat`     | A new feature or enhancement.                         | `feat: implement real-time chat functionality` |
| `fix`      | A bug fix.                                            | `fix: correct infinite loop in data fetcher`   |
| `docs`     | Documentation changes (README, comments, etc.).       | `docs: update setup instructions in README`    |
| `style`    | Formatting, missing semicolons, etc.; no code change. | `style: adjust button padding in CSS`          |
| `refactor` | Refactoring code without changing behavior.           | `refactor: simplify database connection logic` |

### 4. Pull Requests (PRs)

When your work is complete and ready for review, submit a Pull Request.

**PR Checklist:**

- **Title:** Use the same Conventional Commit format as your main commit (e.g., `feat: implement real-time chat functionality`).
- **Description:**
  - Explain _what_ the changes are.
  - Explain _why_ they were made (what problem they solve).
  - Reference the related issue number (e.g., `Closes #123`).
- **Testing:** Confirm that your code has been tested locally and passes any existing automated tests.
- **Self-Review:** Before submitting, do a final review of your own code.

## 📏 Coding Standards

To ensure consistency and maintainability:

1.  **Readability:** Use clear variable and function names.
2.  **Comments:** Add detailed comments to explain complex logic, especially for non-obvious algorithms or decisions.
3.  **Formatting:** Adhere to existing project formatting (e.g., indentation, line breaks).
4.  **Error Handling:** Implement proper error handling using `try...catch` blocks where necessary.
5.  **Simplicity:** Write the simplest possible code to achieve the goal.

## ❓ Reporting Issues

If you find a bug or have a suggestion, please open a new issue on the repository's Issues tab.

**When reporting a Bug, please include:**

- A clear and concise title.
- Steps to reproduce the bug.
- The expected behavior vs. the actual behavior.
- Any relevant error messages or console output.

## 📢 Mentorship and Review

Remember, this is a learning environment. Your mentor will provide constructive feedback on your PRs. Be patient, be open to suggestions, and feel free to ask questions if anything is unclear!

Thank you for contributing to StaytunedLABS!

