/** @type {import('tailwindcss').Config} */
export default {
content: [
'./index.html',
'./src/**/*.{js,ts,jsx,tsx}',
],
theme: {
extend: {
boxShadow: {
soft: '0 8px 30px rgba(0, 0, 0, 0.08)'
}
},
},
plugins: [],
}