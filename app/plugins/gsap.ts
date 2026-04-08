import { gsap } from "gsap"
import { ScrollTrigger, ScrollToPlugin, CustomEase } from "gsap/all"

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CustomEase)

  CustomEase.create("ease", "0.25,0.1,0.25,1")
  gsap.defaults({ ease: "ease", duration: 0.4 })
})
