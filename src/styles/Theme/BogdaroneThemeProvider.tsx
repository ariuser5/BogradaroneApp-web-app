import { DARK, LIGHT } from './colors';
import { Theme } from '@mui/material/styles/createTheme';
import { createTheme as createMUITheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		 surface: {
			  priceUp: string;
			  priceDown: string;
			  gray1: string;
			  cyan1: string;
			  deepPurple1: string;
			  purple1: string;
			  yellow1: string;
			  indigo1: string;
		 };
	}
	interface PaletteOptions {
		 surface: {
			  priceUp: string;
			  priceDown: string;
			  gray1: string;
			  cyan1: string;
			  deepPurple1: string;
			  purple1: string;
			  yellow1: string;
			  indigo1: string;
		 };
	}
	interface TypeText {
		 priceUp: string;
		 priceDown: string;
	}
	interface TypographyVariants {
		 captionSemiBold: React.CSSProperties;
	}
	interface TypographyVariantsOptions {
		 captionSemiBold?: React.CSSProperties;
	}
}

function createBogdaroneTheme(isDark?: Boolean): Theme {
	const COLORS = isDark ? DARK : LIGHT;
	return createMUITheme({
		typography: {},
		shape: {
			borderRadius: 4,
		},
		palette: {
			surface: {
				priceUp: COLORS.SURFACE_PRICE_UP,
				priceDown: COLORS.SURFACE_PRICE_DOWN,
				gray1: COLORS.SURFACE_GRAY1,
				cyan1: COLORS.SURFACE_CYAN1,
				deepPurple1: COLORS.SURFACE_DEEP_PURPLE1,
				purple1: COLORS.SURFACE_PURPLE1,
				yellow1: COLORS.SURFACE_YELLOW1,
				indigo1: COLORS.SURFACE_INDIGO1,
			}
		},
		components: {
			MuiAppBar: {
				variants: [
					{
						props: { className: "Nav-Bar" },
						style: {
							backgroundColor: COLORS.PRIMARY,
							boxShadow: 'none',
						}
					},
				],
				styleOverrides: {
					root : {
						backgroundColor: COLORS.PRIMARY,
						// boxShadow: 'none',
					}
				}
			},
			MuiContainer: {
				variants: [
					{
						props: { className: "Menu-Bar" },
						style: {
							backgroundColor: COLORS.PRIMARY,
							'@media (min-width: 1200px)': {
								maxWidth: 'none',
							},
							// borderRadius: "15px",
						}
					}
				],
				styleOverrides: {
					root: {
						backgroundColor: COLORS.PRIMARY,
						// '@media (min-width: 1200px)': {
						// 	maxWidth: 'none',
						// }
					}
				}
			},
			MuiPaginationItem: {
				styleOverrides: {
					root: {
						color: 'white'
					}
				}
			},
			MuiInputBase: {
				styleOverrides: {
					root: {
						borderRadius: "4px",
						'&.Search-Input': {
							// color: COLORS.TEXT_PRIMARY_INVERTED,
							color: 'red',
						}
					},
				},
			},
			MuiTypography: {
				variants: [
					{
						props: { className: "captionSemiBold" },
						style: {
							// fontWeight: 600,
							// fontSize: "0.75rem",
							// lineHeight: "1rem",
						}
					}
				],
				styleOverrides: {
					root: {
						color: COLORS.TEXT_PRIMARY,
					}
				}
			},
			MuiSvgIcon: {
				variants: [
					{
						props: { className: "Search-Icon" },
						style: {
							// color: COLORS.TEXT_PRIMARY_INVERTED,
							color: 'red',
							// fontWeight: 600,
							// fontSize: "0.75rem",
							// lineHeight: "1rem",
						}
					}
				],
			},
		}
	});
}

export { createBogdaroneTheme };
export { StyledEngineProvider, ThemeProvider } from '@mui/material/styles/';
export { useTheme } from '@mui/material/styles';
export { alpha } from './colors';