/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        breathdemo: ["Breath_Demo", "sans-serif"], // Custom font utility
        oxygenlight: ["Oxygen_Light", "sans-serif"], // Poppins utility class
      },
      colors: {
        bone: "#ebe3d2",
        dun: "#ccbfa3",
        sage: "#a4ac86",
        roseda: "#737a5d",
        ebony: "#414833",
        bark: "#725C42",
      },
    },
  },
  plugins: [],
};
