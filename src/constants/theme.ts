import { createTheme } from '@shopify/restyle'

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
	white: '#F0F2F3',

	gray: '#ccc',
	
	blueDark:'#453dcb',
	blueLight: '#00d4ff'
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
		gradientStart: palette.blueDark,
		gradientEnd: palette.blueLight,
		mainHeadline: palette.white,
		textBlack: palette.black,
		textWhite: palette.white
  },
  spacing: {
		xs: 4,
		sm: 8,
		base: 12,
    md: 16,
		lg: 20,
		xl: 24,
		xxl: 40,
	},
	textVariants: {
		header: {
			fontSize: 25,
			lineHeight: 30,
			color: 'mainHeadline',
			fontWeight: '700',
		},
		btnText: {
			fontSize: 18,
			color: 'gradientStart',
		}
	},
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export default theme;