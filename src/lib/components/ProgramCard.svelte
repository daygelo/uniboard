<script lang='ts'>
  import type { Program } from '$lib/types';
  import categories from '$lib/categories';

  import SoftwareEngineerEmoji from '$assets/emojis/Technologist.png';
  import MechanicalEngineerEmoji from '$assets/emojis/Mechanic.png';
  import DoctorEmoji from '$assets/emojis/Doctor.png';
  import OfficeWorkerEmoji from '$assets/emojis/Office Worker.png';
  import TriangularRulerEmoji from '$assets/emojis/Triangular Ruler.png';
  import AppleEmoji from '$assets/emojis/Apple.png';
  import TestTubeEmoji from '$assets/emojis/Test Tube.png';
  import DNAEmoji from '$assets/emojis/DNA.png';

  const {
    name,
    school,
    category,
    type,
    icon,
    classes,
  }: Program = $props();

  const icons = {
    programmer: SoftwareEngineerEmoji,
    mechanic: MechanicalEngineerEmoji,
    doctor: DoctorEmoji,
    office: OfficeWorkerEmoji,
    math: TriangularRulerEmoji,
    physics: AppleEmoji,
    chemistry: TestTubeEmoji,
    biology: DNAEmoji,
  };

  const { class: themeClass, icon: Icon } = categories[category];
</script>

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
    <div class='flex items-center gap-2 -mx-6 mt-4 mb-2'>
      <div class='grow-1 h-px bg-gradient-to-r from-primary/0 to-primary'></div>
      <h3 class='text-sm text-center'>Classes Required</h3>
      <div class='grow-1 h-px bg-gradient-to-l from-primary/0 to-primary'></div>
    </div>
    <ul class='flex flex-wrap justify-center gap-2'>
      {#each classes as classItem (classItem.label)}
        <li class={`flex items-center gap-1 w-max h-6 ${classItem.type ? 'pr-2' : 'px-2'} bg-primary/50 text-sm font-semibold rounded-full`}>
          {#if classItem.type}
            <img class='size-8 -my-2' src={icons[classItem.type]} alt={classItem.type}/>
          {/if}
          {classItem.label}
        </li>
      {/each}
    </ul>
  </div>
</article>