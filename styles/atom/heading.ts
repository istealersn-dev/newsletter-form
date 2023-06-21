import { styled } from "styled-components";
import { typography } from "../base/typography";
import { device } from "../base/breakpoints";
import { colors } from "../base/variables";

export const Heading = styled.h1`
    ${typography.h1.xs}
    padding-bottom: 1.5rem;
    color: ${colors["dark-navy"]};

    @media ${device.md} {
        ${typography.h1.lg}
    }
`