const triangle = function(number) {
	console.log('call', number);
	if (number == 1) {
		return 1;
	}
	const result = triangle(number - 1) + number;
	console.log('return', result);
	return result;
};

// const result = triangle(5)
// console.log(result)

let mySmallMaze = [ [ ' ', ' ', ' ' ], [ ' ', '*', ' ' ], [ ' ', ' ', 'e' ] ];

let maze = [
	[ ' ', ' ', ' ', '*', ' ', ' ', ' ' ],
	[ '*', '*', ' ', '*', ' ', '*', ' ' ],
	[ ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
	[ ' ', '*', '*', '*', '*', '*', ' ' ],
	[ ' ', ' ', ' ', ' ', ' ', ' ', 'e' ]
];

const solve = function(myMaze, row = 0, column = 0) {
	if (row >= myMaze.length || column >= myMaze.length) {
		return;
	}
	if (myMaze[row][column] == '*') {
		return;
	}
	console.log('call', row, column);
	solve(myMaze, row, column + 1);
	solve(myMaze, row + 1, column);
	console.log(row, column);
};

solve(mySmallMaze);

const Memory = require('./memory');
const memory = new Memory();
class Array {
	constructor() {
		this.length = 0;
		this._capacity = 0;
		this.ptr = memory.allocate(this.length);
	}
	push(value) {
		if (this.length >= this._capacity) {
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}
		console.log('Push:' + (this.ptr + this.length), value);
		memory.set(this.ptr + this.length, value);
		console.log(memory.get(this.ptr + this.length));
		this.length++;
	}
	_resize(size) {
		const oldPtr = this.ptr;
		this.ptr = memory.allocate(size);
		if (this.ptr === null) {
			throw new Error('Out of memory');
		}
		memory.copy(this.ptr, oldPtr, this.length);
		memory.free(oldPtr);
		this._capacity = size;
		console.log('resize', this.ptr);
	}
	insert(index, value) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}
		if (this.length >= this._capacity) {
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}
		memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
		memory.set(this.ptr + index, value);
		this.length++;
	}
	remove(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}
		memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
		this.length--;
	}
	pop() {
		if (this.length == 0) {
			throw new Error('Index error');
		}
		const value = memory.get(this.ptr + this.length - 1);
		this.length--;
		return value;
	}
}

const Memory = require('./memory');
const memory = new Memory();
class Array {
	constructor() {
		this.length = 0;
		this._capacity = 0;
		this.ptr = memory.allocate(this.length);
	}
	push(value) {
		if (this.length >= this._capacity) {
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}
		console.log('Push:' + (this.ptr + this.length), value);
		memory.set(this.ptr + this.length, value);
		console.log(memory.get(this.ptr + this.length));
		this.length++;
	}
	_resize(size) {
		const oldPtr = this.ptr;
		this.ptr = memory.allocate(size);
		if (this.ptr === null) {
			throw new Error('Out of memory');
		}
		memory.copy(this.ptr, oldPtr, this.length);
		memory.free(oldPtr);
		this._capacity = size;
		console.log('resize', this.ptr);
	}
	insert(index, value) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}
		if (this.length >= this._capacity) {
			this._resize((this.length + 1) * Array.SIZE_RATIO);
		}
		memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
		memory.set(this.ptr + index, value);
		this.length++;
	}
	remove(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Index error');
		}
		memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
		this.length--;
	}
	pop() {
		if (this.length == 0) {
			throw new Error('Index error');
		}
		const value = memory.get(this.ptr + this.length - 1);
		this.length--;
		return value;
	}
}
Array.SIZE_RATIO = 3;
function main() {
	Array.SIZE_RATIO = 3;
	// Create an instance of the Array class let arr = new Array();
	// Add an item to the array arr.push(3); arr.push(5); arr.push(15); arr.push(19); arr.push(45); arr.push(10); arr.pop(); arr.pop(); arr.pop();
	console.log(memory.get(0));
	arr.pop();
	arr.pop();
	arr.pop();
	console.log(arr.length);
	arr.push('tauhida');
	console.log(arr.length);
	console.log(arr.ptr);
	console.log(memory.get(3));
	console.log(arr.pop());
}
main();
Array.SIZE_RATIO = 3;
function main() {
	Array.SIZE_RATIO = 3;
	// Create an instance of the Array class let arr = new Array();
	// Add an item to the array arr.push(3); arr.push(5); arr.push(15); arr.push(19); arr.push(45); arr.push(10); arr.pop(); arr.pop(); arr.pop();
	console.log(memory.get(0));
	arr.pop();
	arr.pop();
	arr.pop();
	console.log(arr.length);
	arr.push('tauhida');
	console.log(arr.length);
	console.log(arr.ptr);
	console.log(memory.get(3));
	console.log(arr.pop());
}
main();

class BinarySearchTree {
	constructor(key = null, value = null, parent = null) {
		this.key = key;
		this.value = value;
		this.parent = parent;
		this.left = null;
		this.right = null;
	}

	insert(key, value) {
		if (this.key == null) {
			this.key = key;
			this.value = value;
		} else if (key < this.key) {
			if (this.left == null) {
				this.left = new BinarySearchTree(key, value, this);
			} else {
				this.left.insert(key, value);
			}
		} else {
			if (this.right == null) {
				this.right = new BinarySearchTree(key, value, this);
			} else {
				this.right.insert(key, value);
			}
		}
	}

	find(key) {
		if (this.key == key) {
			return this.value;
		} else if (key < this.key && this.left) {
			return this.left.find(key);
		} else if (key > this.key && this.right) {
			return this.right.find(key);
		} else {
			throw new Error('Key Error');
		}
	}
}

const bin = new BinarySearchTree();

bin.insert(1);
bin.insert(3);
bin.insert(4);
bin.insert(8);
bin.insert(1);
bin.insert(2);
bin.insert(10);
bin.insert(11);
bin.insert(13);

console.log(bin);

// class _Node {
//     constructor(value, next) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor(){
//      this.head = null;
//     }

//     insertionFirst(item){
//         console.log(item);
//        this.head = new _Node(item,this.head)
//     }

// }

// const node = new LinkedList();

const tree = (t) => {
	let counter = 0;
	let left = 0;
	let right = 0;

	localtree = (localt) => {
		counter++;

		if (localt.left === null && localt.right === null) return 0;

		if (localt.left !== null) {
			left = localtree(localt.left);
		}
		if (localt.right !== null) {
			right = localtree(localt.right);
		}
		console.log('max', right);
		return Math.max(right, left) + 1;
	};

	return localtree(t);
};

console.log('height of tree', tree(bin));
/*1. Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, [MIDDLE] 16, 49, 39, 27, 43, 34, 46, 40 After 3 recursive calls to mergesort, the lists will be: [21, 1, 26, 45] [29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40] After 16 recursive calls to mergesort, the list will be 16 discrete elements, since the list is 16 elements in length (i = 0 through 15). The first two lists to be merged will be [21] and [1]. On the 7th merge you should be merging [43] and [34]. 2.
Could be either 14 or 17. In either case, after the first pass, everything to the left of either pivot is less than that pivot, and everything to the right of either pivot is greater than that pivot.
Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting list after the second partitioning according to the quicksort algorithm: When last item on list is pivot: First partition [10, 3, 9, 12, 15, 19, 14, 17, 16, 13] Second partition [10, 3, 9, 12, 13, 15, 19, 14, 17, 16] When first item on list is pivot: First partition [13, 10, 3, 9, 12, 14, 15, 16, 19, 17] Second partition [3, 9, 12, 10, 13, 14, 15, 16, 19, 17]
qSort below
mSort below
*/
function qSort(array, start = 0, end = array.length) {
	if (start >= end) {
		return array;
	}
	const middle = partition(array, start, end);
	array = qSort(array, start, middle);
	array = qSort(array, middle + 1, end);
	console.log(array);
	return array;
}
function mSort(array) {
	if (array.length <= 1) {
		return array;
	}
	const middle = Math.floor(array.length / 2);
	let left = array.slice(0, middle);
	let right = array.slice(middle, array.length);
	left = mSort(left);
	right = mSort(right);
	console.log(merge(left, right, array));
	return merge(left, right, array);
}
function merge(left, right, array) {
	let leftIndex = 0;
	let rightIndex = 0;
	let outputIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			array[outputIndex++] = left[leftIndex++];
		} else {
			array[outputIndex++] = right[rightIndex++];
		}
	}
	for (let i = leftIndex; i < left.length; i++) {
		array[outputIndex++] = left[i];
	}
	for (let i = rightIndex; i < right.length; i++) {
		array[outputIndex++] = right[i];
	}
	return array;
}
function partition(array, start, end) {
	const pivot = array[end - 1];
	let j = start;
	for (let i = start; i < end - 1; i++) {
		if (array[i] <= pivot) {
			swap(array, i, j);
			j++;
		}
	}
	swap(array, end - 1, j);
	return j;
}
function swap(array, i, j) {
	const tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}
let array = [
	89,
	30,
	25,
	32,
	72,
	70,
	51,
	42,
	25,
	24,
	53,
	55,
	78,
	50,
	13,
	40,
	48,
	32,
	26,
	2,
	14,
	33,
	45,
	72,
	56,
	44,
	21,
	88,
	27,
	68,
	15,
	62,
	93,
	98,
	73,
	28,
	16,
	46,
	87,
	28,
	65,
	38,
	67,
	16,
	85,
	63,
	23,
	69,
	64,
	91,
	9,
	70,
	81,
	27,
	97,
	82,
	6,
	88,
	3,
	7,
	46,
	13,
	11,
	64,
	76,
	31,
	26,
	38,
	28,
	13,
	17,
	69,
	90,
	1,
	6,
	7,
	64,
	43,
	9,
	73,
	80,
	98,
	46,
	27,
	22,
	87,
	49,
	83,
	6,
	39,
	42,
	51,
	54,
	84,
	34,
	53,
	78,
	40,
	14,
	5
];
mSort(array);
