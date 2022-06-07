import React, { FC } from "react"

import { Children } from "./types"
import { Header } from "./"

const Layout = ({ children }: Children) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout
