/**
 * Programming With JavaScript - QAP2
 *
 *
 * Please update the following with your information:
 *
 *      Name: <Anhelina Romanchuk>
 *      Date: <June 9,2024 - June 11,2024>
 */

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 * ('_'), and makes it lowercase.
 *
 * We want to be able to convert a string to Lower Snake Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are lower cased.
 *
 * The snake() function should work like this:
 *
 * snake('abc') --> returns 'abc'
 * snake(' ABC ') --> returns 'abc'
 * snake('ABC') --> returns 'abc'
 * snake('A BC') --> returns 'a_bc'
 * snake(' A bC  ') --> returns 'a_bc'
 * snake('A   BC') --> returns 'a_bc'
 * snake('A.BC') --> returns 'a_bc'
 * snake(' A..  B   C ') --> returns 'a_b_c'
 *
 ******************************************************************************/

function snake(value) {
  let space = /[\s.]+/g;
  let spaceB = /^\s+/;
  let spaceE = /\s+$/;
  return value.replace(spaceB, "").replace(spaceE, "").replace(space, "_").toLowerCase(); 
}
console.log(snake('abc'));
console.log(snake(' ABC '));
console.log(snake('ABC'));
console.log(snake('A BC'));
console.log(snake(' A bC '));
console.log(snake('A   BC'));
console.log(snake('A.BC'));
console.log(snake(' A..  B   C '));

/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to video:
 *
 * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image? or a video?), we have to use special markup. The <video>
 * tag is how we specify that a URL is to be interpreted as a video, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Here is how we might use HTML to markup this video:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
 *
 * Our <video> has two attributes:
 *
 * - src: the URL to a video file
 * - width: the width to use (in pixels) when showing the video
 *
 * Write the createVideo() function to accept a URL and width, and return the
 * properly formatted video element.  For example:
 *
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 *
 * should return the following string of HTML:
 *
 * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
 *
 * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
 *
 * In this case, the <video> element should include the user controls.  Therefore,
 * your createVideo() function should also accept a third argument, controls:
 *
 * // No controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 * // With controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
 * - The width attribute should only be added if a valid integer value (number or string) is included.  Otherwise ignore it.
 *
 * ******************************************************************************/

function createVideo(src, width, controls) {
  src = src.trim();
  if(parseInt(width) === width){
    trueWidth = width;
  } else {
    return "Invalid width number. Please enter the width number."
  }
  let video = `<video src="${src}" width="${trueWidth}"`;

  if(controls === true){
    video += ` controls></video>`;
  } else {
    video += `></video>`;
  }
  console.log(video);
}
createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500);
createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true);

/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-09-29
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a JavaScript Date object, set to the correct day.
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the `throw`
 * statement to throw an Error object when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 ******************************************************************************/

function parseDateString(dateStr) {
  if (typeof dateStr !== 'string') {
    throw new Error('Invalid date string!');
  }

  let dateRegex = /^(\d{4})\-(\d{2})\-(\d{2})$/;
  let match = dateStr.match(dateRegex);
  if(!match){
    throw new Error('Date string must be in the format YYYY-MM-DD!');
  }

  let year = parseInt(match[1]);
  let month = parseInt(match[2]);
  let day = parseInt(match[3]);
if (month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error('Date contains invalid numbers!');
  }

  let date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1);
  date.setDate(day);

  
  return date;
}

try {
  console.log(parseDateString('2021-01-01'));
  console.log(parseDateString('2021-09-29'));
  console.log(parseDateString('01-01-01'));  
  console.log(parseDateString('2021-1-01'));  
  console.log(parseDateString('2021-01-1'));  
  console.log(parseDateString(null));         
  console.log(parseDateString("this is totally wrong")); 
} catch (error) {
  console.error(error.message);
}

/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above. Make sure your
 * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-01-29')) should return '2021-01-29'
 *
 * If an invalid Date is passed, throw an Error object with an appropriate error message.
 * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 ******************************************************************************/
function toDateString(dateStr) {
  let date = parseDateString(dateStr);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  console.log(day)

  if(month<10){
    month = "0" + month;
  } else {
    month = month;
  }
  if(day<10){
    day = "0" + day;
  } else {
    day = day;
  }

  return `${year}-${month}-${day}`;
  
}
console.log(toDateString('2021-09-29')); 

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * A example, let's suppose the Keyin College St.John's campus is located at:
 *
 * Longitude: -77.4369 (negative number means West)
 * Latitude: 42.9755 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "42.9755,-77.4369" NOTE: no space
 * 4. "[-77.4369, 42.9755]" NOTE: the space, as well as lat/lng values are reversed
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the form: "(lat, lng)"
 *
 ******************************************************************************/

function normalizeCoord(coordinateStr) {
  let coordRegex = /-?\d+\.\d+/g;
  const coordinates = coordinateStr.match(coordRegex);

  if (coordinates.length === 2) {
    let latitude, longitude;
    if (coordinateStr.startsWith("[")) {
      latitude = parseFloat(coordinates[1]);
      longitude = parseFloat(coordinates[0]);
    } else {
      latitude = parseFloat(coordinates[0]);
      longitude = parseFloat(coordinates[1]);
    }
      
    if (latitude >= -90 || latitude <= 90 || longitude >= -180 || longitude <= 180) {
      return `(${latitude}, ${longitude})`;
    } else {
      throw new Error("Invalid coordinates: Latitude must be between -90 and 90, Longitude must be between -180 and 180.");
    }
  } else {
    throw new Error("Invalid coordinate format.");
  }
}

// Test cases
try{
  console.log(normalizeCoord("42.9755,-77.4369")); 
  console.log(normalizeCoord("[-77.4369, 42.9755]")); 
} catch(error) {
  console.error(error.message);
}



/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates, parses them,
 * filters out any invalid coords, and creates a list.
 *
 * For example: given the following coords, "42.9755,-77.4369" and "[-62.1234, 42.9755]",
 * a new list would be created of the following form "((42.9755, -77.4369), (42.9755, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a comma and space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000") should return
 * "((42.9755, -77.4369), (42.9755, -62.1234))" and skip the invalid coordinate.
 *

 ******************************************************************************/

function formatCoords(...coordinateStr) {
  let formattedCoords = []; // Store values

  for(let coord of coordinateStr){
    try{
      let coordinate = normalizeCoord(coord);
      formattedCoords.push(coordinate);
    } catch(error){
      console.error();
    } 
  }

  console.log(`(${formattedCoords.join(', ')})`);
}

formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000");
formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]");


/*******************************************************************************
 * Problem 7: determine MIME type from filename extension
 *
 * Web browsers and servers exchange streams of bytes, which must be interpreted
 * by the receiver based on their type.  For example, an HTML web page is
 * plain text, while a JPG image is a binary sequence.
 *
 * The Content-Type header contains information about a resource's MIME type, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
 * The type is general, for example, 'text' or 'video'.  The subtype is more
 * specific, indicating the specific type of text, image, video, etc.  See:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * A number of common types are used in web development:
 *
 * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
 *
 * Your mimeFromFilename() function should support all of the following extensions
 * with and without the leading '.':
 *
 * - .html, .htm --> text/html 
 * - .css --> text/css 
 * - .js --> text/javascript 
 * - .jpg, .jpeg --> image/jpeg 
 * - .gif --> image/gif 
 * - .bmp --> image/bmp 
 * - .ico, .cur --> image/x-icon 
 * - .png --> image/png
 * - .svg --> image/svg+xml
 * - .webp --> image/webp
 * - .mp3 --> audio/mp3 
 * - .wav --> audio/wav 
 * - .mp4 --> video/mp4 
 * - .webm --> video/webm 
 * - .json --> application/json 
 * - .mpeg --> video/mpeg 
 * - .csv --> text/csv 
 * - .ttf --> font/ttf
 * - .woff --> font/woff
 * - .zip --> application/zip 
 * - .avi --> video/x-msvideo
 *
 *
 * NOTE: any other extension should use the `application/octet-stream` MIME type,
 * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
 * also use `application/octet-stream` if the file has no extension.
 *

 ******************************************************************************/

function mimeFromFilename(filename) {
  let type = "";
  let subtype = "";
  let file = filename.split(".");
  let fileEnd = file[1];
  //  Type if statment
  if(fileEnd==="html"||fileEnd==="htm"||fileEnd==="css"||fileEnd==="js"||fileEnd==="csv"||fileEnd==="txt"){
    type = "text";
  } else if(fileEnd==="jpg"||fileEnd==="jpeg"||fileEnd==="gif"||fileEnd==="bpm"||fileEnd==="ico"||fileEnd==="cur"||fileEnd==="png"||fileEnd==="svg"||fileEnd==="webp"){
    type = "image";
  } else if(fileEnd==="mp3"||fileEnd==="wav"){
    type = "audio";
  } else if(fileEnd==="mp4"||fileEnd==="webm"||fileEnd==="mpeg"||fileEnd==="avi"){
    type = "video";
  } else if(fileEnd==="ttf"||fileEnd==="woff"){
    type = "font";
  } else {
      type = "application";
  }
  //  Subtype if statment
  if(fileEnd==="html"||fileEnd==="htm"){
    subtype = "html";
  } else if(fileEnd === "txt"){
    subtype = "plain";
  } else if(fileEnd === "css"){
    subtype = "css";
  } else if(fileEnd === "js"){
    subtype = "javascript";
  } else if(fileEnd==="jpg"||fileEnd==="jpeg"){
    subtype = "jpeg";
  } else if(fileEnd==="gif"){
    subtype = "gif";
  } else if(fileEnd==="bmp"){
    subtype = "bmp";
  } else if(fileEnd==="ico"||fileEnd==="cur"){
    subtype = "x-icon";
  } else if(fileEnd==="png"){
    subtype = "png";
  } else if(fileEnd==="svg"){
    subtype = "svg+xml";
  } else if(fileEnd==="webp"){
    subtype = "webp";
  } else if(fileEnd==="mp3"){
    subtype = "mp3";
  } else if(fileEnd==="wav"){
    subtype = "wav";
  } else if(fileEnd==="mp4"){
    subtype = "mp4";
  } else if(fileEnd==="webm"){
    subtype = "webm";
  } else if(fileEnd==="json"){
    subtype = "json";
  } else if(fileEnd==="mpeg"){
    subtype = "mpeg";
  } else if(fileEnd==="csv"){
    subtype = "csv";
  } else if(fileEnd==="ttf"){
    subtype = "ttf";
  } else if(fileEnd==="woff"){
    subtype = "woff";
  } else if(fileEnd==="zip"){
    subtype = "zip";
  } else if(fileEnd==="avi"){
    subtype = "x-msvideo";
  } else {
    subtype = "octet-stream";
  }

  return `${type}/${subtype}`;


// I was looking on the internet is there an easier way to solve this problem and I found this. 
// I am not sure how this works. Can you please explain it for me. The part that I do not understand is
// what thoes [] bracets do in the code???
  let extensionMap = {
    'txt' : 'text/plain',
    'html': 'text/html',
    'htm': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'bmp': 'image/bmp',
    'ico': 'image/x-icon',
    'cur': 'image/x-icon',
    'png': 'image/png',
    'svg': 'image/svg+xml',
    'webp': 'image/webp',
    'mp3': 'audio/mp3',
    'wav': 'audio/wav',
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'json': 'application/json',
    'mpeg': 'video/mpeg',
    'csv': 'text/csv',
    'ttf': 'font/ttf',
    'woff': 'font/woff',
    'zip': 'application/zip',
    'avi': 'video/x-msvideo'
  };

  let defaultType = 'application/octet-stream';

  let fileParts = filename.split('.');
  let extension = fileParts.length > 1 ? fileParts[fileParts.length - 1] : '';

  return extensionMap[extension.toLowerCase()] || defaultType;
}

console.log(mimeFromFilename('/User/Documents/readme.txt')); 
console.log(mimeFromFilename('index.html'));
console.log(mimeFromFilename('style.css')); 
console.log(mimeFromFilename('script.js')); 
console.log(mimeFromFilename('image.jpg')); 
console.log(mimeFromFilename('data.json')); 
console.log(mimeFromFilename('file.unknown')); 




/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  let baseUrl = 'https://creativecommons.org/licenses/';
  let noPermissionUrl = 'https://choosealicense.com/no-permission/';
  
  // Tryed to use a new way that I found for the previous exercise
  let licenseMap = {  
    'CC-BY': 'Creative Commons Attribution License',
    'CC-BY-NC': 'Creative Commons Attribution-NonCommercial License',
    'CC-BY-SA': 'Creative Commons Attribution-ShareAlike License',
    'CC-BY-ND': 'Creative Commons Attribution-NoDerivs License',
    'CC-BY-NC-SA': 'Creative Commons Attribution-NonCommercial-ShareAlike License',
    'CC-BY-NC-ND': 'Creative Commons Attribution-NonCommercial-NoDerivs License'
  };
  let licenseName = licenseMap[licenseCode] || 'All Rights Reserved';
  let prefixRemove = licenseCode.replace("CC-","").toLowerCase();
  let blank = targetBlank ? `target="_blank"` : "";

  if (licenseName !== 'All Rights Reserved') {
    const url = `${baseUrl}${prefixRemove}/4.0/`;
    return `<a href="${url}"${blank}>${licenseName}</a>`;
  } else {
      return `<a href="${noPermissionUrl}"${blank}>${licenseName}</a>`;
  }
}
console.log(generateLicenseLink('CC-BY-NC'));
console.log(generateLicenseLink('XYZ', true));

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 ******************************************************************************/

function pureBool(value) {
  let regexTrue = /^(yes|y|oui|o|t|true|vrai|v)$/i;
  let regexFalse = /^(no|n|non|f|false|faux)$/i;
  if((typeof value === 'number' && value > 0) || regexTrue.test(value)){
    return true;
  } 
  if((typeof value === 'number' && value <= 0) || regexFalse.test(value)){
    return false;
  } 
  throw new Error("Invalid value!");
}

try{
  console.log(pureBool(23));
  console.log(pureBool(true));
  console.log(pureBool("YeS"));
  console.log(pureBool(-23));
  console.log(pureBool(false));
  console.log(pureBool("o"));
  console.log(pureBool("NON"));
  console.log(pureBool("oui"));
  console.log(pureBool("hello"));
}  catch(error){
  console.error(error.message);
}


/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function every() {
  try{
    for(let textBool of arguments){
      if(pureBool(textBool)){
        return true;
      } else {
        return false;
      }
    }
  }  catch(error){
    return false;
  }
}

function any() {
  try{
    for(let textBool of arguments){
      if(pureBool(textBool)){
        return true;
      } else {
        return false;
      }
    }
  }  catch(error){
    return false;
  }
}

function none() {
  try{
    for(let textBool of arguments){
      if(pureBool(textBool)){
        return false;
      } else {
        return true;
      }
    }
  }  catch(error){
    return false;
  }
}

console.log(every('Y', 'yes', 1));
console.log(any('Y', 'no', 1));
console.log(none('Y', 'invalid', 1));

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know might know, a URL can contain optional name=value pairs. For reference: read query strings on web :)
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 50, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * The following might be the parameters
 *
 *  "query" the query to use. Must be properly URI encoded
 * "order" the sort order to use, must be one of `ascending` or `descending`
 * "count" the number of results per page, must be 1-50
 * "license" the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  let baseUrl = 'https://api.inaturalist.org/v2/observations?query=';

  // First validate the entered information
  if (typeof count !== 'number' || count < 1 || count > 50) {
    throw new Error('Count must be a number between 1 and 50.');
  }
  if (order !== 'ascending' && order !== 'descending') {
      throw new Error('Order must be either "ascending" or "descending".');
  }
  let validLicenses = ['none', 'any', 'cc-by', 'cc-by-nc', 'cc-by-sa', 'cc-by-nd', 'cc-by-nc-sa', 'cc-by-nc-nd'];
  if (!validLicenses.includes(license)) {
      throw new Error('Invalid license.');
  }

  return baseUrl + `'${encodeURIComponent(query)}'&order=${order}&count=${count}&license=${license}`;
}

try {
  console.log(buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by'));
} catch (error) {
  console.error(error.message);
}
