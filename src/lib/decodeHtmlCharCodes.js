const decodeHtmlCharCodes = (str) => {
  return str.replace(/(&#(\d+);)/g, function (match, capture, charCode) {
    return String.fromCharCode(charCode);
  });
};

export { decodeHtmlCharCodes };
