module.exports = {
    theme: {
        extend: {
            keyframes: {
                timer: {
                    '0%, 100%': {
                        'transform': 'scale(2)',
                        'opacity': '0',
                    },
                },
            },
            animation: {
                'timer': '1s linear all',
                'spin-slow': 'spin 5s linear infinite',

            },
        },
    },
    plugins: [require("daisyui")],

}