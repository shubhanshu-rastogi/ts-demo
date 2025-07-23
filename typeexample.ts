type TestPass = { status:'pass';duration:number};
type TestFail = { status:'fail';reason:string};

type TestResult = TestPass | TestFail;

function printResult(result: TestResult): void {
    if (result.status === 'pass') {
        console.log(`Test passed in ${result.duration}ms`);
    } else {
        console.error(`Test failed: ${result.reason}`);
    }
}

printResult({ status: 'pass', duration: 120 });
printResult({ status: 'fail', reason: 'Unexpected error' });