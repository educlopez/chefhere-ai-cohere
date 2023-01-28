import { useState } from 'react'

import { Button } from '@/components/Button'

export default function Form({ setMessage, setLoading }) {
  const [ingredient, setIngredient] = useState('')
  const [tool, setTool] = useState('')
  const [time, setTime] = useState('')
  const [level, setLevel] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setMessage('')
    setLoading(true)
    const res = await fetch(
      `/api/cohere?tool=${tool}&ingredient=${ingredient}&time=${time}&level=${level}`
    )
    const { response } = await res.json()
    setMessage(response)
    setLoading(false)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-10/12 gap-4 px-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-white">
            Ingredients
          </label>
          <div className="mt-1">
            <textarea
              className="w-full py-2 pl-3 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none"
              placeholder={'eggs, potatoes'}
              onChange={(e) => setIngredient(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="">
          <label
            htmlFor="tool"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            What kitchen tools do you have?
          </label>
          <select
            id="tool"
            name="tool"
            className="block pr-10 mt-1 w-full py-2 pl-3 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none"
            onChange={(e) => setTool(e.target.value)}
          >
            <option value="microwave">Microwave</option>
            <option value="Kiln">Kiln</option>
            <option value="air fryer">Air fryer</option>
          </select>
        </div>
        <div className="">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Time
          </label>
          <select
            id="time"
            name="time"
            className="block pr-10 mt-1 w-full py-2 pl-3 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none"
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="master chef">30 minutes</option>
            <option value="middle">1 hour</option>
            <option value="noob">2 hour</option>
          </select>
        </div>
        <div className="">
          <label
            htmlFor="level"
            className="block text-sm font-medium text-gray-700 dark:text-white"
          >
            Level
          </label>
          <select
            id="level"
            name="level"
            className="block pr-10 mt-1 w-full py-2 pl-3 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none"
            onChange={(e) => setLevel(e.target.value)}
          >
            <option value="master chef">Master chef</option>
            <option value="middle">Mid</option>
            <option value="noob">Noob</option>
          </select>
        </div>
        <Button type="submit">Generate recipe</Button>
      </form>
    </>
  )
}
