import { styled } from "styled-components";
import { boxShadow, colors, gradientColors } from "../base/variables";
import { typography } from "../base/typography";

export const Button = styled.button `
    background-color: ${colors["dark-navy"]};
    color: ${colors.white};
    padding: 1.125rem 6.1875rem 0.875rem 6.3125rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: transform 2ms ease-in;
    ${typography.button};
    max-width: 23.5rem;

    &:hover {
        background: linear-gradient(204.47deg, ${gradientColors.button.top} 0%, ${gradientColors.button.bottom} 100%);
        box-shadow: 0rem 1rem 2rem ${boxShadow.button};
        transform: translateY(-2px);
    }
`