
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //places value at front 
    addFront(value) {
        let new_node = new Node(value);

        if(!this.head) {
            this.head = new_node;
            return this
        }
        new_node.next = this.head;
        this.head = new_node;

        return this
    }
    //removes the forward most element
    removeFront() {
        
        if(this.head) {
            this.head = this.head.next
        }
        return this
    }
    //returns just the "head" value, not the node. if empty > return null
    front() {
        if(!this.head) {
            return null
        }

        return this.head.value;
    }

}

mySLL = new LinkedList

mySLL.addFront(18);
mySLL.addFront(77);
mySLL.addFront(98);
