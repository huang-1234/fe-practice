import { Particle } from "./lib/particle.js";

export class DemoMove extends Particle {
  constructor(idName, width, height, options) {
    super(idName, width, height, options)
  }
  //2. 初始化粒子
  init() {
    this.particle = [];
    let amount = this.options.amount;
    let { width, height } = this;
    for (let i = 0;i < amount;i++) {
      this.particle.push({
        posX: Math.round(Math.random() * width),
        posY: Math.round(Math.random() * height),
        r: 4,
        color: Math.random() < 0.5 ? '#d63e3e' : '#23409b'
      });
    }
  };
  //4. 定义粒子的运动方式
  moveFunc(ctx, width, height) {
    this.particle.map(item => {
      item.posY = item.posY + 2;
      if (item.posY > height) {
        item.posX = Math.round(Math.random() * width);
        item.posY = Math.round(Math.random() * height);
      };
      this.createParticle(ctx, item.posX, item.posY, item.r, item.color);
    });
  };
  //粒子形状
  createParticle(ctx, x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  };
}


