
interface Tick{
  name: string,
  count:number
}
export class JobMonitor{
  private _jib: string = 'my job'
  private _tick: Tick

  constructor(props: { tick: Tick }) {
    this._tick = props.tick;
  }
}

export class JobQueueRuning{
  private _currentMonitor: JobMonitor = null;


  constructor(props: { currentMonitor: JobMonitor }) {
    this._currentMonitor
  }
}