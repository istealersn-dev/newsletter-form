import { styled } from "styled-components";
import { device } from "../base/breakpoints";
import { typography } from "../base/typography";
import { colors } from "../base/variables";

export const SuccessContent = styled.div`
    margin: 0 1.5rem;
    padding-top: 9.3125rem;
    color: ${colors["dark-navy"]};

    @media ${device.sm} {
        max-width: 31.5rem;
        max-height: 520px;
        background-color: white;
        border-radius: 2.25rem;
        box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.25);
        padding: 3rem 4rem;
    }
`

export const ContentGroup = styled.div`
    margin-bottom: calc((263px - 147px) + 147px);

    @media ${device.sm} {
        margin-bottom: 2.5rem;        
        & > h1 {
            ${typography.h1.lg}
        }
    }
`

export const ImageWrapper = styled.div`
    padding-bottom: 2.5rem;
`