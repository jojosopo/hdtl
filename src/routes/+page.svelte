<script>
    import { onMount } from 'svelte';
    import Div from '$lib/Div.svelte';
    import { lge, tgm } from '$lib/store.js';
               
    let hdrs = ['','First','Second','Third','Fourth','Fifth', 'Sixth'];
    let data = [[],[]];
    let ndx  = [0,1];   
         
    async function getData() {
         const res0 = await fetch(`https://bowls-mobile.com/hdtl/league${$lge}.json`);
         const dat0 = await res0.json();
         let tagMap = [];
         let j = 0;
         for (j = 0; dat0.length > j; j += 1) {
	        tagMap[dat0[j].n] = dat0[j].i;
            }
         data[0] = dat0;

         const res1 = await fetch(`https://bowls-mobile.com/hdtl/league${$lge+1}.json`);       
         const dat1 = await res1.json();
         j = 0;
         for (j = 0; dat1.length > j; j += 1) {
	        tagMap[dat1[j].n] = dat1[j].i;
            }
         data[1] = dat1;
         $tgm = JSON.stringify(tagMap);
         }

    onMount (() => {getData()});
</script>

<style>
.container {
    display:grid;
    grid-template-columns:40% 7.5% 7.5% 7.5% 12.5% 12.5% 12.5%;
    grid-row-gap: 4px;
    }

.hdr {
    background:tan
}

.item {
    border:1px solid rgba(0, 0, 0, 0.8);
    padding:2px;
    text-align:left
}

.itm {
    border:1px solid #000000cc;
    padding:2px;
    text-align:right;
}

h2,h3 {
    text-align: center;
    margin: 0 0 0 0;
    line-height: 1.5;
    padding: 2px;
    background-color: mistyrose
   }

</style>
 <section>
  <h2 >Hinckley & District Triples League <br /></h2>
  {#each ndx as dvn}
    <h3>{hdrs[$lge + dvn]} Division</h3>
    <div class="container">
       <div class="item hdr">&nbsp;Teams</div><div class="itm hdr">P&nbsp;</div>
       <div class="itm hdr">W&nbsp;</div><div class="itm hdr">D&nbsp;</div>
       <div class="itm hdr">Pts&nbsp;&nbsp;</div>
       <div class="itm hdr">Shts&nbsp;</div><div class="itm hdr">Agns&nbsp;</div>
       {#each data[dvn] as team }
          <div class="item"><a href="/fix?{team.i}">{team.n}</a></div>
          {#each team.d as num}
            <div class="itm">{num}</div>
          {/each}
       {/each}
    </div>
   {/each}
   </section>
   
   <footer>
     <Div on:LgeUpd={getData}/>
   </footer>