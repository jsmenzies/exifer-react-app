module.exports = {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    media: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
