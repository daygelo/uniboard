<script lang='ts'>
  import type { Program } from '$lib/types';
  import categories from '$lib/categories';
  import * as icons from '$assets/emojis';

  const {
    name,
    school,
    category,
    type,
    icon,
    classes,
    grades,
    other,
    sources,
  }: Program = $props();

  const { class: themeClass, icon: Icon } = categories[category];
</script>

{#snippet subheading(label: string)}
  <div class='flex items-center gap-2 -mx-6 mt-6 mb-2'>
    <div class='grow-1 h-px bg-gradient-to-r from-primary/0 to-primary'></div>
    <h3 class='text-sm text-center'>{label}</h3>
    <div class='grow-1 h-px bg-gradient-to-l from-primary/0 to-primary'></div>
  </div>
{/snippet}

<article class={`${themeClass} w-full max-w-sm h-max mt-16 bg-gradient-primary rounded-md shadow-sm shadow-black/10`}>
  <p class='relative flex items-center gap-2 px-3 py-1 bg-white border-b border-primary/50 rounded-md text-sm font-bold tracking-wide'>
    <Icon class='size-4 text-primary' weight='fill'/>
    {category}
    {#if icon}
      <img class='absolute -bottom-2 right-0 size-32' src={icons[icon]} alt={name}/>
    {/if}
  </p>
  <div class='p-6 pb-8'>
    <h2 class='text-3xl text-center font-serif'>{name}</h2>
    <p class='text-lg text-center font-semibold'>{school}</p>

    {@render subheading('Classes Required')}
    <ul class='flex flex-wrap justify-center gap-2'>
      {#each classes as classItem}
        <li class={`flex items-center gap-1 w-max h-6 ${classItem.type ? 'pr-2' : 'px-2'} bg-primary/25 font-semibold rounded-full`}>
          {#if classItem.type}
            <img class='size-8 -my-2' src={icons[classItem.type]} alt={classItem.type}/>
          {/if}
          {classItem.label}
        </li>
      {/each}
    </ul>

    {#if grades}
      {@render subheading('Grades Required')}
      <ul class='space-y-1'>
        {#each Object.entries(grades) as [label, value]}
          <li class='text-center leading-tight'>{label}: <strong class='text-lg leading-tight'>{typeof value === 'number' ? `${value * 100}%` : value}</strong></li>
        {/each}
      </ul>
    {/if}

    {#if other}
      {@render subheading('Other Requirements')}
      <ul class='pl-4 list-disc marker:text-primary'>
        {#each other as item}
          <li>
            {item}
          </li>
        {/each}
      </ul>
    {/if}

    {#if sources}
      {@render subheading('Sources')}
      <ul class='pl-4 list-disc marker:text-primary underline text-sm'>
        {#each sources as link}
          <li>
            <a href={link} target='_blank'>{link}</a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</article>