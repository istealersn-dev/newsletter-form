import { styled } from "styled-components";
import { device } from "../base/breakpoints";

export const Banner = styled.div`
    background-image: url('/assets/images/illustration-sign-up-mobile.svg');
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 17.75rem;

    @media ${device.md} {
        background-image: url('/assets/images/illustration-sign-up-desktop.svg');
        width: 25rem;
        height: 37.0625rem;
    }
`