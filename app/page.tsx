'use client'

import { useMediaQuery } from 'react-responsive'

import Image from "next/image";

import data from "@/data/subscribe.json"
import mBanner from '@/public/assets/images/illustration-sign-up-mobile.svg'
import dBanner from '@/public/assets/images/illustration-sign-up-desktop.svg'

import { FormContainer } from "@/styles/components/FormContainer";
import { FrmContainerProps } from "@/types";
import SubscribeForm from "@/components/Forms/Subscribe";
import { device } from "@/styles/base/breakpoints";

export default function Home() {

  const mediaQuery = window.matchMedia(`(min-width: ${device.xs})`).matches;

  console.log(mediaQuery)

  const srcset = mediaQuery ? mBanner : dBanner;
  console.log(srcset)

  const formElements = data.content.form_elements

  const formData: FrmContainerProps = {
    Imgsrc: "",
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
      }
    }
  }

  return (
    <main>
      <section>
        <FormContainer>
          <Image 
          src={srcset} 
          alt={formData.Imgalt} 
          />
          <SubscribeForm {...formData.subscribeform}/>
        </FormContainer>
      </section>
    </main>
  )
}