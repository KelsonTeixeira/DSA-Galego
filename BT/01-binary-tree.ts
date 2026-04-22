
type TreeNode<T> = {
  value: T,
  left: TreeNode<T> | null,
  right: TreeNode<T> | null
}

export default class BinaryTree<T> {
  public root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insert(value: T): void {
    if (!this.root) {
      this.root = this.newNode(value);
      return;
    }
    this.insertNode(value, this.root);
  }

  preOrderTraversal(): T[] {
    return this.POT(this.root, []);
  }

  inOrderTraversal(): T[] {
    return this.IOT(this.root, []);
  }

  postOrderTraversal(): T[] {
    return this.PsOT(this.root, []);
  }

  private PsOT(node: TreeNode<T> | null, path: T[]): T[] {
    if(!node) return path;

    this.PsOT(node.left, path);
    this.PsOT(node.right, path);
    path.push(node.value);

    return path;
  }

  private POT(node: TreeNode<T> | null, path: T[]): T[] {
    if(!node) return path;

    path.push(node.value);
    this.POT(node.left, path);
    this.POT(node.right, path);

    return path;
  }

  private IOT(node: TreeNode<T> | null, path: T[]): T[] {
    if(!node) return path;

    this.IOT(node.left, path);
    path.push(node.value);
    this.IOT(node.right, path);

    return path;
  } 

  private insertNode(value: T, node: TreeNode<T>): void {
    const newNode = this.newNode(value);
    if (value > node.value) {
      if(node.right === null) {
        node.right = newNode;
        return;
      }
      this.insertNode(value, node.right);
    } else {
       if(node.left === null) {
        node.left = newNode;
        return;
      }
      this.insertNode(value, node.left);
    }
  }

  private newNode (value: T) {
    return { value, left: null, right: null } as TreeNode<T>;
  }
}