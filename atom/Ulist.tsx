import { UList, Li } from "@/styles/atom/list";

interface UlistProps {
    children: React.ReactNode
}

interface LiProps {
    value: string
    children?: React.ReactNode
}

const Ulist = ({children}: UlistProps) => {
    return (
        <UList>
            {children}
        </UList>
    )
}

const LI = ({value, children}: LiProps) => {
    return (
        <Li>
            {value}
            {children}
        </Li>
    )
}

export {Ulist, LI};