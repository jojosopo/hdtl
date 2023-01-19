<script>
    import { onMount } from 'svelte';
    import Fa from '$lib/fa.svelte';
    import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward';
        
    const title = 'Hinckley & District Triples League';
    const icon = faBackward;
    let data = [];
    let hds = [];
    let fixes = [];
       
    onMount(async () => {
         const team = window.location.search.substring(1); 
         const res = await fetch(`https://bowls-mobile.com/hdtl/fixture${team}.json`);
         data = await res.json();
         hds = data.p;
         fixes = data.f
        });
        
</script>

<style>
.container {
    display:grid;
    grid-template-columns:50% 15% 10% 17.5% 7.5%;
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
    text-align:right
}

button {
	border: none;
	border-radius: 12px;
    color: #f4f4f4;
    background-color : #a2a4ab;
	padding: 10px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 6px 4px;
    }
    
h2,h3 {
    text-align: center;
    margin: 0 0 0 0;
    line-height: 1.5;
    padding: 2px;
    background-color: mistyrose;
}

</style>

  <section>
   <h2>{title}</h2>
   <h3>{hds[0]} -- {hds[1]}</h3>
   <div class="container">
       <div class="item hdr">&nbsp;Against</div><div class="itm hdr">Date&nbsp;</div>
       <div class="itm hdr">Grn&nbsp;</div><div class="itm hdr">Result&nbsp;</div> 
       <div class="itm hdr">Pts&nbsp;&nbsp;</div>                                                                                                                               
       {#each fixes as fix }
           <div class="item">{fix.n}</div>
           <div class="itm">{fix.f}</div>
           <div class="itm">{fix.g}&nbsp;</div>
           <div class="itm">{fix.d[0]}:{fix.d[1]}</div>
           <div class="itm">{fix.d[2]}</div>
        {/each}
    </div>
   </section>
   <footer>
      <button on:click={() => history.back()}><Fa icon={faBackward}></Fa>&nbsp;Back</button>
   </footer>
  