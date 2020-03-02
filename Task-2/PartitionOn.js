
var items = [1, 2, 3, 4, 5, 6];
function isEven(n) {return n % 2 == 0}
var i = partitionOn(isEven, items);





function partitionOn(pred, items) {
    var count = 0;
    var odd = [];
    var even = [];
    for(var i in items){
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