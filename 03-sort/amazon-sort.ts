// O(n log n)

export default function Challenge(requests: number[][], inventory: number): number[] {
  const result: number[] = [];
  let inventoryUpdated: number = inventory;

  console.log('before: ', requests);
  requests.sort((a, b) => {
    if( b[2] !== a[2]) {
      return  b[2] - a[2];
    } else {
      return a[3] - b[3];
    }
  });
  console.log('after: ', requests);

 
  requests.forEach(request => {
    if (inventoryUpdated > 0) {
      inventoryUpdated -= request[1];
    } else {
      result.push(request[0]);
    }
  })

  return result;
}