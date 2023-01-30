import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants'
import Form from '@/components/Form'
import Recipe from '@/components/Recipe'

export default function Home() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Head>
        <title>Chef:here</title>
        <meta
          name="description"
          content="Discover delicious and easy to follow recipes created with the help of AI on our website, using the Co:here platform and built with Next.js and Tailwind CSS."
        />
        <meta
          name="keywords"
          content="AI, Co:here, Next.js, Tailwind CSS, cooking, recipes, food"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative max-w-2xl px-4 pb-16 mx-auto space-y-10 pt-14 sm:px-6 lg:px-8 lg:max-w-5xl">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-6xl font-bold text-center text-zinc-900 dark:text-white"
          >
            Chef:here
          </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-5 mb-10 text-center text-zinc-500 dark:text-white"
          >
            Nextjs, Co:here, TailwindCSS
          </motion.p>
        </div>
        <div className="grid items-start grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-7"
          >
            <Form setMessage={setMessage} setLoading={setLoading} />
          </motion.div>
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="lg:col-span-5"
          >
            <Recipe message={message} loading={loading} />
          </motion.div>
        </div>
      </div>
    </>
  )
}
