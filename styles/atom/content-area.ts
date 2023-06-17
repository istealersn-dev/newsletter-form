import { styled } from "styled-components";
import { device } from "../base/breakpoints";

export const Contentarea = styled.div`
    margin: 0 1.5rem;

    @media ${device.md} {
        max-width: 23.5rem;
        margin: 0;
    }
`