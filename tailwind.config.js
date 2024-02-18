/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{jsx,tsx,js,ts}', './index.html'],
  theme: {
    extend: {
      boxShadow: {
        mainShadow: '-2px 23px 52px 0px #0000004F, -8px 94px 94px 0px #00000045, -17px 211px 127px 0px #00000029, -31px 375px 150px 0px #0000000D, -48px 586px 165px 0px #00000003',
        clockShadow: '0px 3px 7px 0px #0000003D, 0px 13px 13px 0px #00000036, 0px 28px 17px 0px #0000001F, 0px 51px 20px 0px #0000000A, 0px 79px 22px 0px #00000000'
      },
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


