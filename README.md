# Test Automation Project with Cypress and Page Object Model - Create Your Monster web game.

👋 Welcome!

This repository houses a test automation project utilizing Cypress and JavaScript to automate end-to-end tests for a demo game webpage.

## The Application 

The game app that had its tests automated is a single page web app build with react. The purpose of this game is to create Monster cards by selecting the Monster, and filling out a form with the fields Name, HP, Attack, Defense and Speed. The app uses data-testids which is a best practice in test automation, and enables the use of selectors without the need of CSS elements being incorporated in the assertions.

##  Framework Architecture

To establish comprehensive end-to-end tests, the framework Cypress.io was incorporated into the project, leveraging the robust architectural approach known as the Page Object Model (POM). The adoption of POM provides a structured and modular framework that encapsulates the UI interactions within dedicated Page Objects. This design not only enhances code readability and maintainability but also promotes reusability, allowing efficient updates and modifications to be applied centrally in the Page Objects, thereby minimizing the impact on the overall test suite. By implementing POM, the automation framework gains scalability, ease of maintenance, and a clear separation of concerns, enabling teams to achieve a more streamlined and efficient test automation process.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I developed this project using Node.js v18.17.0 and npm 9.8.1. I recommend using the same versions or later. Additionally, the project was tested with Git 2.41.0.windows.3, Google Chrome 120.0.6099.130 (x86_64), and Visual Studio Code 1.84.2.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

These are the different ways to run this project. The code can be found in the package.json file:

* `npm run cy:open`: Open Cypress in interactive mode.
* `npm run dev`: Starts the application on devmode on the port:3000.

## Support this project

If you want to support this project, leave a ⭐.

___
