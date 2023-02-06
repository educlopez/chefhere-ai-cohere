export default function Recipe({ recipe, loading }) {
  const lines = recipe.split('\n')
  return (
    <>
      <div className="block mb-1 text-sm font-medium text-gray-700 dark:text-white">
        Recipe
      </div>
      <div className="p-4 rounded-md bg-white text-base text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 focus:[&:not(:focus-visible)]:outline-none">
        {loading ? (
          <div
            className="flex flex-row items-center"
            dangerouslySetInnerHTML={{
              __html:
                '<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Generating your recipe',
            }}
          />
        ) : recipe ? (
          lines.map((line, index) => <p key={index}>{line}</p>)
        ) : (
          'No recipe has been generated yet.'
        )}
      </div>
    </>
  )
}
