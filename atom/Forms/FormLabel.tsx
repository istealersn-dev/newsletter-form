import { LabelProps } from "@/types";
import { FormLabel } from '@/styles/atom/form-label'

const Label = ({htmlfor, value}: LabelProps) => {
    return (
        <FormLabel htmlFor={htmlfor}>{value}</FormLabel>
    )
}

export default Label;