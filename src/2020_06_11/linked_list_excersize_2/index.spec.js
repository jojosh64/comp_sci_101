import { get_intersection_node } from "./index";
import { ListNode } from "./index";
import { skip } from "./index";
import linkedArray from "/home/joshbrummund/comp_sci_101/src/2020_06_03/linked_list_exercise_1/index.js";
describe("linkedList setup for testing", () => {

    let example1A = new ListNode(4);
    example1A.next = new ListNode(1);
    example1A.next.next = new ListNode(8);
    example1A.next.next.next = new ListNode(4);
    example1A.next.next.next.next = new ListNode(5)
    
    let example1B = new ListNode(5);
    example1B.next = new ListNode(0);
    example1B.next.next = new ListNode(1);
    example1B.next.next.next = example1A.next.next;
    example1B.next.next.next.next = example1A.next.next.next;
    example1B.next.next.next.next.next = example1A.next.next.next.next;
    

    let example2A = new ListNode(0);
    example2A.next = new ListNode(9);
    example2A.next.next = new ListNode(1);
    example2A.next.next.next = new ListNode(2);
    example2A.next.next.next.next = new ListNode(4);

    let example2B = new ListNode(3);
    example2B.next = example2A.next.next.next;
    example2B.next.next = example2A.next.next.next.next;

     
    let example3A = new ListNode(2);
    example3A.next = new ListNode(6);
    example3A.next.next = new ListNode(4);

    let example3B = new ListNode(1);
    example3B.next = new ListNode(5);

    
    

    test("function should show a merge at the node with value 8", () => {
        expect(get_intersection_node(example1A, example1B)).toBe(8);
    });

    test('function should show a merge at the node with a value 2', () => {
        expect(get_intersection_node(example2A, example2B)).toBe(2)
    });

    test("function should show no merge, returning null", () => {
        expect(get_intersection_node(example3A, example3B)).toBe(null)
    });
});