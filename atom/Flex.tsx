import { Container, ContainerProps } from "@/styles/atom/container";
import { Children } from "react";

const Flex = ({children, ...ContainerProps}: ContainerProps) => {
    return (
        <Container {...ContainerProps}>
            {children}
        </Container>
    )
}

export default Flex;