"use client"

import { DefaultPageLayout } from "@/styles/default-page-layout"
import { styled } from "styled-components"

const TagMain = styled.main`
  grid-area: main;
  padding: 20px;
  /* border: solid 2px ${props => props.theme.colors.darkLight}; */
  /* display: flex; */
  width: 100%;
  height: 100%;
  background-color: violet;
`

export default function Home() {
  return (
    // <DefaultPageLayout>
      <TagMain>
        Hello Home!
      </TagMain>

    // </DefaultPageLayout>
  )
}
