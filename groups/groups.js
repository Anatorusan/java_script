/*Write a class called Group (since Set is already taken). 
Like Set, it has add, delete, and has methods. Its constructor creates an empty group,
add adds a value to the group (but only if it isn’t already a member),
delete removes its argument from the group (if it was a member),
and has returns a Boolean value indicating whether its argument is a member of the group.*/

class Group {
    constructor() {
        this.group = []; 
    }

    add(value) {
        if (this.group.includes(value)) {
            return;
        }   else {
            this.group.push(value);
        }
    }

    has(value) {
        return this.group.includes(value);
    }

    delete(value) {
        if (!this.group.includes(value)) {
            return;
        }   else {
            let index = this.group.indexOf(value);
            this.group.splice(index, 1);
        }
    }

    static from(collection) {
        let group = new Group;
        for (let value of collection) {
            group.add(value);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));