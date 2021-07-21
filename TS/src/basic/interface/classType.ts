interface Alarm {
  alert():void;
}


interface Light {
  lightOn():void;
  lightOff():void;
}

interface AreaType{
  xWidth: number;
  yHeight: number;
}
class Car implements Alarm, Light {
  alert() {
    console.log('Car alert');
  }
  lightOn() {
    console.log('Car light on');
    return 0
  }
  lightOff() {
    console.log('Car light off');
  }
  computerArea(area:AreaType):number {
    return area.xWidth*area.yHeight
  }
}