import Wrench from 'phosphor-svelte/lib/Wrench';
import Bank from 'phosphor-svelte/lib/Bank';
import ChartBar from 'phosphor-svelte/lib/ChartBar';
import Heartbeat from 'phosphor-svelte/lib/Heartbeat';
import BookBookmark from 'phosphor-svelte/lib/BookBookmark';
import GlobeHemisphereWest from 'phosphor-svelte/lib/GlobeHemisphereWest';
import Flask from 'phosphor-svelte/lib/Flask';

export default {
  'Engineering/Tech': {
    icon: Wrench,
    class: 'theme-engineering'
  },
  'Business/Finance': {
    icon: Bank,
    class: 'theme-business'
  },
  'Math/Statistics': {
    icon: ChartBar,
    class: 'theme-math'
  },
  'Health/Medicine': {
    icon: Heartbeat,
    class: 'theme-health'
  },
  'Arts/Humanities': {
    icon: BookBookmark,
    class: 'theme-arts'
  },
  'Social Sciences': {
    icon: GlobeHemisphereWest,
    class: 'theme-social'
  },
  'Natural Sciences': {
    icon: Flask,
    class: 'theme-natural'
  },
};