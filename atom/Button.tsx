import { SubmitBtnProps } from "@/types";

import { Btnprimary } from "@/styles/atom/button";


const Button = ({ btntype, label, onClick }: SubmitBtnProps) => {
    return (
        <Btnprimary type={btntype} onClick={onClick}>{label}</Btnprimary>
    )
}

export default Button;