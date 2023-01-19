<script>
   import { cmp, rnd } from './store.js';
   import { createEventDispatcher } from 'svelte';
   const dispatch = createEventDispatcher();
</script>

<style>
		
	.block {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    }
	
    button {
    border: none;
    border-radius: 20px;
	  color: white;
	  padding: 15px;
	  text-align: center;
	  text-decoration: none;
	  display: inline-block;
	  font-size: 16px;
	  margin: 6px 8px;
    }

    .bon {
      background-color : #0cd1e8;
    }

    .boff {
      background-color: #3880ff;
    }
    
</style>

<div class="block">
    <button class="button {$cmp === 1 ? 'bon' : 'boff'}" on:click={() => {$cmp=1; $rnd=0; dispatch('CmpUpd')}}>Div 1-3</button>
    <button class="button {$cmp ===  2 ? 'bon' : 'boff'}" on:click={() => {$cmp=2; $rnd=0; dispatch('CmpUpd')}}>Div 4-6</button>
</div>
