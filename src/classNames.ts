const theme = {
    UNIT: 'unit',
    GROUP: 'group',
    LIGHT_UNIT: 'light-unit',
    DARK_UNIT: 'dark-unit',
    FOCUS_UNIT: 'focus-unit',
    ERROR_UNIT: 'error-unit',
};

const classes = {
    UNIT: 'unit',
    GROUP: 'group',
    LIGHT_UNIT: 'light-unit',
    DARK_UNIT: 'dark-unit',
    FOCUS_UNIT: 'focus-unit',
    ERROR_UNIT: 'error-unit',
} as const;

export type ClassNames = keyof typeof classes;

export type Theme = typeof theme;
export default theme;
