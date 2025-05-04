import type {Config} from 'tailwindcss';

export default {
	darkMode: ['class'],
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'primary-black': 'hsla(0, 0%, 0%, 1)',
				'primary-white': 'hsla(0, 0%, 100%, 1)',
				'secondary-white': 'hsla(30, 10%, 96%, 1)',
				'grey-medium': 'hsla(0, 0%, 88%, 1)',
				'primary-grey': 'hsla(0, 0%, 46%, 1)',
				'primary-red': 'hsla(0, 93%, 53%, 1)',
				'secondary-red': 'hsla(11, 57%, 53%, 1)',
				'primary-blue': 'hsla(192, 53%, 36%, 1)',
				'secondary-blue': 'hsla(193, 36%, 83%, 1)'
			},
			backgroundColor: {
				'section-grey': 'hsla(30, 9%, 96%, 1)',
				black: 'hsla(0, 0%, 0%, 1)',
				'pink-dark': 'hsla(338, 30%, 45%, 1)',
				'pink-light': 'hsla(344, 54%, 89%, 1)',
				'grey-light': 'hsla(30, 10%, 96%, 1)',
				'grey-medium': 'hsla(0, 0%, 88%, 1)',
				'grey-icon': 'hsla(0, 0%, 73%, 1)',
				'grey-dark': 'hsla(0, 0%, 46%, 1)',
				'cyan-light': 'hsla(193, 36%, 83%, 1)',
				cyan: 'hsla(192, 30%, 50%, 1)',
				green: 'hsla(131, 22%, 50%, 1)',
				pink: 'hsla(312, 29%, 49%, 1)',
				orange: 'hsla(33, 100%, 72%, 1)',
				'red-secondary': 'hsla(0, 35%, 49%, 1)',
				red: 'hsla(0, 93%, 53%, 1)',
				'button-primary': 'hsla(192, 53%, 36%, 1)',
				'button-secondary': 'hsla(10, 58%, 86%, 1)',
				'button-hover': 'hsla(193, 36%, 83%, 1)',
				'button-red': 'hsla(11, 57%, 53%, 1)',
				'button-green': 'hsla(131, 22%, 50%, 1)',
				'switch': 'hsla(0, 0%, 86%, 1)',
			},
			borderRadius: {
				'4': '4px',
				'8': '8px',
				'14': '14px',
				'40': '40px',
				'100': '100px',
				circle: '50%',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			borderColor: {
				'cyan-light': 'hsla(193, 36%, 83%, 1)'
			},
			boxShadow: {
				dark: '-10px 10px 20px hsla(9, 14%, 18%, 0.47)',
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '24px',
				sm: '8px',
				md: '12px',
				lg: '24px',
			},
			screens: {
				sm: '768px',
				md: '992px',
				lg: '1024px',
				xl: '1200px',
				'2xl': '1400px',
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-animate')],
} satisfies Config;
