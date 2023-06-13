import { Roboto } from 'next/font/google';
import { font } from './variables';

export const roboto = Roboto({
  weight: [
    "400",
    "700"
  ],
  subsets: ['latin']
});

export const typography = {
    default: {
        fontSize: font.size
    },

    h1: {
        xs: {
            fontSize: '2.5rem',
            lineHeight: '2.5rem',
            fontWeight: "700",
        },
        lg: {
            fontSize: '3.5rem',
            lineHeight: '3.5rem',
            fontWeight: "700"
        }
    },
    desc: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: '400'
    },
    button: {
        fontSize: '1rem',
        lineHeight: '1.5rem',
        fontWeight: '700'
    }
}