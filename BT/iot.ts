type BinaryNode<T> = {
   value: T,
  left: BinaryNode<T> | null,
  right: BinaryNode<T> | null
}

function walk(node:BinaryNode<number> | null, path: number[]): number[] {
  if(!node) return path;

  //left
  walk(node.left, path);
  //root
  path.push(node.value);
  // right
  walk(node.right, path);

  return path;
}

export default function inOrderSearch(root: BinaryNode<number>): number[] {
  return walk(root, []);
}