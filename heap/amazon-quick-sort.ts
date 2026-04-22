
class Heap {
  public length: number;
  public list: number[][];

  constructor () {
    this.length = 0;
    this.list = [];
  }

  insert(item: number[]): void {
    this.list[this.length] = item;
    this.heapfyUp(this.length);
    this.length++;
  }

  heapfyUp(index: number): void {
    if(index === 0) return;
    const parent = this.parent(index);
    if(this.list[parent][2] > this.list[index][2]){
      const temp = this.list[parent];
      this.list[parent] = this.list[index];
      this.list[index] = temp;
      this.heapfyUp(parent);
    }
    // if(this.list[parent][2] === this.list[index][2]){
    //   if(this.list[parent][3] > this.list[index][3]){
    //     const temp = this.list[parent];
    //     this.list[parent] = this.list[index];
    //     this.list[index] = temp;
    //     this.heapfyUp(parent);
    //   }
    // }
  }

  parent(index: number) {
    return Math.floor((index - 1) / 2);
  }
}

export default function Challenge(requests: number[][], inventory: number): number[] {
  const queue = new Heap();
  const result: number[] = [];
  let inventoryUpdated: number = inventory;

  console.log('before: ', requests);
  for(let i = 0; i < requests.length; i++) {
    queue.insert(requests[i]);
  }
  queue.heapfyUp(queue.list.length - 1);
  console.log('after: ', queue.list);

  queue.list.forEach(request => {
    if(inventoryUpdated > 0) {
      inventoryUpdated -= request[1];
    } else {
      result.push(request[0]);
    }
  })

  console.log('result: ', result);

  return result;
}