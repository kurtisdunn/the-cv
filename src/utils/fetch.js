import 'whatwg-fetch';

function checkStatus (res) {


  if (res.status >= 200 && res.status < 300) {
    // console.log(res);
    return res;
 }else if(res.status === 500) {
   return res;
  } else {
    var error = new Error(res.statusText);
    error.res = res.json();
    throw error;
  }
}

function parseJson (res) {
  if(res){ return res.json(); }
}

export default function (path, opts = {}) {
  return fetch(path.includes('https') ? path : `api${path}`, opts)
    .then(checkStatus)
    .then(parseJson);
}
