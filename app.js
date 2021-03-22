const buttons = document.querySelectorAll(".Btns");

buttons.forEach(function (btn) {
  const button1 = btn.querySelector(".ListShow");
  // const button2 = btn.children[1]

  btn.addEventListener("click", function (btnEvent) {
    let CurrentButton = btnEvent.currentTarget.children[1];

    console.log(button1);

    buttons.forEach(function (item) {
      console.log(btn.children[1]);

      // TO NIE DZIAŁA
      if (button1 !== CurrentButton) {
        button1.classList.add("Hide")
        CurrentButton.classList.remove("Hide")
      }
    });

    // PO KLIKNIĘCIU LISTA SIĘ ROZWIJA PONOWNE KLIKNIĘCIE ZWIJA LISTĘ
    let Showbutton = btnEvent.currentTarget.children;
    for (i = 0; i < Showbutton.length; i++) {
      if (Showbutton[i].classList.contains("ListShow")) {
        Showbutton[i].classList.toggle("Hide");
      }
    }
  });
});

//JEŚLI KLIKAMY POZA LISTĄ ROZWIJANĄ LISTA SIĘ ZWIJA
window.addEventListener("click", function (event) {
  if (!event.target.matches(".Target")) {
    let dropdown = document.getElementsByClassName("ListShow");

    for (i = 0; i < dropdown.length; i++) {
      let openDropdown = dropdown[i];
      if (!openDropdown.classList.contains("Hide")) {
        openDropdown.classList.add("Hide");
      }
    }
  }
});