const {sum}= require('../sum');


describe('Calculator',()=>{
   
   test('Given the user input is empty when calculating the sum then it should return zero.',()=>{
    expect(sum()).toBe(0);
   });
     
   test(`Given the user input is one number when calculating the sum then it should return
    the same number. (example "3" should equal 3)`,()=>{
     expect(sum("4")).toBe(4);
    });

   test(`Given the user input is two numbers when calculating the sum then it should return 
    the sum of those numbers. (example "1,2" should equal 3)`,()=>{
       expect(sum('2,3')).toBe(5);
    })

    test(`Given the user input is an unknown amount of numbers when calculating the sum then
     it should return the sum of all the numbers. (example "1,2,3" should equal 6)`,()=>{
      expect(sum('2,3')).toBe(5);
      expect(sum('2,3,6')).toBe(11);
    })

    test(`Given the user input is multiple numbers with new line and comma delimiters when
     calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" 
     should equal 6)`,()=>{
      expect(sum('1\n2,3')).toBe(6);

     })
});