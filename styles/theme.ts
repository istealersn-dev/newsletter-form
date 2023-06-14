import { colors, background } from "./base/variables";
import { Roboto } from 'next/font/google';


// Font family as Roboto
export const roboto = Roboto({
    weight: [
      "400",
      "700"
    ],
    subsets: ['latin']
  });

export const theme = {
    ...colors,
    ...background,
    font: {
        family: roboto.style.fontFamily
    }
}