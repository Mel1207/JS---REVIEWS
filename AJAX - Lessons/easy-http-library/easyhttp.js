function easyHttp () {
    this.http = new XMLHttpRequest();
}

// Make an http get request
easyHttp.prototype.get = function(url, callBack) {
    this.http.open('GET', url, true);

    // this.http.onload = function () {
    //     if(this.http.status === 200) { // The output will be cannot read the status of undefined - because this.http.status on this line is inside the function which is now on different scope. we have 2 ways to fix this number 1 is by using arrow function and number 2 is by setting a new variable to place for (this) - which cannot read on the current line.
    //         console.log(this.http.responseText)
    //     }
    // }

    // Fix number 1 - USING ARROW FUNCTIONS
    // this.http.onload = () => {
    //     if(this.http.status === 200) {
    //         console.log(this.http.responseText)
    //     }
    // }

    // Fix number 2 - Setting new variable place for (this)
    let self = this;
    this.http.onload = function () {
        if(self.http.status === 200) {
            callBack(null, self.http.responseText) // as you can see we replace (this) for variable self.
        } else {
            callBack(`Error ${self.http.status} not found`);
        }
    }


    this.http.send();
}
// post an http get request
// put an http get request
// delete an http get request
