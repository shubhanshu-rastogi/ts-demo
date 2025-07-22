function addnumbers(a: number, b: number): number {
    return a + b;
}

console.log("Sum of 5 and 7 is: ", addnumbers(5, 7));

function findeven (arr:number[]): number[]{
    return arr.filter(num => num%2===0);
}

console.log(findeven([1,2,3,4,5,6,7,8,9]));

function sunNum(a:number,b:number) :number{
    return a+b;
}

console.log(sunNum(5.6,5.6));