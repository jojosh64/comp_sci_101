/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


 export function ListNode(val) {
     this.val = val;
     this.next = null;
 }

export const skip = (head, howMany) => {
for (let i = 0; i < howMany; i++) {
    head = head.next;
}
return head;
}

const listCount = (head) => {
    let count = 0;
    while (head != null) {
        head = head.next;
        count++;
    }
    return count;
}

export const get_intersection_node = (headA, headB) => {

    let a = headA;
    let b = headB;
    let aLength = listCount(a);
    let bLength = listCount(b);
    
    if(aLength > bLength) {
        a = skip(a, aLength - bLength);
    } else {
        b = skip(b, bLength - aLength);
    }
    console.log(a, b);

    while (a != null) {

        if(a === b) {
            return a.val;
        } else {
            a = a.next;
            b = b.next;
        }
    }
    return null;
    }