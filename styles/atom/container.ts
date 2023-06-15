import { styled, css } from "styled-components";

export interface ContainerProps {
    flex?: boolean;
    flexdirection?: string;
    justifycontent?: string;
    alignitems?: string;
    gap?: string;
    width?: string;
    margin?: string;
    children: React.ReactNode;
}

export const Container = styled.div<ContainerProps>`
    display: ${props => props.flex ? 'flex' : 'block'};
    ${props => props.flexdirection && `flex-direction: ${props.flexdirection};`};
    ${props => props.justifycontent && `align-items: ${props.justifycontent};`};
    ${props => props.alignitems && `align-items: ${props.alignitems}`};
    ${props => props.gap && `gap: ${props.gap}`};
    ${props => props.width && `width: ${props.width}`};
    ${props => props.margin && `margin: ${props.margin}`};
`;