import { derived, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';

export let attempted = writable(false);
export let saved = writable(true);
export let newChapter = writable(false);