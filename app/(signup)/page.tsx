'use client'

import Thankyou from "@/components/Forms/Thankyou";
import { Hero } from "@/components/Hero";
import { heroProps } from "@/data/jsonparser";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  

  const router = useRouter()

  const goBack = () => {
    setIsSubmitted(false)
    router.push('/')
  }

  return (
    <main>
      <section>
          {isSubmitted ? <Thankyou goBack={goBack}/> : <Hero {...heroProps} setIsSubmitted={setIsSubmitted} />}
      </section>
    </main>
  )
}