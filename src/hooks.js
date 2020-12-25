import { useEffect, useState } from "react";

export function useTitle(title,deps) {
  function cleanUp() {
    document.title = "DECE React App";
  }

  function updateTitle() {
    console.log("update title with ", title);
    document.title = title;

    return cleanUp;
  }

  useEffect(updateTitle,deps);
}
