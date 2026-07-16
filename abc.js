function cloak() {
  var w = window.open();
  w.document.body.style.margin = "0";
  
  let iframe = w.document.createElement('iframe');
  let favicon = w.document.createElement('link');
  
  favicon.href = "https://cdn.jsdelivr.net/gh/ohio-math/cloaks/gdrive_new.png";
  favicon.rel = "icon";
  favicon.type = "image/png";
  
  iframe.style.height = "100dvh";
  iframe.style.width = "100vw";
  iframe.style.border = "none";
  iframe.referrerpolicy = "no-referrer";
  iframe.src = window.location.href;

  w.document.body.appendChild(iframe);
  w.document.head.appendChild(favicon);
  w.title = "Home - Google Drive";
}

window.onload = () => {
  let cloak_btn = document.querySelector("button");
  cloak_btn.onclick = () => cloak();
}
