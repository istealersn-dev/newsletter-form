"use client"

import Input from "@/components/FormInput";
import Button from "@/components/Button";

const formSubmit = () => {
  console.log('Hello')
}

export default function Home() {
  return (
    <main>
      <section>
        <Input name='email' id='email' type="email" placeholder="email@company" />
        <Button onClick={formSubmit} type="submit" label="Submit" />
      </section>
    </main>
  )
}