export function splitChunksArr(sizeChunk, array) {
  if (!sizeChunk) throw Error("You miss size chunk");

  const temp = [];
  let i, j;

  for (i = 0, j = array.length; i < j; i += sizeChunk) {
    temp.push(array.slice(i, i + sizeChunk));
  }

  return temp;
}
