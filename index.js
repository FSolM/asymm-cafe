const data = require('./files/case2.json');
const beverageTime = require('./helpers/getBeverageTime');

const baristas = [{ id: 1, timeUntilFree: 0, free: true }, { id: 2, timeUntilFree: 0, free: true }];
const dataLength = data.length;

let currentOrder = 0;

let orders = [];

// Day Start
for(let time = 0; time <= 100; time += 1) {
  // Check for the beverage order time
  if (data[currentOrder].order_time <= time) {
    // Checks if the baristas are free from making previous beverages
    if (baristas[0].timeUntilFree <= time) baristas[0].free = true;
    if (baristas[1].timeUntilFree <= time) baristas[1].free = true;

    // If there are no more queued beverages, exit
    if (currentOrder === dataLength) break;

    if (baristas[0].free) {
      // Sets a timeUntilFree value for the barista and then sets their status to not free
      baristas[0].timeUntilFree = (time + beverageTime.get(data[currentOrder].type));
      baristas[0].free = false;

      // Pushes ticket
      orders.push({ "order_id": data[currentOrder].order_id, "start_time": time, "barista_id": 1 });

      // Goes to the next order
      currentOrder += 1;
    }

    // If there are no more queued beverages, exit
    if (currentOrder === dataLength) break;

    if (baristas[1].free) {
      // Sets a timeUntilFree value for the barista and then sets their status to not free
      baristas[1].timeUntilFree = (time + beverageTime.get(data[currentOrder].type));
      baristas[1].free = false;

      // Pushes ticket
      orders.push({ "order_id": data[currentOrder].order_id, "start_time": time, "barista_id": 2 });

      // Goes to the next order
      currentOrder += 1;
    }
  }
}

console.log(orders);
