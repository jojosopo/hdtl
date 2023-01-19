<script>
   import { lge } from './store.js';
   import { createEventDispatcher, onMount } from 'svelte';
   const dispatch = createEventDispatcher(); 
</script>

<style>
	button {
	border: none;
	border-radius: 12px;
	color: white;
	padding: 10px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 6px 4px;
	}
	
	.block {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
	}
	
	#footer {
     position: absolute;
     bottom:0;
     width:100%;
	}
	
	.bon {
      background-color : #0cd1e8;
    }

    .boff {
      background-color: #3880ff;
    }

	.flip {
	  background-color:	#7044ff;
	}
</style>

<div id="footer">  
	<div class="block">
		<button class="button {$lge == 1 ? 'bon' : 'boff'}" on:click={() => { $lge = 1; dispatch('LgeUpd')}}>Div 1&2</button>
		<button class="button {$lge == 3 ? 'bon' : 'boff'}" on:click={() => { $lge = 3; dispatch('LgeUpd')}}>Div 3&4</button>
		<button class="button {$lge == 5 ? 'bon' : 'boff'}" on:click={() => { $lge = 5; dispatch('LgeUpd')}}>Div 5&6 </button>
		<button class="button flip"><a href="cmp" style="color: white; text-decoration: none;">KO Cup</a></button>
	</div>
</div>
