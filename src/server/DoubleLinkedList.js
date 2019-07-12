function node(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}
function list(){
	this.head = new node('head');
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.show = show;
}
function find(item){
	var current = this.head;
	while(current.next != null && current.element != item){
		current = current.next;
	}
	return current;
}
function insert(newElement,item){
	var newNode = new node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
	if(newNode.next != null){
		newNode.next.previous = newNode;
	}
}
function remove(item){
	var temp = this.find(item);
	var current = this.head;
	while(current.next != null && current.next.element != item){
		current = current.next;
	}
	current.next = temp.next;
	temp.next.previous = current;
}
function show(){
	var current = this.head;
	while(current.next != null){
		console.log(current.next.element);
		current = current.next;
	}
}

export default list;