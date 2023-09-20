export function findShortestItem(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return arr.reduce((shortest, current) => {
    if (current.split(' ').length > 2) {
      current = current.split(' ').slice(0, 2).join(' ') + '...';
    }

    if (current.length < shortest.length) {
      return current;
    }

    return shortest;
  }, arr[0]);
}






