// O(log n) -> O(n)
function partion(list: number[][], lo: number, hi: number): number {
  let pivot = list[hi];
  let idx = lo - 1;

  for (let i = lo; i < hi; i++) {
    if (list[i][2] < pivot[2]) {
      idx++;
      [list[i], list[idx]] = [list[idx], list[i]]
    }
    if (list[i][2] === pivot[2]) {
      if (list[i][3] > pivot[3]) {
        idx++;
        [list[i], list[idx]] = [list[idx], list[i]]
      }
    }
  }

  idx++;
  [list[idx], list[hi]] = [list[hi], list[idx]];
  return idx;
}

function qsDesc(list: number[][], lo: number, hi: number): void {
  if (lo >= hi) return;

  const pivot = partion(list, lo, hi);

  qsDesc(list, lo, pivot - 1);
  qsDesc(list, pivot + 1, hi);
}

export default function Challenge(requests: number[][], inventory: number): number[] {
  const result: number[] = [];
  let inventoryUpdated: number = inventory;
  const lo = 0;
  const hi = requests.length - 1;

  qsDesc(requests, lo, hi);

  for(let i = requests.length - 1; i >= 0; i--){
    if (inventoryUpdated > 0) {
      inventoryUpdated -= requests[i][1];
    } else {
      result.push(requests[i][0]);
    }
  }

  return result;
}