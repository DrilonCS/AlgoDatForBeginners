class StaticArray {

    insertEnd(arr: any, n: any, length: number, capacity: number): void {
        if (length < capacity) {
            arr[length] = n;
        }
    }

    removeEnd(arr: any, length: number) {
        if (length > 0) {
            arr[length - 1] = 0;
        }
    }

    insertMiddle(arr: any, i: number, n: any, length: number) {
        for (let index = length - 1; index > i - 1; index--) {
            arr[index + 1] = arr[index];
        }
        arr[i] = n;
    }

    removeMiddle(arr: any, i: number, length: number, ) { 
        for (let index = i + 1; index < length; index++)
            arr[index - 1] = arr[index];
    }

    printArr = (arr: any) => console.log(arr.length !== 0 ? `[${arr.join(', ')}]` : '[]');
}