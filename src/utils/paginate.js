export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // const lastPage = Math.floor(items / pageSize);
  // let array = [];
  // for (i = 1; i < lastPage; i++) {
  //   array.push(i);
  // }
  // array.slice(items, startIndex);
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
