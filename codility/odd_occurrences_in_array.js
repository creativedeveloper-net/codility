/*
 * https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
 */
function solution(A) {
    var i,
        counter = 0,
        result;
    console.log("OddOccurrencesInArray");
    A = A.sort();
    console.log(A);
    result = A[0];
    for (i = 0; i < A.length; i++) {
        if (result === A[i]) {
            counter += 1;
        } else {
            console.log(counter % 2);
            if (counter % 2 === 1) {
                break;
            }
            counter = 1;
        }
        result = A[i];
    }
    console.log("Result: " + result);
    console.log("");
    return result;
}

/*
 * This is a simple test function
 *
 * @param functionToTest  name of the test function
 * @param data            test data - array where first element is a test value
 *                        and the second element is expected value
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
        args = element[0];
        expected = element[1];
        args = [args];
        result = functionToTest.apply(this, args);
        if (result !== expected) {
            results.bad++;
            console.log("Expected " + expected + ", but was " + result);
        }
    });
    console.log("Of " + results.total + " tests, " + results.bad + " failed, " +
        (results.total - results.bad) + " passed.");
}

test(solution, [
    [[9, 3, 9, 3, 9, 7, 9], 7],
    [[1], 1],
    [[1, 1, 1, 1, 2, 2, 2], 2],
    [[1, 1, 2, 2, 2, 3, 3], 2]
]);
