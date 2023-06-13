import { Btnprimary } from "@/styles/atom/button";

interface SubmitBtnProps {
    onClick: () => void;
    type: "submit" | "reset" | "button";
    label?: string;
}

const Button: React.FC<SubmitBtnProps> = ({ type, onClick, label }) => {
    return (
        <Btnprimary type={type} onClick={onClick}>{label}</Btnprimary>
    )
}

export default Button;