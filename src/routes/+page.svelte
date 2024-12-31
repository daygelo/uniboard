<script lang='ts'>
  import Fuse from 'fuse.js';
  import { Select } from 'bits-ui';
  import ProgramCard from '$lib/components/ProgramCard.svelte';
  import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
  import CaretDown from 'phosphor-svelte/lib/CaretDown';
  import CheckCircle from 'phosphor-svelte/lib/CheckCircle';
  import programs from '$lib/programs.json';

  const allCategories = [
    'Engineering/Tech',
    'Health/Medicine',
    'Business/Finance',
    'Arts/Humanities',
    'Social Sciences',
    'Natural Sciences',
  ];

  let input = $state('');
  let selectedCategories = $state<string[]>([]);

  const fuse = new Fuse(programs, { keys: ['name', 'school'] });
  let results = $derived(
    (
      input.length > 0 ?
      fuse.search(input).map(x => x.item) :
      programs
    ).filter(x => selectedCategories.length > 0 ? selectedCategories.includes(x.category) : true)
  );
</script>

<main class='w-full min-h-screen bg-[#a86f48] bg-noise'>
  <section class='mx-auto w-full max-w-screen-xl py-16'>
    <div class='flex gap-2 max-w-3xl mx-auto mb-16'>
      <div class='flex items-center gap-2 grow pl-4 bg-white rounded-md shadow-sm shadow-black/10'>
        <MagnifyingGlass class='size-6' weight='bold'/>
        <input
          class='w-full h-12 outline-none lg:text-lg'
          placeholder='Search programs, universities and scholarships...'
          bind:value={input}
        />
      </div>
      <Select.Root bind:value={selectedCategories} multiple>
        <Select.Trigger class='flex items-center w-60 pl-4 pr-3 bg-white rounded-md shadow-sm shadow-black/10'>
          <span class='grow text-left text-ellipsis overflow-hidden whitespace-nowrap'>
            {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'All'}
          </span>
          <CaretDown class='shrink-0 size-4' weight='bold'/>
        </Select.Trigger>
        <Select.Content class='mt-1 bg-white rounded-md divide-y divide-stone-200 shadow-sm shadow-black/10 z-10'>
          {#each allCategories as category}
            <div class='p-1'>
              <Select.Item class='flex items-center gap-2 pl-2 pr-4 py-1 hover:bg-stone-200 rounded-sm text-sm font-bold tracking-wide select-none' value={category}>
                {#if selectedCategories.includes(category)}
                  <CheckCircle class='size-5' weight='fill'/>
                {:else}
                  <CheckCircle class='size-5 text-stone-500'/>
                {/if}
                {category}
              </Select.Item>
            </div>
          {/each}
        </Select.Content>
      </Select.Root>
    </div>
    <section class='flex flex-wrap justify-center gap-8'>
      {#each results as program (`${program.name} ${program.school}`)}
        <ProgramCard {...program}/>
      {/each}
    </section>
  </section>
</main>