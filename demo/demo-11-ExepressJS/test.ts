class Coord {
  lat: number;
  long: number;

  compute(newLat: number, newLong: number): number {
    return 0;
  }
  constructor(lat: number, long: number) {
    this.lat = lat;
    this.long = long;
  }
}

const point = new Coord(0, 13413);

class MapLocation extends Coord {
  private _name: string;
  get name() {
    return this._name;
  }
  set name(s: string) {
    this._name = s;
  }
  override compute(newLat: number, newLong: number): number {
    console.log(this._name);
    return 0;
  }
  constructor(lat: number, long: number, name: string) {
    super(lat, long);
  }
}
interface LoggerService {
    log(s: string) => void;
}

class Logger implements LoggerService{
    log(s: string){
        console.log(s);
    }
    abstract error(s: string): void;
    
}

abstract class  Base {
    print (s: string){
        console.log("s", s);
    }
}

class BaseExtendes extends Base{
    error(s: string){
        //--something
    };
    
}