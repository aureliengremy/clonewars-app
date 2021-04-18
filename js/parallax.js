function parallax(element) {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(element);
  // Math window calc
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.09}% ${
      50 - (_mouseY - _h) * 0.09
    }%`;
    let x = `${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
}

export { parallax };
