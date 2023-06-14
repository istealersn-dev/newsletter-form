import Image from "next/image"
import { FormContainer } from "@/styles/components/FormContainer"
import { FrmContainerProps } from "@/types"
import SubscribeForm from "./Subscribe"

const FrmContainer = ({Imgsrc, Imgalt, subscribeform}: FrmContainerProps) => {
    return (
        <FormContainer>
            <Image 
                src={Imgsrc} 
                alt={Imgalt} 
                />
            <SubscribeForm {...subscribeform}/>
        </FormContainer>
    )
}