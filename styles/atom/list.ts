import { styled } from "styled-components"
import { typography } from "../base/typography"
import { device } from "../base/breakpoints"

export const UList = styled.ul`
    ${typography.desc};
    display: grid;
    gap: 0.625rem;
`

export const Li = styled.li`
    display: grid;
    grid-template-columns: 0 1fr;
    gap: 2rem;
    align-items: start;

    &:before {
        content: "";
        height: 1.3125rem;
        width: 1.3125rem;
        background-image: url('/assets/images/icon-list.svg');

        @media ${device.xs} {
            margin-right: 1rem;
        }
    }
`

