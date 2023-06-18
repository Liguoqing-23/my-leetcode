/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    /**
     * @Desc 1. 新开一个链表
     * @TC O(n)
     * @SC O(n)
     * @Sub 2023/6/18
     * @Cas 1568/1568 cases passed (92 ms)
     * @Run Your runtime beats 82.98 % of typescript submissions
     * @Mem Your memory usage beats 83.23 % of typescript submissions (46.7 MB)
     */

    // const result = new ListNode();
    // let prev = result,
    //     p: ListNode = result;

    // while (l1 || l2) {
    //     const sum = (l1?.val || 0) + (l2?.val || 0) + p.val;
    //     p.val = sum % 10;
    //     p.next = new ListNode(Math.floor(sum / 10));
    //     l1 = l1?.next || null;
    //     l2 = l2?.next || null;
    //     prev = p;
    //     p = p.next;

    //     // 如果 l1 或 l2 没了，就把剩下的接上
    //     // 如果还需要进位，就循环判断，直到不需要为止，退出循环
    //     if (!l1 || !l2) {
    //         while (p.val >= 10) {
    //             p.val -= 10;
    //             if (p.next) {
    //                 p.next.val += 1;
    //             } else {
    //                 p.next = new ListNode(1);
    //             }
    //             prev = p;
    //             p = p.next;
    //         }
    //     }
    // }

    // // 如果最后一位是0，删除
    // if (p.val === 0) {
    //     prev.next = null;
    // }

    // return result;

    /**
     * @Desc 2. 原地修改
     * @TC O(n)
     * @SC O(1)
     * @Sub 2023/6/18
     * @Cas 1568/1568 cases passed (88 ms)
     * @Run Your runtime beats 95.96 % of typescript submissions
     * @Mem Your memory usage beats 83.86 % of typescript submissions (46.7 MB)
     */

    let p = l1;

    while (p) {
        if (!l2) break;
        p.val += l2.val;

        if (!l2.next) break;
        l2 = l2.next;

        if (!p.next) {
            p.next = l2;
            break;
        }

        p = p.next;
    }

    p = l1;
    while (p) {
        if (p.val >= 10) {
            p.val -= 10;
            if (p.next) {
                p.next.val += 1;
            } else {
                p.next = new ListNode(1);
            }
        }
        p = p.next;
    }
    return l1;
}
// @lc code=end
