import Image from 'next/image'
import bgRayDark from '@/images/bg-ray-dark.png'
import bgRayLight from '@/images/bg-ray-light.png'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children = [] }) {
  return (
    <>
      <div className="relative overflow-hidden">
        <Image
          src={bgRayLight}
          alt="Background ray for light mode"
          className="absolute top-0 left-1/2 -ml-[39rem] w-[113.125rem] max-w-none dark:hidden"
          priority
        />
        <Image
          src={bgRayDark}
          alt="Background ray for dark mode"
          className="absolute top-0 left-1/2 -ml-[39rem] hidden w-[113.125rem] max-w-none dark:block"
          priority
        />
        <motion.header layoutScroll>
          <Header />
        </motion.header>
        <div className="relative px-4 pb-16 mx-auto space-y-10 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}
