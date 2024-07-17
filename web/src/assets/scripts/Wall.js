/*
 * @Author: your name
 * @Date: 2024-07-16 22:19:27
 * @LastEditTime: 2024-07-16 22:25:29
 * @LastEditors: momo.local
 * @Description: In User Settings Edit
 * @FilePath: /KOB/web/src/assets/scripts/Walls.js
 */

/*游戏对象 需要import AGO */
import { AcGameObject } from "./AcGameObject";

export class Wall extends AcGameObject {
    /*行列， 地图 */
    constructor(r, c, gamemap) {
        //继承基类，用基类构造函数
        super();
        this.r = r;
        this.c = c;
        this.gamemap = gamemap;
        this.color = "#B37226";

    }

    start(){

    }
    update(){
        this.render();
    }

    render(){
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        ctx.fillRect(this.c * L, this.r * L, L, L);


    }
}