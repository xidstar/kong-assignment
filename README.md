
## Description
Based on the pdf/png that is included in the provided project zip file make the following changes:
  - Updated hero section
  - Menu fixed to the top of the page
  - UTM query parameters added to the newsletter menu form
* Must include the use of SCSS and JavaScript
* The end result must be responsive (desktop, tablet, and mobile)

## Features
- Webpack 5 bundling
- Babel ES6 Compiler
- Sass Compiler
- Bootstrap v4
- jQuery 3.5.1
- Popper.js 
- Webpack Dev Server
- Jest


## Getting Started

### Requirements
* Please make sure you have NodeJS installed, as this contains `npm`, which is necessary
for installing dependencies, starting the appropriate scripts, and building your web project.

### Local Setup
Clone the repo:

    git clone https://github.com/xidstar/kong-assignment
    
Navigate to the project folder:

    cd kong-assignment

Install all packages and dependencies required for this project:

    npm install
    
Start the development environment:

    npm start
 
Browser should navigate to: 

    http://localhost:8080/ 
    
Building files can be done as follows:

    npm run build

### Unit Testing
Jest has been implemented as the JavaScript Testing Framework. Test files can be found under the 'src/test' folder.

Running tests can be done as follows:

    npm test

## Design Considerations

* The project uses the Bootstrap v4 library, therefore default bootstrap classes have been used in the implementation.

* Mobile and Tablet design comps not provided.


## Assumptions
* A performance-optimized hosting solution will be used.


## Tradeoffs
* Opted for lossless(without loss of quality) image optimization, compromising on image size since the page is not image heavy.

# Licence
Code released under the [MIT License](LICENSE.md).
