function firstNonrepeatingchar(str:string): string | null {
    const map=new Map<string, number>();

    for (const char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of str) {
        if (map.get(char) === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonrepeatingchar("swiss")); // Output: 'w'
console.log(firstNonrepeatingchar("hello")); // Output: 'h' 