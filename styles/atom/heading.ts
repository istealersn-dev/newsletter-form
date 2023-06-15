import { styled } from "styled-components";
import { typography } from "../base/typography";
import { device } from "../base/breakpoints";

export const Heading = styled.h1`
    ${typography.h1.xs}

    @media ${device.lg} {
        ${typography.h1.lg}
    }
`