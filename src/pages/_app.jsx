import { Analytics } from '@vercel/analytics/react'

import { Layout } from '@/components/Layout'
import '@/styles/tailwind.css'
import 'focus-visible'
import { motion } from 'framer-motion'

export default function App({ Component, pageProps }) {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="relative">
          <main>
            <Layout {...pageProps}>
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </main>
        </div>
      </motion.div>
    </>
  )
}
