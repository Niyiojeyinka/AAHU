const {add}= require('../add');


describe('Addition test',()=>{
   
   test('Can add two number',()=>{
    expect(add(7,7)).toBe(14);
   });
     

   test('Exception not expected',()=>{

      expect(add).not.toThrow('Error');
   });
});