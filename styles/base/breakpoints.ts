// breakpoints.ts

// Define the pixel values for different breakpoints
export const breakpoints = {
    xs: '23.4375rem',
    sm: '47.625rem',
    md: '62rem',
    lg: '80rem',
    xl: '90rem'
} as const

// Create an object that defines media query breakpoints using the defined sizes

export const device = {
    /* Styles applied to screens with a width of 375px and above */
    xs: `(min-width: ${breakpoints.xs})`,

    /* Styles applied to screens with a width of 768px and above */
    sm: `(min-width: ${breakpoints.sm})`,

    /* Styles applied to screens with a width of 992px and above */
    md: `(min-width: ${breakpoints.md})`,

    /* Styles applied to screens with a width of 1280x and above */
    lg: `(min-width: ${breakpoints.lg})`,

    /* Styles applied to screens with a width of 1440px and above */
    xl: `(min-width: ${breakpoints.xl})`
} as const