'use client'

import Image from "next/image";

import data from "@/data/subscribe.json"
import mBanner from '@/public/assets/images/illustration-sign-up-mobile.svg'
import dBanner from '@/public/assets/images/illustration-sign-up-desktop.svg'

import { FormContainer } from "@/styles/components/FormContainer";
import { FrmContainerProps } from "@/types";
import SubscribeForm from "@/components/Forms/Subscribe";
import { device } from "@/styles/base/breakpoints";
import { Heading } from "@/styles/atom/heading";
import Flex from "@/atom/Flex";
import { Desc } from "@/styles/atom/paragraph";

export default function Home() {

  const formElements = data.content.form_elements;

  const formData: FrmContainerProps = {
    Imgsrc: mBanner,
    Imgalt: data.image.alt,
    subscribeform: {
      labelProps: {
        htmlfor: data.content.form_elements.label.htmlfor,
        value: data.content.form_elements.label.value
      },
      inputProps: {
        inputtype: "email",
        name: formElements.input.name,
        id: formElements.input.id,
        placeholder: formElements.input.placeholder
      },
      buttonProps: {
        onClick: () => {},
        btntype: "submit",
        label: formElements.button.label
      },
    },
    children: ""
  }

  return (
    <main>
      <section>
        <FormContainer>
          <Image 
          src={formData.Imgsrc} 
          alt={formData.Imgalt} 
          />
          <Flex flex="true" flexdirection='column' gap="1.5rem" margin="0 1.5rem 0">
            <Heading>Stay updated!</Heading>
            <Desc>Join 60,000+ product managers receiving monthly updates on:</Desc>
          </Flex>
          <SubscribeForm {...formData.subscribeform}/>
        </FormContainer>
      </section>
    </main>
  )
}