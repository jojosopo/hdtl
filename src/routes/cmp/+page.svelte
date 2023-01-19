<script>
    import Fa from '$lib/fa.svelte';
    import { cmp,rnd } from '$lib/store.js';
    import { getAllContexts, onMount } from 'svelte';
    import { faCheckCircle,faWalking, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
   
    const walk = faWalking;
    const won = faCheckCircle;
    const hdrs = ['Knockout Cup Div 1-3', 'Knockout Cup Div 4-6'];
    let data = [];

    async function getCmp() {
       let response = await fetch(`https://bowls-mobile.com/hdtl/comp${$cmp}.json`);
       const dta = await response.json();
       data = dta[$rnd];
      }
  
    onMount (() => {getCmp()});
</script>

<style>
.container {
    display:grid;
    grid-template-columns:40% 10% 10% 40%;
    font-size :0.9em;
    }

.hdr {
    background:tan;
    border:1px solid #000000cc;
    padding:2px;
    text-align:left;
}

.item {
    border:1px solid rgba(0, 0, 0, 0.8);
    padding:4px;
    text-align:left
}

.trn {
    border:1px solid #000000cc;
    padding:2px;
    text-align:left;
}

.navButton {
	border: none;
	color: lightslategrey;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 4px;
	}

.selButton {
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
  
.bon {
  background-color : #0cd1e8;
  }

.boff {
  background-color: #3880ff;
  }

.flip {
	background-color:	#7044ff;
	}

#footer {
     position: absolute;
     bottom:0;
     width:100%;
	}

.block {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
	}
	
h2,h3{
    text-align: center;
    margin: 0 0 0 0;
    line-height: 1.5;
    padding: 2px;
    background-color: mistyrose
   }
  
</style>
   <section>
   <h2 >Hinckley & District Triples League <br /></h2>
   <h3>{hdrs[$cmp-1]}</h3>
   <div class="container">
      {#each data as field}
        <div class="{field.b}">{field.h}
        {#if (field.s==='W/O')||(field.t==='W/D')}<Fa icon={walk}/>
        {:else if (field.s > field.t)&&(field.t !='') }<Fa icon={won}/>{/if}
        </div>
        <div class="{field.b}">{field.s}</div>
        <div class="{field.b}">{field.t}</div>
        <div class="{field.b}">{field.a}
        {#if (field.s==='W/D')||(field.t==='W/0')}<Fa icon={walk}/>
        {:else if (field.t > field.s)&&(field.s !='')}<Fa icon={won}/>{/if}
        </div> 
      {/each}
   </div>
   <div class="block"> 
     <button class="navButton" on:click={() => {if ($rnd > 0) $rnd -= 1; getCmp()}}><Fa icon={faBackward}/>&nbsp;Prev Round</button>
     <button class="navButton" on:click={() => {if ($rnd < 1) $rnd += 1; getCmp()}}>Next Round&nbsp;<Fa icon={faForward}/></button>
   </div>
   <p>Symbol Keys : <Fa icon={won}/>&nbsp;Winner -- Conceded&nbsp;&nbsp;<Fa icon={walk}/></p>
   </section>
   <div id ="footer">
     <div class="block">
       <button class="selButton {$cmp === 1 ? 'bon' : 'boff'}" on:click={() => {$cmp=1; $rnd=0; getCmp()}}>Div 1-3</button>
       <button class="selButton flip" on:click={() => history.back()}>Leagues</button>
       <button class="selButton {$cmp ===  2 ? 'bon' : 'boff'}" on:click={() => {$cmp=2; $rnd=0; getCmp()}}>Div 4-6</button>
     </div>
    </div>