import { styled } from "styled-components";
import { device } from "../base/breakpoints";

export const Flex = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    background-color: white;
    max-width: 58rem;
    border-radius: 2.25rem;


    @media ${device.md} {
        flex-direction: row-reverse;
        gap: 4rem;
        padding: 1.5rem 1.5rem 1.5rem 4rem;
    }
`