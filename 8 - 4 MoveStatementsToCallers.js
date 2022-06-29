/* 

MOTIVATION

One trigger for this is when common behavior used in 
several places needs to vary in some of its calls. Now, 
we need to move the varying behavior out of the function 
to its callers. In this case, I'll use Slide Statements 
to get the varying behavior to the beginning or end of the 
function and then Move Statements to Callers. Once the 
varying code is in the caller, I can change it when necessary.

  function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
  }
  
  function listRecentPhotos(outStream, photos) {
    photos
      .filter(p => p.date > recentDateCutoff())
      .forEach(p => {
        outStream.write("<div>\n");
        emitPhotoData(outStream, p);
        outStream.write("</div>\n");
      });
  }
  
  function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
    outStream.write(`<p>location: ${photo.location}</p>\n`);
  }

*/

function renderPerson(outStream, person) {
    outStream.write(`<p>${person.name}</p>\n`);
    renderPhoto(outStream, person.photo);
    emitPhotoData(outStream, person.photo);
    outStream.write(`<p>location: ${person.photo.location}</p>\n`);
}
  
function listRecentPhotos(outStream, photos) {
    photos
      .filter(p => p.date > recentDateCutoff())
      .forEach(p => {
        outStream.write("<div>\n");
        emitPhotoData(outStream, p);
        outStream.write(`<p>location: ${p.location}</p>\n`);
        outStream.write("</div>\n");
      });
}
  
function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title: ${photo.title}</p>\n`);
    outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}


  

  











