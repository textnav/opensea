import { createWriteStream } from "fs";
import { Transform } from "json2csv";

import { Readable } from "stream";

export class CSVWriter {
  private fileName = "";

  private input = new Readable({ objectMode: true });

  constructor(fileName = "", fields: string[]) {
    this.fileName = `./data/${fileName}-${Date.now()}.csv`;
    const json2Csv = new Transform({ fields }, {});

    this.input._read = () => {};

    const output = createWriteStream(this.fileName, { encoding: "utf8" });
    this.input.pipe(json2Csv).pipe(output);
  }

  write(data: any) {
    console.log("pushing", data);
    this.input.push(JSON.stringify(data));
  }

  end() {
    console.log("ending");
    this.input.push(null);
  }
}
