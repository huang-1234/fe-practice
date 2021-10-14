/// <reference path="myModules.d.ts" />
import * as m from "SomeModule";


class Output {
  outputModules() {
    console.log(m);
    return m
  }
}

const out = new Output();
console.log(out.outputModules())