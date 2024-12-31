<script lang='ts'>
  import Fuse from 'fuse.js';
  import { Select } from 'bits-ui';
  import ProgramCard from '$lib/components/ProgramCard.svelte';
  import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
  import CaretDown from 'phosphor-svelte/lib/CaretDown';
  import programs from '$lib/programs.json';

  const categories = [
    'Engineering/Tech',
    'Health/Medicine',
    'Business/Finance',
    'Arts/Humanities',
    'Social Sciences',
    'Natural Sciences',
  ];

  let input = $state('');
  let category = $state<string[]>([]);
  const fuse = new Fuse(programs, { keys: ['name', 'school'] });
</script>

<main class='w-full min-h-screen bg-[#a86f48] bg-noise'>
  <section class='mx-auto w-full max-w-screen-xl py-16'>
    <div class='flex gap-2 max-w-2xl mx-auto mb-16'>
      <div class='flex items-center gap-2 grow pl-4 bg-white rounded-md shadow-sm shadow-black/10'>
        <MagnifyingGlass class='size-6' weight='bold'/>
        <input
          class='w-full h-12 outline-none lg:text-lg'
          placeholder='Search programs, universities and scholarships...'
          bind:value={input}
        />
      </div>
      <Select.Root bind:value={category} multiple>
        <Select.Trigger class='flex items-center w-48 pl-4 pr-3 bg-white rounded-md shadow-sm shadow-black/10'>
          <span class='grow text-left text-ellipsis overflow-hidden whitespace-nowrap'>
            {category.length > 0 ? category.join(', ') : 'All'}
          </span>
          <CaretDown class='shrink-0 size-4' weight='bold'/>
        </Select.Trigger>
        <Select.Content class='mt-1 p-1 bg-white rounded-md shadow-sm shadow-black/10 z-10'>
          {#each categories as category}
            <Select.Item class='px-3 py-1 hover:bg-stone-200 rounded-sm select-none' value={category}>
              {category}
            </Select.Item>
          {/each}
        </Select.Content>
      </Select.Root>
    </div>
    <section class='flex flex-wrap justify-center gap-8'>
      {#each (input.length > 0 ? fuse.search(input).map(x => x.item) : programs) as program (`${program.name} ${program.school}`)}
        <ProgramCard {...program}/>
      {/each}
    </section>
  </section>
</main>