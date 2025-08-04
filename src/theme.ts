const COR_PRIMARIA = '#8B4A8B';
const COR_SECUNDARIA = '#7A3E7A';

export const theme = {
  colors: {
    primary: COR_PRIMARIA,
    secondary: COR_SECUNDARIA,
    primaryGradient: `linear-gradient(135deg, ${COR_PRIMARIA} 0%, #A855A8 100%)`,
    primaryGradientHover: `linear-gradient(135deg, ${COR_SECUNDARIA} 0%, #9333EA 100%)`,
  }
}

export type Theme = typeof theme;