const theme = require(process.cwd() + '/theme.js')

export interface UseThemeHookInterface {
  theme: Record<string, any>;
}

export const useTheme = (): UseThemeHookInterface => {
  return { theme };
};
