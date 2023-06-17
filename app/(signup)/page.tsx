'use client'

import { Hero } from "@/components/Hero";
import { heroProps } from "@/data/jsonparser";
import ThankYou from "./(thankyou)/page";

export default function Home() {

  return (
    <main>
      <section>
          {/* <Hero {...heroProps} /> */}
          <ThankYou />
      </section>
    </main>
  )
}