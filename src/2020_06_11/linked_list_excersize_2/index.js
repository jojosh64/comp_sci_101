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

export const get_intersection_node = (headA, headB) => {
    let countA = 0;
    let countB = 0;

    for (let pointerA = headA; pointerA != null; pointerA = pointerA.next) {
        countA++;
    }
    for (let pointerB = headB; pointerB != null; pointerB = pointerB.next) {
        countB++
    }
    

    let a = headA;
    let b = headB;

    while (a != null) {
        if(countA > countB) {
            a = a.next;
            countA--;
            continue;
        }
        if(countB > countA) {
            b = b.next;
            countB--;
            continue;
        }
        
        
        if(a === b) {
            return a.val;
        } else {
            a = a.next;
            b = b.next;
        }
    }
    return null;
    }