export default function Recipe({ message, loading }) {
  const lines = message.split('\n')
  return (
    <>
      <div className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
        Recipe
      </div>
      <div className="p-4 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none">
        {loading
          ? 'Generating your recipe...'
          : message
          ? lines.map((line, index) => <p key={index}>{line}</p>)
          : 'No recipe has been generated yet.'}
      </div>
    </>
  )
}
