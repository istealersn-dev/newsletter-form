import { styled } from "styled-components";
import { device } from "../base/breakpoints";

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media ${device.md} {
        margin-bottom: 2.5rem;
    }
`