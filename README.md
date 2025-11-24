# Modern Animated Website

A visually appealing, single-page website showcasing modern web technologies and advanced animations. This project features a clean design for a fictional product page (Ray-Ban) with interactive elements and smooth transition effects.

## Features

*   **Interactive Text Animation:** Click anywhere on the page to cycle through the main heading text with a fluid GSAP-powered animation.
*   **Image Transition Effect:** Utilizes Shery.js to create a "gooey" distortion effect on the background images.
*   **Semantic HTML:** Structured with modern HTML5 semantic elements for better accessibility and SEO.
*   **Custom Fonts:** The design is set up to use custom fonts for a unique look.
*   **Responsive Foundation:** Built with a responsive layout that can be adapted for various screen sizes.

## Technologies Used

*   **HTML5:** For the core structure of the website.
*   **CSS3:** For styling, layout, and animations.
*   **JavaScript (ES6+):** For interactivity and DOM manipulation.
*   **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/):** For high-performance text animations.
*   **[Shery.js](https://sheryjs.com/):** For advanced WebGL-powered image effects.
*   **[Three.js](https://threejs.org/):** As a dependency for Shery.js.

## Installation and Setup

This is a static website and does not require a complex build process.

1.  **Clone the repository or download the files:**
    If you have the project files, ensure they are in a single directory. If not, you can use Git to clone a repository.
    ```bash
    # Example of cloning a repository
    # git clone https://your-repository-url.com/
    # cd your-project-directory
    ```

2.  **Add Custom Fonts (Optional but Recommended):**
    The CSS is configured to use the "gilroy" and "kajiro" fonts. If you have these font files (e.g., `.woff2`, `.woff`), create a `fonts` directory in the root of your project and place the files there. The CSS expects them at paths like `fonts/gilroy-regular.woff2` and `fonts/kajiro-bold.woff2`.

3.  **Run a Local Server:**
    For the best experience and to avoid potential issues with browser security policies (CORS), it's recommended to run the project on a local web server.

    *   **Using Python:**
        If you have Python installed, navigate to the project directory in your terminal and run:
        ```bash
        # For Python 3
        python -m http.server
        ```
        Then open your browser and go to `http://localhost:8000`.

    *   **Using Node.js/npm:**
        If you have Node.js, you can use a simple server package like `live-server`:
        ```bash
        npm install -g live-server
        live-server
        ```
        This will automatically open the project in your default browser and reload it on changes.

    *   **Using VS Code:**
        You can use the "Live Server" extension in Visual Studio Code. Right-click on `index.html` and select "Open with Live Server".

4.  **Open in Browser:**
    If you choose not to use a local server, you can directly open the `index.html` file in your web browser. Note that some advanced JavaScript effects might not function correctly due to the `file:///` protocol limitations.

## File Structure

```
.
├── Image/             # Contains all website images
├── fonts/             # (To be created) Place custom font files here
├── index.html         # Main HTML file
├── script.js          # JavaScript for animations and interactivity
└── style.css          # CSS for styling
```
