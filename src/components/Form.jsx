import { useState } from 'react'

import { Button } from '@/components/Button'

export default function Form({ setRecipe, setLoading }) {
  const [ingredients, setIngredients] = useState('')
  const [tool, setTool] = useState('')
  const [time, setTime] = useState('')
  const [level, setLevel] = useState('')

  const handleClick = async (e) => {
    try {
      setLoading(true)
      const res = await fetch('/api/cohere', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ingredients, tool, time, level }),
      })

      const data = await res.json()
      setRecipe(data.recipe)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <div className="flex flex-col w-full gap-10 px-4 lg:w-10/12">
        <div>
          <label
            htmlFor="ingredients"
            className="flex gap-2 mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            <span className="inline-flex items-center justify-center font-bold text-white bg-black rounded-full sm:mb-0 aspect-square h-7 dark:bg-white dark:text-black">
              1
            </span>
            Ingredients
          </label>
          <div className="mt-1">
            <textarea
              id="ingredients"
              name="ingredients"
              className="w-full py-2 pl-3 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none"
              placeholder={'eggs, potatoes'}
              onChange={(v) => setIngredients(v.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="">
          <label
            htmlFor="tool"
            className="flex gap-2 mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            <span className="inline-flex items-center justify-center font-bold text-white bg-black rounded-full sm:mb-0 aspect-square h-7 dark:bg-white dark:text-black">
              2
            </span>
            What kitchen tools do you have?
          </label>
          <select
            id="tool"
            name="tool"
            className="block pr-10 mt-1 w-full py-2 pl-3 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none"
            onChange={(v) => setTool(v.target.value)}
          >
            <option value="microwave">Microwave</option>
            <option value="Kiln">Kiln</option>
            <option value="air fryer">Air fryer</option>
          </select>
        </div>
        <div className="">
          <label
            htmlFor="time"
            className="flex gap-2 mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            {' '}
            <span className="inline-flex items-center justify-center font-bold text-white bg-black rounded-full sm:mb-0 aspect-square h-7 dark:bg-white dark:text-black">
              3
            </span>
            Time
          </label>
          <select
            id="time"
            name="time"
            className="block pr-10 mt-1 w-full py-2 pl-3 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none"
            onChange={(v) => setTime(v.target.value)}
          >
            <option value="master chef">30 minutes</option>
            <option value="middle">1 hour</option>
            <option value="noob">2 hour</option>
          </select>
        </div>
        <div className="">
          <label
            htmlFor="level"
            className="flex gap-2 mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            <span className="inline-flex items-center justify-center font-bold text-white bg-black rounded-full sm:mb-0 aspect-square h-7 dark:bg-white dark:text-black">
              4
            </span>
            Level
          </label>
          <select
            id="level"
            name="level"
            className="block pr-10 mt-1 w-full py-2 pl-3 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none"
            onChange={(v) => setLevel(v.target.value)}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <Button onClick={handleClick} type="submit">
          Generate recipe
        </Button>
      </div>
    </>
  )
}
