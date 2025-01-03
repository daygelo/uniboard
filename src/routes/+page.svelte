<script lang='ts'>
  import * as JsSearch from 'js-search';
  import { Select } from 'bits-ui';
  import ProgramCard from '$lib/components/ProgramCard.svelte';
  import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
  import CaretDown from 'phosphor-svelte/lib/CaretDown';
  import CheckCircle from 'phosphor-svelte/lib/CheckCircle';
  import Circle from 'phosphor-svelte/lib/Circle';
  import * as programsObject from '$lib/programs';
  import categories from '$lib/categories';
  import type { Program } from '$lib/types';

  const programs = (Object.values(programsObject) as Program[][]).reduce((a, x) => [...a, ...x], []);
  const categoryKeys = Object.keys(categories) as (keyof typeof categories)[];

  const jsSearch = new JsSearch.Search('id');
  jsSearch.addIndex('name');
  jsSearch.addIndex('school');
  jsSearch.addDocuments(programs);

  let input = $state('');
  let selectedCategories = $state<string[]>([]);
  let results = $derived(
    (input.length > 0 ? jsSearch.search(input) as Program[] : programs)
      .filter(x => selectedCategories.length > 0 ? selectedCategories.includes(x.category) : true)
  );
</script>

<main class='w-full min-h-screen bg-[#a86f48] bg-noise'>
  <section class='mx-auto w-full max-w-screen-xl px-4 sm:px-8 py-16'>
    <div class='flex max-sm:flex-col gap-2 max-w-3xl mx-auto'>
      <div class='flex items-center gap-2 grow pl-4 bg-white rounded-md shadow-sm'>
        <MagnifyingGlass class='size-6' weight='bold'/>
        <input
          class='w-full h-12 outline-none lg:text-xl'
          placeholder='Search "Software Engineering"...'
          bind:value={input}
        />
      </div>
      <Select.Root bind:value={selectedCategories} multiple>
        <Select.Trigger class='flex items-center sm:w-60 min-h-10 pl-4 pr-3 bg-white rounded-md shadow-sm'>
          <span class='grow text-left lg:text-xl text-ellipsis font-medium overflow-hidden whitespace-nowrap'>
            {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'All'}
          </span>
          <CaretDown class='shrink-0 size-4' weight='bold'/>
        </Select.Trigger>
        <Select.Content class='mt-1 w-[calc(100vw-32px)] sm:w-60 bg-white rounded-md divide-y divide-stone-200 shadow-sm z-10'>
          {#each categoryKeys as category}
            {@const Icon = categories[category].icon}
            <div class='p-1'>
              <Select.Item class='flex items-center gap-2 pl-2 pr-4 py-1 hover:bg-stone-200 rounded-sm text-sm font-bold tracking-wide select-none' value={category}>
                {#if selectedCategories.includes(category)}
                  <CheckCircle class='size-5' weight='fill'/>
                {:else if selectedCategories.length > 0}
                  <Circle class='size-5 text-stone-500'/>
                {:else}
                  <CheckCircle class='size-5 text-stone-500'/>
                {/if}
                <Icon class={`${categories[category].class} size-4 text-primary`} weight='fill'/>
                {category}
              </Select.Item>
            </div>
          {/each}
        </Select.Content>
      </Select.Root>
    </div>
    <p class='w-max mt-3 mx-auto px-4 py-1 bg-white lg:text-xl font-medium rounded-full shadow-sm'>
      {results.length} program{results.length !== 1 ? 's' : ''}
    </p>
    <section class='flex flex-wrap justify-center gap-8 mt-16'>
      {#each results as program (`${program.name} ${program.school}`)}
        <ProgramCard {...program}/>
      {/each}
    </section>
  </section>
</main>