const cursorPersonalize = () => {
  const cursor = document.querySelector(".cursor");
  let outPage = false;

  cursor &&
    document.addEventListener("mousemove", (e) => {
      if (
        e.pageX < 50 ||
        e.pageX > window.innerWidth - 50 ||
        e.pageY < 50 ||
        e.pageY > window.innerHeight - 50
      ) {
        outPage = true;
      } else {
        outPage = false;
      }
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
      );
    });
};

const checkHoverPersonalized = () => {
  const cursor = document.querySelector(".cursor");
  const hoverLight = [...document.querySelectorAll(".hover__light")];
  const hoverDark = [...document.querySelectorAll(".hover__dark")];

  hoverLight.forEach((element) => {
    element.addEventListener("mouseover", () =>
      cursor.classList.add("hover_black")
    );
    element.addEventListener("mouseout", () =>
      cursor.classList.remove("hover_black")
    );
  });
  hoverDark.forEach((element) => {
    element.addEventListener("mouseover", () =>
      cursor.classList.add("hover_white")
    );
    element.addEventListener("mouseout", () =>
      cursor.classList.remove("hover_white")
    );
  });
};

export { cursorPersonalize, checkHoverPersonalized };
