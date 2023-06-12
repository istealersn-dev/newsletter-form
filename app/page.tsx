"use client"

import { typography } from "./styles/base/typography";

import styled from 'styled-components';

const StyledH1 = styled.h1`
  ${typography.h1}
`;

export default function Home() {
  return (
    <main>
      <section>
        <StyledH1>Stay updated!</StyledH1>
      </section>
    </main>
  )
}
