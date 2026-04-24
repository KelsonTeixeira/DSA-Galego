import BT from '../01-BT/01-binary-tree';
import IOT from '../01-BT/iot';

test('create a binary tree', function () {
  const tree = new BT<number>();
  expect(tree.root).toBeNull();

  const values = [23, 87, 5, 61, 42, 90, 14, 3, 76, 55, 8, 99, 31, 67, 20];
  const valuesPreOT = [
    23, 5, 3, 14, 8, 20,
    87, 61, 42, 31, 55, 76,
    67, 90, 99
  ];
  const valuesPostOT = [
    3, 8, 20, 14, 5, 31,
    55, 42, 67, 76, 61, 99,
    90, 87, 23
  ];
  const valuesIOT = [3, 5, 8, 14, 20, 23, 31, 42, 55, 61, 67, 76, 87, 90, 99];

  values.forEach(value => tree.insert(value));
  expect(tree.root?.value).toBe(23);
  expect(tree.root?.left?.value).toBe(5);
  expect(tree.root?.right?.value).toBe(87);
  expect(valuesIOT.every((value, index) => value === tree.inOrderTraversal()[index])).toBeTruthy();
  expect(valuesPreOT.every((value, index) => value === tree.preOrderTraversal()[index])).toBeTruthy();
  expect(valuesPostOT.every((value, index) => value === tree.postOrderTraversal()[index])).toBeTruthy();
})