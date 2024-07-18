/*
 * @Author: your name
 * @Date: 2024-07-17 19:03:17
 * @LastEditTime: 2024-07-17 20:02:18
 * @LastEditors: momo.local
 * @Description: In User Settings Edit
 * @FilePath: /KOB/web/src/assets/scripts/Cell.js
 */
export class Cell {
    constructor(r, c) {
        this.r = r;
        this.c = c;
        this.x = c + 0.5;
        this.y = r + 0.5;
    }
}
