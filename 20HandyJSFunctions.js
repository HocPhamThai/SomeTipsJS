// Regular function
function sumReg(a, b) {
  return a + b
}

// Function expression
const sumExpr = function (a, b) {
  return a + b
}

// Arrow function
const sumAr1 = (a, b) => {
  return a + b
}
const sumAr2 = (a, b) => a + b

// Generator function
function* indexGenerator() {
  let index = 0
  while (true) {
    yield index++
  }
}
const g = indexGenerator()
console.log(g.next().value) // 0
console.log(g.next().value) // 1

// Create array of numbers from 1 to n
const range = (n) => Array.from({ length: n }, (_, i) => i + 1)
console.log(range(10)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Create array of numbers from 1 to n with a step
const rangeWithStep = (n, step) => Array.from({ length: n }, (_, i) => i * step)
console.log(rangeWithStep(5, 1)) // [0, 1, 2, 3, 4]
console.log(rangeWithStep(5, 2)) // [0, 2, 4, 6, 8]
// -----Does not suport steps
const range2 = (n) => [...Array(n).keys()]
console.log('🚀 ~ range2(5):', range2(5))

// Create array and fill it with a value
const fillArray = (n, value) => Array(n).fill(value)
console.log(fillArray(5, 0)) // [0, 0, 0, 0, 0]
// In case of Object
const fillObj = (n, value) => {
  return Array(n)
    .fill(value)
    .map((v) => ({ ...v }))
}
console.log(fillObj(3, {})) // [{}, {}, {}]

// Shuffle array
const shuffleArra = (arr) => arr.sort(() => Math.random() - 0.5)
console.log(shuffleArra([1, 2, 3, 4, 5])) // [3, 1, 5, 2, 4]

// Remove duplicated from array
const removeDuplicates = (arr) => [...new Set(arr)]
console.log(removeDuplicates([1, 2, 3, 3, 4, 5, 5])) // [1, 2, 3, 4, 5]

// Generate random number
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
console.log('🚀 ~ random:', random(1, 10))

// Find Larges number
const findLarget = (arr) => Math.max(...arr)
console.log(findLarget([1, 2, 3, 4, 5])) // 5

// Pick an random element from an array
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]
pick([1, 2, 3, 4, 5]) // 3

// Conver array to object
const converArraytoObj = (arr) => ({ ...arr })
console.log('🚀 ~ converArraytoObj:', converArraytoObj([1, 2, 3]))

// Find intersection of two arrays
const intersection = (a, b) => {
  const set = new Set(a)
  return b.filter((x) => set.has(x))
}
console.log(intersection([1, 2, 3], [2, 3, 4])) // [2, 3]

// Remove falsy values from an array
const removeFalsy = (arr) => arr.filter(Boolean)

// Reverse a string
const reverseString = (str) => str.split('').reverse().join('')
console.log(reverseString('hello')) // 'olleh'

// is String palindrome
const isPalindrome = (str) => str === str.split('').reverse().join('')
console.log(isPalindrome('ollo')) // false

// Check object is empty
const objectIsEmpty = (obj) => Object.keys(obj).length === 0
console.log(objectIsEmpty({ 1: '1' })) // true

// Find the numbers of day in a month
const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
console.log(getDaysInMonth(new Date(2021, 0))) // 28

// Generate a random color
const myRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
console.log(myRandomColor())
const randomColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
console.log(randomColor())
