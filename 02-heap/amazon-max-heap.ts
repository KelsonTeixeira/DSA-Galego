
class MaxHeap {
  public length: number;
  public list: number[][];

  constructor() {
    this.length = 0;
    this.list = [];
  }

  insert(item: number[]): void {
    this.list[this.length] = item;
    this.heapfyUp(this.length);
    this.length++;
  }

  pop(): number[] {
    if(this.length === 0) return [];
    const out = this.list[0];
    if(this.length === 1) {
      this.list = [];
      this.length = 0;
      return out;
    }
    this.length--;
    this.list[0] = this.list[this.length];
    this.heapfyDown(0);
    return out;
  }

  heapfyDown(index: number): void {
    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);

    if (index >= this.length) return;
    if (leftIndex >= this.length) return;

    const leftValue = this.list[leftIndex];
    const rightValue = this.list[rightIndex];
    const currValue = this.list[index];

    if (leftValue[2] > rightValue[2] && leftValue[2] > currValue[2]) {
      this.swap(leftIndex, index);
      this.heapfyDown(leftIndex);
    }
    if (leftValue[2] > rightValue[2] && leftValue[2] === currValue[2]) {
      if(leftValue[3] < currValue[3]){
        this.swap(leftIndex, index);
        this.heapfyDown(leftIndex);
      }
    }
    if (rightValue[2] > leftValue[2] && rightValue[2] > currValue[2] ) {
      this.swap(rightIndex, index);
      this.heapfyDown(rightIndex);
    }
    if (rightValue[2] > rightValue[2] && rightValue[2] === currValue[2]) {
      if(rightValue[3] < currValue[3]){
        this.swap(rightIndex, index);
        this.heapfyDown(rightIndex);
      }
    }
  }

  heapfyUp(index: number): void {
    if (index === 0) return;
    const parent = this.parent(index);
    if (this.list[parent][2] < this.list[index][2]) {
      this.swap(index, parent);
      this.heapfyUp(parent);
    }
    if (this.list[parent][2] === this.list[index][2]) {
      if (this.list[parent][3] > this.list[index][3]) {
        this.swap(index, parent);
        this.heapfyUp(parent);
      }
    }
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private leftChild(index: number) {
    return (index * 2) + 1;
  }

  private rightChild(index: number) {
    return (index * 2) + 2;
  }

  private swap(i: number, j: number): void {
    [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
  }
}

export default function Challenge(requests: number[][], inventory: number): number[] {
  const queue = new MaxHeap();
  const result: number[] = [];
  let inventoryUpdated: number = inventory;

  requests.forEach(request => {
    queue.insert(request);
  });
  
  while(queue.list.length){
    let curr = queue.pop();
    if (inventoryUpdated > 0) {
      inventoryUpdated -= curr[1];
    } else {
      result.push(curr[0]);
    }
  }

  return result;
}