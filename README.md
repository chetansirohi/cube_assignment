# Customer Portal

This project is a React-based customer dashboard application that displays customer information and a photo grid for each customer.

Working Demo - https://cube-assignment-fawn.vercel.app/

NOTE- For further steps please communicate strictly via e-mail, Thanks :)

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed Node.js (version 14.0 or later) and npm (which comes with Node.js).
* You have a Windows/Linux/Mac machine.

## Installing Customer Portal

To install the Customer Portal, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/chetansirohi/cube_assignment.git
   ```
2. Navigate to the project directory:
   ```
   cd cube_assignment
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Configuring the Environment

1. Create a `.env` file in the root directory of the project if it doesn't already exist.
2. Add the following environment variables to the `.env` file:
   ```
   REACT_APP_PEXELS_API_KEY=your_pexels_api_key_here
   ```
   Replace `your_pexels_api_key_here` with your actual Pexels API key.

## Running Customer Portal

To run Customer Portal, follow these steps:

1. Start the development server:
   ```
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000`

The application should now be running and accessible in your web browser.

## Project Structure

The main components of the project are organized as follows:

```
customer-portal/
│
├── public/
│   ├── cubeimage.png
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── CustomerCard.tsx
│   │   ├── CustomerDetails.tsx
│   │   ├── CustomerList.tsx
│   │   ├── Layout.tsx
│   │   ├── Photogrid.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── hooks/
│   │   ├── useCustomers.ts
│   │   ├── usePexelsImages.ts
│   │   ├── usePhotos.ts
│   │   └── useRandomUsers.ts
│   │
│   ├── lib/
│   │   └── utils.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── App.tsx
│   └── index.tsx
│
├── .env
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Building for Production

To create a production build, run:

```
npm run build
```

This will create a `build` directory with a production build of your app.

## Additional Information

- This project uses React 18 and TypeScript.
- Styling is done using Tailwind CSS.
- The photo grid uses images from the Pexels API.
- Customer data is fetched using custom hooks (see `src/hooks/`).

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed correctly (`npm install`).
2. Ensure you have set up the `.env` file with the correct Pexels API key.
3. Check the console in your web browser for any error messages.

If problems persist, please open an issue on the GitHub repository.


## License

This project uses the following license: [MIT License](https://opensource.org/licenses/MIT).
