## RegioJet - Test

### Git
1. Clone the repository.
2. Check out to a custom/feat branch.
3. After you finish all tasks, commit your changes and create a pull request to the main branch.

### Tasks
1. **Fetch All Pokémon Function**

   Files:
     - `src/lib/fetch-utils.ts`
     - `src/app/page.tsx`

    Subtasks:
      - Step 1.1
        - Finish the `fetchAllPokemon` function.
        - Use the already defined `API_URL`.
        - Add a query parameter limit with value 20.
        - Add error handling.
        - Add a return type to the function (you can find types inside `src/lib/types.ts`).


2. **Map Over Results and Pass Props to PokemonCard Component**

   Files:
     - `src/app/page.tsx`
     - `src/components/pokemon-card.tsx`

   Subtasks:
     - Step 2.1
       - Map over the results and pass props to the `PokemonCard` component.
     - Step 2.2
       - Remove TypeScript @ts-nocheck
       - Create and use an interface for the `PokemonCard` component.
       - Define component props.
     - Step 2.3
       - Add styles for the section component display data in a column with a gap.
     - Step 2.4
         - If `PokemonCard` name starts with "p" or "b", make his font red.


3. **Fetch Single Pokémon Function**

   Files:
     - `src/lib/fetch-utils.ts`
     - `src/app/pokemon/[name]/page.tsx`

   Subtasks:
     - Step 3.1
       - Finish the `fetchSinglePokemon` function.
       - Use the defined URL with the dynamic `name` parameter.
       - Add error handling.
       - Add a return type to the function (you can find types inside `src/lib/types.ts`).
     - Step 3.2
       - Remove @ts-nocheck and biome-ignore
     - Step 3.3
       - Create an interface for `PokemonPage`.
