 class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

 class LinkedArray {
    constructor() {
        this.head = null;
        this.size = 0;
    }

add(data) {
    this.head = new Node(data, this.head);
    this.size++;
}

itemAt(index) {
    let current = this.head
    let i = 0;

    while(i != index) {
        current = current.next;
        i++;
    }
    return current.data; 
}

count() {
return this.size;
}
}
export default LinkedArray;





const ll = new LinkedArray();
ll.add({name: 'JP', address: 'Blah'});
ll.add(200);
ll.add(300);




/*
console.log(ll);
console.log(ll.itemAt(2));
console.log(ll.count());
*/







