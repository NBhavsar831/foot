module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e5a5a',     // Dark teal from logo
        secondary: '#2d7a7a',   // Medium teal
        accent: '#4a9999',      // Light teal accent
        light: '#7db8b8',      // Very light teal
        text: '#0f3d3d',       // Dark teal for text
        background: '#f8fffe',  // Clean off-white background
        white: '#ffffff',      // Pure white
      },
      fontFamily: {
        'sans': ['Poppins', 'Lato', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}