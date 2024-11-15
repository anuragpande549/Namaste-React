import Sum from "..Sum";

test("sum function should have calculate sum of 2 function",()=>{
  const result = Sum(3,5)

  //Assertion
  expect(result).toBe(8)
  })
  