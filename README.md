Here's a streamlined `README.md` file for your spinner wheel project without the example code:

```markdown
# Spinner Wheel App

This is a simple Spinner Wheel application built using React, JavaScript, and Tailwind CSS. The app allows users to add names to a wheel, spin it, and randomly select a winner. The selected winner is displayed using a SweetAlert notification. The app also saves the options in local storage to persist data across reloads and includes a reset button to clear the options (excluding the initial four default options).

## Live Demo

You can see the live demo of the app [here](https://spin-wpxpo.netlify.app/).

## Features

- **Add Options**: Users can add new names to the spinner options.
- **Spin the Wheel**: Click the "Spin It" button to randomly select a winner.
- **Display Winner**: The winner is displayed using a SweetAlert notification.
- **Persistent Data**: Options are stored in local storage to persist across page reloads.
- **Reset Options**: Reset the options to the initial default options.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **SweetAlert**: Beautiful, responsive, customizable alert library.
- **LocalStorage**: Web storage to store data locally within the user's browser.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/tazim5032/spinner-wheel-app.git
   cd spinner-wheel-app
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the application:**

   ```sh
   npm start
   ```

4. **Build the application:**

   ```sh
   npm run build
   ```

## Usage

1. **Adding Options**: 
   - Enter a name in the input field and click the "Add" button to add a new option to the spinner.
   
2. **Spinning the Wheel**: 
   - Click the "Spin It" button to spin the wheel and randomly select a winner.
   
3. **Displaying the Winner**: 
   - Once the wheel stops spinning, a SweetAlert notification will display the name of the winner.
   
4. **Resetting Options**: 
   - Click the "Reset" button to reset the options to the initial default options.

## Code Structure

- **`src/App.jsx`**: Main component that contains the spinner wheel logic and UI.
- **`src/App.css`**: Styling for the spinner wheel and other components.
- **`public/index.html`**: HTML template for the app.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the creators of React, Tailwind CSS, and SweetAlert for their awesome tools.
```

This `README.md` file provides an overview of your project, including installation instructions, usage, and a brief description of the code structure. This should help users understand and get started with your Spinner Wheel App.
