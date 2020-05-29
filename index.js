/**
 * Function that returns the ways the ball call be removed from
 * the bucket, based on the condition where we can remove one or two
 * ball at a time.
 * @param {number} balls no. of balls in the bucket
 * @returns {number} number of ways the ball can be pulled
*/
function ways(balls) {
    switch(balls) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return ways(balls - 1) + ways(balls - 2);
    }
}

var result = ways(3);
console.log(result);