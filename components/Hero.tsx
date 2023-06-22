import { Flex } from "@/styles/atom/flex";

import { FormContent } from "@/styles/components/FormContent";

import { Heading } from "@/styles/atom/heading";
import { Desc } from "@/styles/atom/paragraph";
import { LI, Ulist } from "@/atom/Ulist";
import { Banner } from "@/styles/atom/image";

import SubscribeForm from "@/components/Forms/Subscribe";
import { Contentarea } from "@/styles/atom/content-area";
import { HeroProps } from "@/types";


export const Hero = ({ 
    heading,
    description,
    livalues,
    formDetails,
    setIsSubmitted
    }: HeroProps) => {
    return (
        <Flex>
            <Banner />
            <Contentarea>
                <FormContent>
                    <Heading>{heading}</Heading>
                    <Desc>{description}</Desc>
                    <Ulist>
                        {livalues.map((value, index) => (
                        <LI key={index} value={value} />
                        ))}
                    </Ulist>
                </FormContent>
                <SubscribeForm {...formDetails} setIsSubmitted={setIsSubmitted}/>
            </Contentarea>
        </Flex>
    )
}