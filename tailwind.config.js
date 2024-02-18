/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx,js,ts}', './index.html'],
  theme: {
    extend: {
      animation: {
        reveal1: 'reveal 1s ease-in-out infinite',
        reveal2: 'reveal 1s ease-in-out infinite',
        reveal3: 'reveal 1s ease-in-out infinite',
        reveal4: 'reveal 1s ease-in-out infinite',
        bounceModal: 'bounceModal 1s'
      },
      keyframes: {
        reveal: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' }
        },
        bounceModal: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '20%': { transform: 'translateY(-10%)', opacity: '1' },
          '40%': { transform: 'translateY(20%)', opacity: '1' },
          '80%': { transform: 'translateY(-5%)', opacity: '1' },
          '100%': { transform: 'translateY(0%)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}

