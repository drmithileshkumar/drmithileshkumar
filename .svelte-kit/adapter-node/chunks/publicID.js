const createPublicID = (name, count) => {
  const splitName = name.split(" ").map((part) => part.trim()).join("");
  return count > 0 ? `${splitName}${count}` : `${splitName}`;
};
export {
  createPublicID as c
};
