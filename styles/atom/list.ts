import { styled } from "styled-components"
import { typography } from "../base/typography"
import { device } from "../base/breakpoints"

export const UList = styled.ul`
    ${typography.desc};
    padding-left: 1rem;
    text-indent: -1rem;
`

export const Li = styled.li`
    margin-bottom: 0.625rem;

    &:before {
        content: "";
        display: inline-block;
        height: 1.3125rem;
        width: 1.3125rem;
        background-image: url('/assets/images/icon-list.svg');
        background-size: contain;
        background-repeat: no-repeat;
        vertical-align: middle;

        @media ${device.xs} {
            margin-right: 1rem;
        }
    }
`

