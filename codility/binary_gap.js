/*
 * https://codility.com/programmers/lessons/1-iterations/binary_gap/
 */
function solution(N) {
    var i,
        binary = N.toString(2),
        binaryArray = binary.split(""),
        counter = 0,
        result = 0,
        count = false;
    console.log("BinaryGap");
    console.log("N: " + N);
    console.log("binary: " + binary);
    for (i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] === "1") {
            if (counter > result) {
                result = counter;
            }
            count = true;
            counter = 0;
        } else if (count) {
            counter += 1;
        }
    }
    console.log("Result: " + result);
    console.log("");
    return result;
}

/*
 * tests
 */
var results = {
    total: 0,
    bad: 0
};

function test(functionToTest, args, expected) {
    results.total++;
    var result = functionToTest.apply(this, args);
    if (result !== expected) {
        results.bad++;
        console.log("Expected " + expected + ", but was " + result);
    }
}

function showTestResults() {
    console.log("Of " + results.total + " tests, " + results.bad + " failed, " +
        (results.total - results.bad) + " passed.");
}

test(solution, [9], 2);
test(solution, [529], 4);
test(solution, [20], 1);
test(solution, [15], 0);
test(solution, [1041], 5);
test(solution, [0], 0);
test(solution, [1], 0);
test(solution, [66561], 9);
test(solution, [74901729], 4);
showTestResults();
