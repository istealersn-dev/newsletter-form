import { styled } from "styled-components";
import { typography } from "../base/typography";
import { colors } from "../base/variables";

export const FormLabel = styled.label`
    display: block;
    color: ${colors["dark-navy"]};
    ${typography.label}
`