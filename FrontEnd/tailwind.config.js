/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                shark: {
                    '50': '#f7f8f8',
                    '100': '#eeeef0',
                    '200': '#d8dadf',
                    '300': '#b6b9c3',
                    '400': '#8f94a1',
                    '500': '#717686',
                    '600': '#5b606e',
                    '700': '#4a4d5a',
                    '800': '#40434c',
                    '900': '#383a42',
                    '950': '#24252a',
                },
            },
        },
    },
    plugins: [],
};
