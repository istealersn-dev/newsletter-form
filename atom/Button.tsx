import { SubmitBtnProps } from "@/types";

import { Btnprimary } from "@/styles/atom/button";


const Button = ({ btntype, onClick, label }: SubmitBtnProps) => {
    return (
        <Btnprimary type={btntype} onClick={onClick}>{label}</Btnprimary>
    )
}

export default Button;