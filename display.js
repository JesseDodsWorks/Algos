
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
            console.log("hello")
            return null
        }
        console.log("hi")
        return this.head.value;
    }
    
    display() {
        let ds = "";
        let cn = this.head;

        do {
            ds += cn.data;
            if(cn.next){
                ds +=", "
                cn=cn.next
            }else{
                break
            }
        }while(true)
        
        console.log(ds)
    }
}

mySLL = new LinkedList

mySLL.addFront(18);
mySLL.addFront(77);
mySLL.addFront(98);
mySLL.display();
