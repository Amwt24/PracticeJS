# Project: Web Practice - Rick and Morty App

This project is an interactive web application developed with **Vanilla JavaScript**, HTML5, and CSS3. The application allows users to log in, explore characters from the "Rick and Morty" series through a public API, perform searches, and view specific details for each character in a fully responsive interface.

## Features

- **User Login:** Simple client-side validation.
- **Responsive Dashboard:** 
  - 5 columns on large screens.
  - 3 columns on medium screens.
  - 1 column on mobile devices.
- **API Integration:** Consumes data and images from [The Rick and Morty API](https://rickandmortyapi.com/).
- **Dynamic Search:** Filters characters by name via the search bar.
- **Detail View:** Dedicated page to view extended information for the selected character.
- **Fluid Navigation:** Back buttons and logical redirection.

## Technologies Used

- **HTML5:** Semantic structure.
- **CSS3:** Responsive design with CSS Grid and Flexbox.
- **JavaScript (ES6+):** Business logic, DOM manipulation, and asynchronous requests (`fetch`/`async-await`).
- **Git:** Version control.

## Installation and Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/web-practice-app.git
   ```
2. **Navigate to the directory:**
   ```bash
   cd "web-practice-app"
   ```
3. **Run the application:**
   Simply open the `index.html` file in your preferred browser or use an extension like "Live Server" in VS Code.

## Access Credentials

- **Username:** `admin`
- **Password:** `password`

## Project Structure

```text
├── index.html       # Login Page
├── login.js         # Access validation logic
├── dashboard.html   # Character gallery
├── dashboard.js     # API consumption and card rendering
├── detail.html      # Character detail view
├── detail.js        # Individual detail loading logic
├── style.css        # Global styles and responsiveness
└── README.md        # Project documentation
```
