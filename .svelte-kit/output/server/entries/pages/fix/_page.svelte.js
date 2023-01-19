import { c as create_ssr_component, h as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index.js";
import { faBackward } from "@fortawesome/free-solid-svg-icons/faBackward";
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { fw = false } = $$props;
  let { flip = false } = $$props;
  let { pull = false } = $$props;
  let { rotate = false } = $$props;
  let { size = false } = $$props;
  let { color = "" } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  i = icon && icon.icon || [0, 0, "", [], ""];
  {
    {
      let float;
      let width;
      const height = "1em";
      let lineHeight;
      let fontSize;
      let textAlign;
      let verticalAlign = "-.125em";
      const overflow = "visible";
      if (fw) {
        textAlign = "center";
        width = "1.25em";
      }
      if (pull) {
        float = pull;
      }
      if (size) {
        if (size == "lg") {
          fontSize = "1.33333em";
          lineHeight = ".75em";
          verticalAlign = "-.225em";
        } else if (size == "xs") {
          fontSize = ".75em";
        } else if (size == "sm") {
          fontSize = ".875em";
        } else {
          fontSize = size.replace("x", "em");
        }
      }
      const styleObj = {
        float,
        width,
        height,
        "line-height": lineHeight,
        "font-size": fontSize,
        "text-align": textAlign,
        "vertical-align": verticalAlign,
        overflow
      };
      let styleStr = "";
      for (const prop in styleObj) {
        if (styleObj[prop]) {
          styleStr += `${prop}:${styleObj[prop]};`;
        }
      }
      s = styleStr + style;
    }
  }
  {
    {
      let t = "";
      if (flip) {
        let flipX = 1;
        let flipY = 1;
        if (flip == "horizontal") {
          flipX = -1;
        } else if (flip == "vertical") {
          flipY = -1;
        } else {
          flipX = flipY = -1;
        }
        t += ` scale(${flipX} ${flipY})`;
      }
      if (rotate) {
        t += ` rotate(${rotate} 0 0)`;
      }
      transform = t;
    }
  }
  return `${i[4] ? `<svg${add_attribute("id", id, 0)}${add_attribute("class", clazz, 0)}${add_attribute("style", s, 0)}${add_attribute("viewBox", `0 0 ${i[0]} ${i[1]}`, 0)} aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g transform="${"translate(256 256)"}"><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)} transform="${"translate(-256 -256)"}"></path>` : `<path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)} transform="${"translate(-256 -256)"}"></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)} transform="${"translate(-256 -256)"}"></path>`}</g></g></svg>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-ow5s3q{display:grid;grid-template-columns:50% 15% 10% 17.5% 7.5%;grid-row-gap:4px}.hdr.svelte-ow5s3q{background:tan\n}.item.svelte-ow5s3q{border:1px solid rgba(0, 0, 0, 0.8);padding:2px;text-align:left\n}.itm.svelte-ow5s3q{border:1px solid #000000cc;padding:2px;text-align:right\n}button.svelte-ow5s3q{border:none;border-radius:12px;color:#f4f4f4;background-color:#a2a4ab;padding:10px;text-align:center;text-decoration:none;display:inline-block;font-size:16px;margin:6px 4px}h2.svelte-ow5s3q,h3.svelte-ow5s3q{text-align:center;margin:0 0 0 0;line-height:1.5;padding:2px;background-color:mistyrose}",
  map: null
};
const title = "Hinckley & District Triples League";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hds = [];
  let fixes = [];
  $$result.css.add(css);
  return `<section><h2 class="${"svelte-ow5s3q"}">${escape(title)}</h2>
   <h3 class="${"svelte-ow5s3q"}">${escape(hds[0])} -- ${escape(hds[1])}</h3>
   <div class="${"container svelte-ow5s3q"}"><div class="${"item hdr svelte-ow5s3q"}"> Against</div><div class="${"itm hdr svelte-ow5s3q"}">Date </div>
       <div class="${"itm hdr svelte-ow5s3q"}">Grn </div><div class="${"itm hdr svelte-ow5s3q"}">Result </div> 
       <div class="${"itm hdr svelte-ow5s3q"}">Pts  </div>                                                                                                                               
       ${each(fixes, (fix) => {
    return `<div class="${"item svelte-ow5s3q"}">${escape(fix.n)}</div>
           <div class="${"itm svelte-ow5s3q"}">${escape(fix.f)}</div>
           <div class="${"itm svelte-ow5s3q"}">${escape(fix.g)} </div>
           <div class="${"itm svelte-ow5s3q"}">${escape(fix.d[0])}:${escape(fix.d[1])}</div>
           <div class="${"itm svelte-ow5s3q"}">${escape(fix.d[2])}</div>`;
  })}</div></section>
   <footer><button class="${"svelte-ow5s3q"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faBackward }, {}, {})} Back</button></footer>`;
});
export {
  Page as default
};
