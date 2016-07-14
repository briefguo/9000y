/* @flow */

// const LOCAL = 'http://localhost/API/Public/';
const REMOTE = 'http://139.196.210.223:81/';

export const query = function (serviceString: string, params: any, callback: any): void {

  let reqURL, myFormData, XHR;

  reqURL = REMOTE + '?service=' + serviceString;

  XHR = new XMLHttpRequest();
  XHR.open('POST', reqURL, true);
  XHR.onreadystatechange = function () {
    if (XHR.readyState === 4) {
      try {
        callback(JSON.parse(XHR.responseText));
      } catch (e) {
        console.log(XHR.responseText, e);
      } finally {
        console.log('XHR aviliable');
      }
    }
  };

  myFormData = new FormData();
  for (var i in params) {
    myFormData.append(i, params[i]);
  }

  XHR.send(myFormData);
};
