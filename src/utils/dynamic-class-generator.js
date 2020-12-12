module.exports = (pattern, values) => {
  const classlist = {};

  function replace(pattern, value) {
    if (!classlist[pattern]) classlist[pattern] = {};
    classlist[pattern][value] = pattern
      .replace("_x_", `-${value}-`)
      .replace("__", ":");
  }
  values.forEach((value) => {
    if (Array.isArray(pattern)) {
      pattern.forEach((pat) => {
        replace(pat, value);
      });
    } else {
      replace(pattern, value);
    }
  });
  return classlist;
};
