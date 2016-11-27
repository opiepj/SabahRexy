export class Insertion {
  
  public static sort(input) {
    
    for (let j: number = 1; j < input.items.length; j++) {
      
      (function (j) {
        setTimeout(() => {
          let key: any = input.items[j].val;
          
          let i: number = j - 1;
          
          while (i >= 0 && input.items[i].val > key) {
            input.items[i + 1].val = input.items[i].val;
            i = i - 1;
          }
          
          input.items[i + 1].val = key;
          input.setCurrent(input.items[i + 1]);
          
        }, 1000 * j);
      })(j);
    }
  }
  
}
