class Queue {
	constructor() {
		this.data = [];
	}

	enqueue(value) {
		//this.data.push(value); // Esta função já é suficiente para adicionar itens na fila
		this.data.push(value);
		console.log(`${value} entrou na fila!`);
	}

	dequeue() {
		//this.data.shift(); // Esta função já é suficiente para remover itens na fila
		const value = this.data.shift();
		console.log(`${value} saiu da fila!`);
	}

	size() {
		console.log(this.data.length);
	}
}

let queueNew = new Queue();

queueNew.enqueue('Rato');
queueNew.enqueue('Marrato');
queueNew.enqueue('studies');

queueNew.dequeue();

queueNew.size();