function foo(x, y) {   
    if (x < 1) {   
      return x + y;    }  
      console.log(x,y)
      return x + y + foo(x / 2, y / 2); 
      }
      console.log(foo(4, 6));
// 4 6 10+8.75
// 2 3 5+3.75
// 1 1.5 2.5+1.25=3.75
// 18.75