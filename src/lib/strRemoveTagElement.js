const strRemoveTagElement = (str) => {
  const regStr = new RegExp(/(?:<\s*\/?\s*)(p)(?:\s*([^>]*)?\s*>)/gi);
  const newStr = str.replace(regStr, "<p>");
  const arrayPar = newStr.split("<p>");

  return arrayPar;
};

export { strRemoveTagElement };
