/*
 * https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 */
function solution(A, K) {
    console.log("CyclicRotation");
    console.log("A:");
    console.log(A);
    console.log("K: " + K);
    var i,
        result = A;
    for (i = 0; i < K; i++) {
        result = result.slice(-1).concat(result.slice(0, result.length - 1));
    }
    console.log("Result:");
    console.log(result);
    console.log("");
    return result;
}

/*
 * This is a simple test function
 *
 * @param functionToTest  name of the test function
 * @param data            object with two properties:
 *                        - testData - array - function parameters
 *                        - expected - expected value
 */
function test(functionToTest, data) {
    var args,
        expected,
        result,
        results = {
          total: 0,
          bad: 0
        };
    data.forEach(function(element) {
        results.total++;
        args = element.testData;
        expected = element.expected;
        result = functionToTest.apply(this, args);
        if (JSON.stringify(result) !== JSON.stringify(expected)) {
            results.bad++;
            console.log("Expected " + expected + ", but was " + result);
        }
    });
    console.log("Of " + results.total + " tests, " + results.bad + " failed, " +
        (results.total - results.bad) + " passed.");
}

test(solution, [
    { testData: [[3, 8, 9, 7, 6], 3], expected: [9, 7, 6, 3, 8]},
    { testData: [[1], 1], expected: [1]}
]);
