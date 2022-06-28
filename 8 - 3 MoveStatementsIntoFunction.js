/* 

MOTIVATION

Removing duplication is one of the best rules of thumb 
of healthy code. If I see the same code executed every 
time I call a particular function, I look to combine 
that repeating code into the function itself. That way, 
any future modifications to the repeating code can be done 
in one place and used by all the callers. 

  function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(`<p>title: ${person.photo.title}</p>`);
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
  }
  
  
  function photoDiv(p) {
    return [
      "<div>",
      `<p>title: ${p.title}</p>`,
      emitPhotoData(p),
      "</div>",
    ].join("\n");
  }
  
  function emitPhotoData(aPhoto) {
    const result = [];
    result.push(`<p>location: ${aPhoto.location}</p>`);
    result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
    return result.join("\n");
  }

*/

function renderPerson(outStream, person) {
    const result = [];
    result.push(`<p>${person.name}</p>`);
    result.push(renderPhoto(person.photo));
    result.push(emitPhotoData(person.photo));
    return result.join("\n");
}
  
  
function photoDiv(p) {
    return [
      "<div>",
      emitPhotoData(p),
      "</div>",
    ].join("\n");
}

function emitPhotoData(aPhoto) {
    return [      
        `<p>title: ${aPhoto.title}</p>`,
        `<p>location: ${aPhoto.location}</p>`,
        `<p>date: ${aPhoto.date.toDateString()}</p>`,
    ].join("\n");
}
  











