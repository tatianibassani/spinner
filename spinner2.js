const spinner = function(){
    for (let i = 800; i <= 800*3; i += 800){
      setTimeout(() => {
        process.stdout.write('\r|   ');
      }, 100 + i);
      setTimeout(() => {
        process.stdout.write('\r/   ');
      }, 300 + i);
      setTimeout(() => {
        process.stdout.write('\r-   ');
      }, 500 + i);
      setTimeout(() => {
        // Need to escape the backslash since it's a special character.
        process.stdout.write('\r\\   '); 
      }, 700 + i);
    }
  };
  
  spinner();
  
  // setTimeout(() => {
  //   process.stdout.write('\r|   ');
  // },  100);
  // setTimeout(() => {
  //   process.stdout.write('\r/   ');
  // },  300);
  // setTimeout(() => {
  //   process.stdout.write('\r-   ');
  // }, 500);
  // setTimeout(() => {
  //   // Need to escape the backslash since it's a special character.
  //   process.stdout.write('\r\\   '); 
  // }, 700);
  
  
  /*const spinner = function (){
    for (i = 0; i < 4; i++) {
      setTimeout(() => {
        process.stdout.write('\r|   ');
      }, i * 100);
      setTimeout(() => {
        process.stdout.write('\r/   ');
      }, i * 300);
      setTimeout(() => {
        process.stdout.write('\r-   ');
      }, i * 500);
      setTimeout(() => {
        // Need to escape the backslash since it's a special character.
        process.stdout.write('\r\\   '); 
      }, i * 700);
     }
  };*/
  
  //spinner();
  /*
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);
  
  setTimeout(() => {
    process.stdout.write('\r|    ');
  }, 900);
  
  setTimeout(() => {
    process.stdout.write('\r/    ');
  }, 1100);
  
  setTimeout(() => {
    process.stdout.write('\r-    ');
  }, 1300);
  
  setTimeout(() => {
    process.stdout.write('r\\    ');
  }, 1500);
  
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 1700);*/