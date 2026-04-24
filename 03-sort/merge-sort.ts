// O(n log n)

type Node<T> = {
  value: T,
  next: Node<T>
} | null;

function findMiddle(head: Node<number>): Node<number> {
  let slow = head;
  let fast = head?.next?.next ?? null;

  while (fast && fast.next) {
    slow = slow?.next ?? null;
    fast = fast.next;
  }

  return slow;
}

function merge(list1: Node<number>, list2: Node<number>): Node<number> {
  const head: Node<number> = { value: 0, next: null };
  let tail = head;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 ?? list2;
  return head.next;
}

function sort(head: Node<number>): Node<number> {
  if(!head || !head.next) return head;

  const middle = findMiddle(head);
  const afterMiddle = middle!.next;
  middle!.next = null;
  const left = sort(head);
  const right = sort(afterMiddle);

  const sortedList = merge(left, right);

  return sortedList;
}

function returnValues(list: Node<number>): number[] {
  let values: number[] = [];

  function walk(node: Node<number>) {
    if (!node) return;
    values.push(node.value);
    walk(node.next);
  }

  walk(list);

  return values;
}

export default function MergeSort(head: Node<number>): number[] {
  const sortedList = sort(head);

  const values = returnValues(sortedList);
  console.log('values: ', values);

  return values;
}