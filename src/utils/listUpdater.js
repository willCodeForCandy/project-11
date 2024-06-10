export const updateWithoutDuplicates = (newItem, oldList) => {
  const repeatedLocation = oldList.find(listItem => listItem.id === newItem.id);
  const updatedList = [];
  if (!repeatedLocation) {
    updatedList = [newItem, ...oldList];
    console.log(newItem, oldList, updatedList);
  } else {
    updatedList = oldList;
  }
  return updatedList;
};
