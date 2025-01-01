import Wrench from 'phosphor-svelte/lib/Wrench';
import Heartbeat from 'phosphor-svelte/lib/Heartbeat';
import Bank from 'phosphor-svelte/lib/Bank';
import BookBookmark from 'phosphor-svelte/lib/BookBookmark';
import GlobeHemisphereWest from 'phosphor-svelte/lib/GlobeHemisphereWest';
import Flask from 'phosphor-svelte/lib/Flask';

export default {
  'Engineering/Tech': {
    icon: Wrench,
    class: 'theme-engineering'
  },
  'Health/Medicine': {
    icon: Heartbeat,
    class: 'theme-health'
  },
  'Business/Finance': {
    icon: Bank,
    class: 'theme-business'
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