import { styled } from "styled-components";
import { device } from "../base/breakpoints";

export const Container = styled.div`
    background-color: white;
    max-width: 58rem;
    border-radius: 2.25rem;

    @media ${device.md} {
        padding: 1.5rem 1.5rem 1.5rem 4rem;
    }
`