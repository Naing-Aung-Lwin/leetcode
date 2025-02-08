/**
 * https://leetcode.com/problems/add-two-numbers/description/
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const arrayToList = (arr) => {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
};

const reverseList = (l) => {
  let reverse = "";
  while (l) {
    reverse = l.val + reverse;
    l = l.next;
  }
  return reverse;
};

const reverseToList = (str) => {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let i = str.length - 1; i >= 0; i--) {
    current.next = new ListNode(Number(str[i]));
    current = current.next;
  }
  return dummy.next;
};

const addStrings = (num1, num2) => {
  let carry = 0;
  let result = "";
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry) {
    let digit1 = i >= 0 ? Number(num1[i]) : 0;
    let digit2 = j >= 0 ? Number(num2[j]) : 0;
    let sum = digit1 + digit2 + carry;

    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;

    i--;
    j--;
  }

  return result;
};

var addTwoNumbers = function (l1, l2) {
  const num1 = reverseList(l1);
  const num2 = reverseList(l2);
  const sumString = addStrings(num1, num2);
  return reverseToList(sumString);
};

const l1 = arrayToList([
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]);
const l2 = arrayToList([5, 6, 4]);

const result = addTwoNumbers(l1, l2);

// Print the result as a linked list
const printList = (l) => {
  let output = [];
  while (l) {
    output.push(l.val);
    l = l.next;
  }
  console.log(output);
};

printList(result);
