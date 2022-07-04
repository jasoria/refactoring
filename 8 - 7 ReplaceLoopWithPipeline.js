/* 

MOTIVATION

Like most programmers, I was taught to use loops to 
iterate over a collection of objects. Increasingly, 
however, language environments provide a better construct: 
the collection pipeline. Collection Pipelines allow me to 
describe my processing as a series of operations, each 
consuming and emitting a collection.

office, country, telephone
Chicago, USA, +1 312 373 1000
Beijing, China, +86 4008 900 505
Bangalore, India, +91 80 4064 9570
Porto Alegre, Brazil, +55 51 3079 3550
Chennai, India, +91 44 660 44766

... (more data follows)

The following function picks out the offices in India and 
returns their cities and telephone numbers:

  function acquireData(input) {
    const lines = input.split("\n");
    let firstLine = true;
    const result = [];
    for (const line of lines) {
      if (firstLine) {
        firstLine = false;
        continue;
      }
      if (line.trim() === "") continue;
      const record = line.split(",");
      if (record[1].trim() === "India") {
        result.push({city: record[0].trim(), phone: record[2].trim()});
      }
    }
    return result;
  }

*/

function acquireData(input) {
    const lines = input.split("\n");
    return lines
        .slice(1)
        .filter(line => line.trim() !== "")
        .map(line => line.split(","))
        .filter(fields => fields[1].trim === "India")
        .map(fields => ({city: fields[0].trim(), phone: fields[2].trim()}))
        ;
}










  

  











