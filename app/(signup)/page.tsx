'use client'

import { Hero } from "@/components/Hero";
import { heroProps } from "@/data/jsonparser";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  const goBack = () => {
    router.push('/')
    console.log('Success')
  }

  return (
    <main>
      <section>
          <Hero {...heroProps} />
          {/* <ThankYou /> */}
      </section>
    </main>
  )
}