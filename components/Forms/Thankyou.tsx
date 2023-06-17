import Image from "next/image";

import { Heading } from "@/styles/atom/heading";
import { Desc } from "@/styles/atom/paragraph";
import Button from "@/atom/Button";


import Success from '@/public/assets/images/icon-success.svg'
import { SuccessContent, ContentGroup, ImageWrapper } from "@/styles/components/Success";

interface ThankyouProps {
    goBack?: () => void;
}

const Thankyou = ({goBack}: ThankyouProps) => {
    
    return (
        <SuccessContent>
            <ContentGroup>
                <ImageWrapper>
                    <Image 
                    src={Success}
                    alt="Thank you"
                    width={64}
                    height={64}
                    />
                </ImageWrapper>
                <Heading>Thanks for subscribing!</Heading>
                <Desc>A confirmation email has been sent to <a href="mailto:ash@loremcompany.com">ash@loremcompany.com.</a> Please open it and click the button inside to confirm your subscription</Desc>
            </ContentGroup>
            <Button btntype="button" label="Dismiss message" onClick={goBack}/>
        </SuccessContent>
    )
}

export default Thankyou;