// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q8
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 0; i < 7; i++){
    let x = "#";
    for (let y = 1; y <= i; y++){
        x += "#";
    }
    console.log (x);
}
