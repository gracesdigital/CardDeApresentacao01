
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.setAttribute("rel", "noopener noreferrer");
  });
  document.querySelectorAll(".link-button").forEach((link) => {
    if (/SEU-LINK|SEU-SITE|SEU_USUARIO|0000000000/.test(link.href)) {
      console.info(`Personalize o destino do botão: ${link.innerText.trim()}`);
    }
  });
});
