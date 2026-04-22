import Challenge from '../heap/amazon-max-heap';
import quickSort from '../heap/amazon-quick-sort';

test('priority list', () => {
  // [id, amound, bidAmount, timestamp]
  const requests: number[][] = [[1, 2, 4, 3], [3, 5, 6, 3], [7, 6, 8, 3], [5, 4, 7, 3], [11, 4, 7, 2], [9, 3, 10, 3]];
  const inventory: number = 17;
  const expected: number [] = [3, 1];

  let _ordered = [
    [9, 3, 10, 3], 
    [7, 6, 8, 3],
    [11, 4, 7, 2], 
    [5, 4, 7, 3], 
    [3, 5, 6, 3],
  [1, 2, 4, 3]
];


  const result = Challenge(requests, inventory);
  expect(result).toEqual(expected);
})