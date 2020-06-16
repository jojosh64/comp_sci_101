import LinkedArray from "./index";
import Node from "./index";

describe("example function to create a linked list", () => {
    const createContactList = () => {
        let newList = new LinkedArray();
        return newList;
    };
    
    let testList = createContactList();
    testList.add({name: 'Josh', address: 'Blah'});
    testList.add({name: 'Aaron', address: 'Blah2'});
    testList.add({name: 'JP', address: 'Blah3'});
    

    test('using the itemAt function on the test list', () => {
        expect(testList.itemAt(1)).toStrictEqual({name: 'Aaron', address: 'Blah2'})
    });

    test('using the count function on the test list', () => {
        expect(testList.count()).toBe(3);
    });

    





});




