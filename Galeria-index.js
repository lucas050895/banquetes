document.addEventListener('DOMContentLoaded', () => {
    const LightBox = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(LightBox, {
      inDuration: 500,
      outDuration: 500,
    });
});