/* 

MOTIVATION

One of the worst incomprehensibilities in code is tracking 
how data gets modified. The nastiest coupling that can exist 
between code fragments is when multiple fragments are reading 
and writing a block of data, so it gets very hard to follow 
what the flow of modifications means for the flow of the code. 
I therefore find it very valuable to ensure any updates of 
data are clearly signaled, so I can easily see what function 
is doing what. A good way to provide this signaling is to have 
functions update variables by returning a value that the caller 
assigns to the underlying variable.

I have some code that calculates various values for a list 
of GPS trackpoints.

let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 /  totalDistance ;

For this refactoring, I'm just going to look at how it 
calculates the ascent.

function calculateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i-1].elevation;
    totalAscent += (verticalChange > 0) ? verticalChange : 0;
  }
}

*/

const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();
const pace = totalTime / 60 /  totalDistance ;

function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i-1].elevation;
        result += (verticalChange > 0) ? verticalChange : 0;
    }
    return result;
}




























  

  











