// Não funciona nesta pasta, mas funciona na pasta raíz "estudos"

class Stack {
	constructor() {
		this.data = [];
		this.top = -1;
	}

	push(value) {
		this.top++;
		this.data[this.top] = value;
		return this.data
	}

	pop() {
		if (this.top < 0) return undefined;
		const poppedTop = this.data[this.top];
		delete this.data[this.top];
		this.top--;
		return poppedTop.value;
	}

	peek() {
		return this.top >= 0 ? this.data[this.top] : undefined;
	}

	size() {
		return this.data.length;
	}
}

let stackNew = new Stack();

stackNew.push("Rato");
stackNew.push("Marrato");
stackNew.push("studies")
//console.log(stackNew.push("studies"))
console.log(stackNew)


stackNew.pop()
console.log(stackNew.peek())
console.log(stackNew.size())