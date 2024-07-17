/*
 * @Author: your name
 * @Date: 2024-07-16 21:07:11
 * @LastEditTime: 2024-07-16 22:04:21
 * @LastEditors: momo.local
 * @Description: In User Settings Edit
 * @FilePath: /KOB/web/src/assets/scripts/AcGameObject.js
 */
const AC_GAME_OBJECT = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECT.push(this);
        this.timedelta = 0; //这一帧和上一帧的时间间隔
        this.has_called_start = false;
    }

    //只会在游戏开始前执行一次
    start() {

    }
    //每一帧执行一次，除了第一帧
    update() {

    }
    //删除之前执行
    on_destroy() {

    }

    //删除对象 在AC_GMAE_OBJECTlist中
    destroy() {
        this.on_destroy();
        for (let i in AC_GAME_OBJECT) {
            const obj = AC_GAME_OBJECT[i];
            if (obj == this) {
                AC_GAME_OBJECT.splice(i);
                break;
            }
        }

    }

}
//加入

let last_timestamp;

//每一帧都执行
const step = timestamp => {
    for (let obj of AC_GAME_OBJECT) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    last_timestamp = timestamp;
    requestAnimationFrame(step)
}

//在下一帧渲染之前渲染 每秒60次 执行step函数
requestAnimationFrame(step)
