const botonesAbrir = document.querySelector(".mas_archivos");
const modalDescargas = document.querySelector(".modal");
const botonesCerrar = document.querySelector(".close_downloads");
const fondoDes = document.querySelector(".overlay_download");

// * ============================================================
//   MODAL DE Descargas
//   Abre y cierra las Descargas completas.
//   ============================================================

if (botonesAbrir && botonesCerrar && fondoDes && modalDescargas) {
  const openClose = () => {
    modalDescargas.classList.toggle("activo");
    fondoDes.classList.toggle("activo");
  };

  botonesAbrir.addEventListener("click", openClose);
  botonesCerrar.addEventListener("click", openClose);
  fondoDes.addEventListener("click", openClose);
}
