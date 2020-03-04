let items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
let i = partitionOn(isEven, items);
function partitionOn(pred, items) {
    let count = 0;
    let odd = [];
    let even = [];
    for(let i in items){
        if(!pred(items[i])){
            count ++;
            odd.push(items[i]);
        }
         if(pred(items[i])){
              even.push(items[i]);
            }
        }
        items.length = 0;
        items.push.apply(items,odd.concat(even)); 
        return count;
    }
