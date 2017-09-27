// import * as x1 from './fileWithoutError';
// import * as x2 from './fileWithError';
import * as _ from "lodash";
import Sprite = Laya.Sprite;

module laya {
	export class GameMain {
		private container: Sprite;
		private socket: any;

		constructor() {
			Laya.init(600, 400);
			this.initDraw()
		}

		private initDraw(): void {
			this.container = new Sprite();
			Laya.stage.addChild(this.container);


			var sp = new Sprite();
			//画圆
			sp.graphics.drawCircle(80, 80, _.random(0, 300), "#ff0000");
			this.container.addChild(sp);
		}
	}
}
new laya.GameMain();

