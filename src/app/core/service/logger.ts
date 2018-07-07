import {Injectable} from "@angular/core";
/**
 * Created by tiepnm on 7/5/2018.
 */

@Injectable()
export class Logger {
  constructor() { }

  log(message: string) {


    console.log(message);
  }
}
@Injectable()
export class EvenBetterLogger extends Logger {
  constructor() { super(); }

  log(message: string) {

    console.log("EvenBetterLogger");
    super.log(`Message to  ${message}`);
  }
}


