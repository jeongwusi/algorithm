function solution(bridge_length, weight, truck_weights) {
  let bridgeQueue = [];
  let bridgeWeight = 0;
  let time = 0;

  while (truck_weights.length > 0 || bridgeQueue.length > 0) {
    time++;

    if (
      bridgeQueue.length > 0 &&
      time - bridgeQueue[0].startedTime === bridge_length
    ) {
      const departedTruck = bridgeQueue.shift();
      bridgeWeight -= departedTruck.weight;
    }

    if (truck_weights.length > 0 && weight >= bridgeWeight + truck_weights[0]) {
      const newTruck = truck_weights.shift();
      bridgeQueue.push({ startedTime: time, weight: newTruck });
      bridgeWeight += newTruck;
    }
  }
  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
