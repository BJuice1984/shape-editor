module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
        extend: {
            colors: {
                'background-main': '#F8F9FA',
                'background-secondary': '#E0E5EB',
                'text-main': '#1F2939',
                'scrollbar-thumb': '#FFFFFF',
                'scrollbar-track': '#E0E5EB',
            },
            fontFamily: {
                primary: [
                    'Roboto',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    'Segoe UI',
                    'Oxygen',
                    'Ubuntu',
                    'Cantarell',
                    'Fira Sans',
                    'Droid Sans',
                    'Helvetica Neue',
                    'sans-serif',
                ],
                code: [
                    'source-code-pro',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    "'Courier New'",
                    'monospace',
                ],
            },
        },
    },
    plugins: [require('tailwind-scrollbar')],
}
