import { styled } from "styled-components";
import { boxShadow, colors, gradientColors } from "../base/variables";
import { typography } from "../base/typography";
import { device } from "../base/breakpoints";

export const Btnprimary = styled.button `
    background-color: ${colors["dark-navy"]};
    color: ${colors.white};
    padding: 1.125rem 1rem 0.875rem;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: transform 2ms ease-in;
    ${typography.button};
    width: 100%;
    max-width: 23.5rem;

    &:hover {
        background: linear-gradient(204.47deg, ${gradientColors.btnSubmit.top} 0%, ${gradientColors.btnSubmit.bottom} 100%);
        box-shadow: 0rem 1rem 2rem ${boxShadow.button};
        transform: translateY(-2px);
    }

    @media ${device.md} {
        padding: 1.125rem 1rem 0.875rem;
    }
`