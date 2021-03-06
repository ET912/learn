
//  Definition for singly-linked list.
 function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
 }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if (!head) return null
  let pre = head, cur = head.next
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  head.next = null
  return pre
};