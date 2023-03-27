let pen_socialbutton_items = ["ZEzMpdj", "ZEzMpdj", "ZEzMpdj","ZEzMpdj", "LYPqaME", "OBPJKK", "KKPeOPm", "qBWVMop", "PoYepvR", "bpxgWZ", "evxZpZ", "MJKNJZ", "XPQyMo", "JXVpgp", "YNPaaQ", "QmXOOR", "MQRGOe", "zBLGYN", "mGGPXj", "VEZvdg", "XNQaym", "oXpWbd", "oPOVOL", "bqjBMv", "bvpprw", "oaWdOm", "bvgWrO", "ZMbLNM", "eZQKEr", "xywaoW", "yKOMmV", "YNyKpd", "ygNVYM", "QpwZqJ", "rNBZZqv", "gPmNwv", "pJjOGW", "Kxygqv", "QyBKvW", "azVXym", "obyLPe", "dNKKOw", "VPLgaV", "pNZzMg", "qJNRaL", "yNvKpp", "wgwdzr", "WNeEgZx", "LYPBQvW", "GRgZExW", "YzPxWyW", "LYEjxyG", "dyRjmmV", "ZEydQPx", "wvBEOYj", "abzegbx", "gOpvGwV", "GRJvoJR", "bGNKmBR", "ZEYoKBw", "WNbMjEW","wvBPvby","zYxdRQy","dyzyNQX","vYdyGOm","XWZgZxx","YzeYjbK"];
let pen_socialbutton_num = ["one", "two", "three", "four", "five", "six"];
let pen_socialbutton_theme_needed = document.body.parentNode.classList.contains(`theme_switchable`);// (new URL(window.location.href)).searchParams?.get(`theme`) != undefined; //REMOVE
let pen_socialbutton_theme = pen_socialbutton_theme_needed ? (window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light` ) : `none`;
document.body.className = pen_socialbutton_theme

let pen_socialbutton_theme_buttons = {
   none: {},
   light: {
      style:`border:none; background:#323133; color:white;`,
      innerHTML:`<i class="fas fa-lightbulb-slash"></i>`,
      title:`Use dark theme`
   },
   dark:{
      style:`border:none; background:white; color:#323133;`,
      innerHTML:`<i class="fas fa-lightbulb-on"></i>`,
      title:`Use light theme`
   }
}
var pen_socialbutton_button = pen_socialbutton_button || false;

const pen_socialbutton_theme_switch = () => {
   const el = document.getElementById(`theme_button`);
   pen_socialbutton_theme = pen_socialbutton_theme == `dark` ? `light` : `dark`;
   el.setAttribute(`style`, pen_socialbutton_theme_buttons[pen_socialbutton_theme].style)
   el.setAttribute(`title`, pen_socialbutton_theme_buttons[pen_socialbutton_theme].title)
   el.innerHTML = pen_socialbutton_theme_buttons[pen_socialbutton_theme].innerHTML
   
   document.body.className = pen_socialbutton_theme
}

let pen_socialbutton_re_hide_notification_timeout = null;

if(window.location.href.indexOf("fullcpgrid") == -1 /*Small on pages*/ && window.location.href.indexOf("debug") /*...debug, mentioned for whenever I forget how to read code*/ == -1 && window.location.href.indexOf("fullembedgrid") == -1 /*Focused/details*/) {
   document.body.innerHTML +=
   `<link href="zz.css" rel="stylesheet"><div style=position:fixed;bottom:-5rem;right:-5rem; id=user-button><div class=u-icons style=position:absolute;z-index:950;top:50%;left:50%;width:0;height:0%;opacity:0;><a id="socialbutton-twitter" href="https://www.instagram.com/ulvin_necefov/" target=_blank rel="no-refer"><div class="u-card fab fa-instagram"></div></a><a href=https://github.com/UlikGames target=_blank><div class="u-card fab fa-github"></div></a></div><div class="u-card u-main"style=position:relative;z-index:1000;width:4rem;height:4rem;display:grid;place-items:center;background:var(--user-button-background)><a href="https://github.com/UlikGames" target="_blank"><img src="https://i.koya.io/S70jhQ.webp" style="border-radius:100%; width:64px; height:64px;"/></a></div></div>`
   // setTimeout(() => {
   //    const twitter = document.getElementById(`socialbutton-twitter`);
   //    twitter.addEventListener(`click`, e => {
   //       e.preventDefault();
   //       clearTimeout(pen_socialbutton_re_hide_notification_timeout);
   //       twitter.classList.add(`show`);
   //       pen_socialbutton_re_hide_notification_timeout =
   //         setTimeout(() => {
   //           twitter.classList.remove(`show`);
   //         },1000)
   //    })
   // },1000)
}