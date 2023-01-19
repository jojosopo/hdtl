import { writable } from 'svelte/store';

const createLocalStore = (key, startValue) => {
    const {
      subscribe,
      set,
      update
    } = writable(startValue);
  
    return {
      subscribe,
      set,
      update,
      useLocalStorage: () => {
        const json = localStorage.getItem(key);
        if (json) {
          set(JSON.parse(json));
        }
  
        subscribe(current => {
          localStorage.setItem(key, JSON.stringify(current));
        });
      }
    };
  }
   
  export const lge = createLocalStore('lge', 1);
  export const tgm = writable('');
  export const rnd = writable(0);
  export const cmp = writable(1);