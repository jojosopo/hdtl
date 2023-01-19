import { c as create_ssr_component, b as subscribe, d as createEventDispatcher, e as escape, f as each, v as validate_component } from "../../chunks/index.js";
import { w as writable } from "../../chunks/index2.js";
import "fs";
const createLocalStore = (key, startValue) => {
  const {
    subscribe: subscribe2,
    set,
    update
  } = writable(startValue);
  return {
    subscribe: subscribe2,
    set,
    update,
    useLocalStorage: () => {
      const json = localStorage.getItem(key);
      if (json) {
        set(JSON.parse(json));
      }
      subscribe2((current) => {
        localStorage.setItem(key, JSON.stringify(current));
      });
    }
  };
};
const lge = createLocalStore("lge", 1);
const tgm = writable("");
const Div_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-czwqav{border:none;border-radius:12px;color:white;padding:10px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:6px 4px}.block.svelte-czwqav{display:flex;flex-flow:row wrap;justify-content:space-around}#footer.svelte-czwqav{position:absolute;bottom:0;width:100%}.bon.svelte-czwqav{background-color:#0cd1e8}.boff.svelte-czwqav{background-color:#3880ff}",
  map: null
};
const Div = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $lge, $$unsubscribe_lge;
  $$unsubscribe_lge = subscribe(lge, (value) => $lge = value);
  createEventDispatcher();
  $$result.css.add(css$1);
  $$unsubscribe_lge();
  return `<div id="${"footer"}" class="${"svelte-czwqav"}"><div class="${"block svelte-czwqav"}"><button class="${"button " + escape($lge == 1 ? "bon" : "boff", true) + " svelte-czwqav"}">HDTL 1 &amp; 2</button>
		<button class="${"button " + escape($lge == 3 ? "bon" : "boff", true) + " svelte-czwqav"}">HDTL 3 &amp; 4</button>
		<button class="${"button " + escape($lge == 5 ? "bon" : "boff", true) + " svelte-czwqav"}">HDTL 5 &amp; 6 </button></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-bd7nx6{display:grid;grid-template-columns:40% 7.5% 7.5% 7.5% 12.5% 12.5% 12.5%;grid-row-gap:4px}.hdr.svelte-bd7nx6{background:tan\n}.item.svelte-bd7nx6{border:1px solid rgba(0, 0, 0, 0.8);padding:2px;text-align:left\n}.itm.svelte-bd7nx6{border:1px solid #000000cc;padding:2px;text-align:right}h2.svelte-bd7nx6,h3.svelte-bd7nx6{text-align:center;margin:0 0 0 0;line-height:1.5;padding:2px;background-color:mistyrose\n   }",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tgm;
  let $lge, $$unsubscribe_lge;
  $$unsubscribe_tgm = subscribe(tgm, (value) => value);
  $$unsubscribe_lge = subscribe(lge, (value) => $lge = value);
  let hdrs = ["", "First", "Second", "Third", "Fourth", "Fifth", "Sixth"];
  let data = [[], []];
  let ndx = [0, 1];
  $$result.css.add(css);
  $$unsubscribe_tgm();
  $$unsubscribe_lge();
  return `<section><h2 class="${"svelte-bd7nx6"}">Hinckley &amp; District Triples League <br></h2>
  ${each(ndx, (dvn) => {
    return `<h3 class="${"svelte-bd7nx6"}">${escape(hdrs[$lge + dvn])} Division</h3>
    <div class="${"container svelte-bd7nx6"}"><div class="${"item hdr svelte-bd7nx6"}"> Teams</div><div class="${"itm hdr svelte-bd7nx6"}">P </div>
       <div class="${"itm hdr svelte-bd7nx6"}">W </div><div class="${"itm hdr svelte-bd7nx6"}">D </div>
       <div class="${"itm hdr svelte-bd7nx6"}">Pts  </div>
       <div class="${"itm hdr svelte-bd7nx6"}">Shts </div><div class="${"itm hdr svelte-bd7nx6"}">Agns </div>
       ${each(data[dvn], (team) => {
      return `<div class="${"item svelte-bd7nx6"}"><a href="${"/fix?" + escape(team.i, true)}">${escape(team.n)}</a></div>
          ${each(team.d, (num) => {
        return `<div class="${"itm svelte-bd7nx6"}">${escape(num)}</div>`;
      })}`;
    })}
    </div>`;
  })}</section>
   
   <footer>${validate_component(Div, "Div").$$render($$result, {}, {}, {})}</footer>`;
});
export {
  Page as default
};
