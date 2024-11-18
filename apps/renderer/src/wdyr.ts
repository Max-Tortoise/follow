/// <reference types="@welldone-software/why-did-you-render" />
import * as React from "react"

if (import.meta.env.DEV) {
  const whyDidYouRender = await import("@welldone-software/why-did-you-render")
  whyDidYouRender.default(React as any, {
    trackAllPureComponents: true,
  })
}