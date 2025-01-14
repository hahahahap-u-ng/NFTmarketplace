export const getTopCreators = (creators) => {
  if (!Array.isArray(creators)) {
    console.error("Invalid creators input:", creators);
    return [];
  }

  const finalCreators = [];

  try {
    const finalResults = creators.reduce((index, currentValue) => {
      (index[currentValue.seller] = index[currentValue.seller] || []).push(
        currentValue
      );
      return index;
    }, {});

    Object.entries(finalResults).forEach((item) => {
      const seller = item[0];
      const total = item[1]
        .map((newItem) => Number(newItem.price))
        .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

      finalCreators.push({ seller, total });
    });
  } catch (error) {
    console.error("Error processing creators:", error);
  }

  return finalCreators;
};
