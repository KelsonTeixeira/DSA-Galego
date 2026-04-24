import mergeSort from '../03-sort/merge-sort';

test('merge-sort', () => {
  const linkedList = {
    value: 7,
    next: {
      value: 23,
      next: {
        value: 41,
        next: {
          value: 12,
          next: {
            value: 35,
            next: {
              value: 3,
              next: {
                value: 29,
                next: {
                  value: 18,
                  next: {
                    value: 43,
                    next: {
                      value: 2,
                      next: null
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  const result = mergeSort(linkedList);
  expect(result.length).toEqual(10);
  expect(result).toEqual([2, 3, 7, 12, 18, 23, 29, 35, 41, 43]);
});