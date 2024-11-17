// Your code here.

function loop(value, test, update, action){
    while (test(value) == true) {
        value = update(value);
        action(value + 1);
      }
}


loop(3, n => n > 0, n => n - 1, console.log);
