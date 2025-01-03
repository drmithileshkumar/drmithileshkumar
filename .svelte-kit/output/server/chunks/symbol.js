const initializeNewSymbol = (publicID, title, description, category, elements, defs, viewBox, permission, count) => {
  let newSymbol = {
    publicID,
    creationTimestamp: Date.now(),
    title,
    description,
    category,
    // array of strings
    elements,
    defs,
    viewBox,
    permission,
    //public, private
    price: 0,
    symbolID: publicID + count
  };
  return newSymbol;
};
export {
  initializeNewSymbol as i
};
