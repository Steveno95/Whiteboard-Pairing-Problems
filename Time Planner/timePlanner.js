// Implement a time planner that receives the availability of two people and a duration. 
// The time planner should return the earliest time slot that matches the given duration where both people have availability. 
// If there is no common time slot that satisfies these requirements, return an empty array.

// Each person's availability will be an array of two-element arrays. Each two-element array's first element represents the start time of a time slot, 
// and the second array element represents the end time of that time slot. 
// The input variable duration is a positive integer that represents the duration of a meeting in seconds. 
// The output should be an array with the appropriate start time and end time that meets all of the requirements.

// Examples:

// input: a = [[10, 50], [60, 120], [140, 210]]       
//        b = [[0, 15], [60, 70]]         
//        duration = 8 
// output: [60, 68]

// input: a = [[10, 50], [60, 120], [140, 210]]
//        b = [[0, 15], [60, 72]]
//        duration = 12
// output: [60, 72]

// input: a = [[10, 50], [60, 120], [140, 210]]         
//        b = [[0, 15], [60, 70]]         
//        duration = 12 
// output: [] // since there is no common slot

function timePlanner(a, b, duration) {
    let aCount = 0;
    let bCount = 0;

    while (aCount < a.length && bCount < b.length) {
        const start = Math.max(a[aCount][0], b[bCount][0]);
        const end = Math.min(a[aCount][1], b[bCount][1]);

        if (start + duration <= end) {
            return [start, start + duration];
        }

        if (a[aCount][1] < b[bCount][1]) {
            aCount++;
        } else {
            bCount++;
        }
    }   
    return []; 
}

console.log(timePlanner(
    [[10, 50], [60, 120], [140, 210]],
    [[0, 15], [60, 70]],
    8
  ));   // should print [60, 68]
  
  console.log(timePlanner(
    [[10, 50], [60, 120], [140, 210]],
    [[0, 15], [60, 72]],
    12
  ));   // should print [60, 72]
  
  console.log(timePlanner(
    [[10, 50], [60, 120], [140, 210]],
    [[0, 15], [60, 70]],
    12
  ));   // should print []
  
  console.log(timePlanner(
    [[0, 5], [50, 70], [120, 125]],
    [[0, 50]],
    8
  ));   // should print []