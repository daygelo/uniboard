<script lang='ts'>
  import type { Program } from '$lib/types';
  import Wrench from 'phosphor-svelte/lib/Wrench';
  import SoftwareEngineerEmoji from '$assets/emojis/Technologist.png';
  import MechanicalEngineerEmoji from '$assets/emojis/Mechanic.png';
  import DoctorEmoji from '$assets/emojis/Doctor.png';
  import TriangularRulerEmoji from '$assets/emojis/Triangular Ruler.png';
  import AppleEmoji from '$assets/emojis/Apple.png';
  import TestTubeEmoji from '$assets/emojis/Test Tube.png';
  import DNAEmoji from '$assets/emojis/DNA.png';

  const {
    name,
    school,
    category,
    type,
    classes,
  }: Program = $props();

  const emojis = {
    'Software Engineering': SoftwareEngineerEmoji,
    'Mechanical Engineering': MechanicalEngineerEmoji,
    'Pharmacy': DoctorEmoji,
    'math': TriangularRulerEmoji,
    'physics': AppleEmoji,
    'chemistry': TestTubeEmoji,
    'biology': DNAEmoji,
  }
</script>

<article class='w-full max-w-sm h-max mt-16 bg-gradient-to-b from-yellow-200 to-yellow-100 rounded-md shadow-sm shadow-yellow-700/25'>
  <p class='relative flex items-center gap-2 px-3 py-1 bg-white border-b border-yellow-300 rounded-md text-sm font-bold tracking-wide text-yellow-700'>
    <Wrench class='size-4 text-yellow-500' weight='fill'/>
    {category}
    {#if emojis[name]}
      <img class='absolute -bottom-2 right-0 size-32' src={emojis[name]} alt={name}/>
    {/if}
  </p>
  <div class='p-6 pb-8'>
    <h2 class='text-3xl text-center font-serif'>{name}</h2>
    <p class='text-lg text-center font-semibold'>{school}</p>
    <div class='flex items-center gap-2 -mx-6 mt-4 mb-2'>
      <div class='grow-1 h-px bg-gradient-to-r from-yellow-500/0 to-yellow-500'></div>
      <h3 class='text-sm text-center'>Classes Required</h3>
      <div class='grow-1 h-px bg-gradient-to-l from-yellow-500/0 to-yellow-500'></div>
    </div>
    <ul class='flex flex-wrap justify-center gap-2'>
      {#each classes as classItem (classItem.label)}
        <li class={`flex items-center gap-1 w-max h-6 ${classItem.type ? 'pr-2' : 'px-2'} bg-yellow-500/50 text-sm font-semibold rounded-full`}>
          {#if classItem.type}
            <img class='size-8 -my-2' src={emojis[classItem.type]} alt={classItem.type}/>
          {/if}
          {classItem.label}
        </li>
      {/each}
    </ul>
  </div>
</article>