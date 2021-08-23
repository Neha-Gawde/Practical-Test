import React, { Component } from 'react';
export class APIServices extends Component  {

    constructor(props){
        super(props);
        this.error=false;
        this.results={};
    }
/* Get headers for the request */
  getHeaders(type) {
    let headers = {};

    headers = {
            Accept: "application/json"
          };
    if (type !== "form-data") {
      let contentType = { "content-type": "application/json" };
      headers = { ...headers, ...contentType };
    }
    return headers;

}
  



  /* GET method call with fetch */
  async get(url) {
    await fetch(url, {
      method: "GET",
      headers: this.getHeaders()
    })
      .then(response => {
        this.status = response.status;
        return response.json();
      })
      .then(jsonResponse => {
        this.results = jsonResponse;
      })
      .catch(e => {
        // console.log(e);
      });
    if (this.status !== 200) {
      this.error = true;
      // this.checkErrors();
    }
    return {
      error: this.error,
      results: this.results,
      status: this.status
    };
  }

   /* POST method call with fetch */
   async post(url, data, type) {
    // var dataToSend = data;
    if (type !== "form-data") {
      data = JSON.stringify(data);
    }
    await fetch(url, {
      method: "POST",
      body: data,
      headers: this.getHeaders(type)
    })
      .then(response => {
        this.status = response.status;
        return response.json();
      })
      .then(jsonResponse => {
        this.results = jsonResponse;
      })
      .catch(e => {
        // console.log(e);
      });
    if (!(this.status === 201 || this.status === 200)) {
      this.error = true;
      //this.checkErrors();
    }
    return {
      error: this.error,
      status: this.status,
      results: this.results
    };
  }
  async put(url, data, type) {
    if (type !== "form-data") {
      data = JSON.stringify(data);
    }
    await fetch(url, {
      method: "PUT",
      body: data,
      headers: this.getHeaders(type)
    })
      .then(response => {
        this.status = response.status;
        return response.json();
      })
      .then(jsonResponse => {
        this.results = jsonResponse;
      })
      .catch(e => {
        // console.log(e);
      });
    if (this.status !== 200) {
      this.error = true;
      // this.checkErrors();
    }
    return {
      error: this.error,
      results: this.results,
      status: this.status
    };
  }
  async patch(url, data, type) {
    if (type !== "form-data") {
      data = JSON.stringify(data);
    }
    await fetch(url, {
      method: "PATCH",
      body: data,
      headers: this.getHeaders(type)
    })
      .then(response => {
        this.status = response.status;
        return response.json();
      })
      .then(jsonResponse => {
        this.results = jsonResponse;
      })
      .catch(e => {
        // console.log(e);
      });
    if (this.status !== 200) {
      this.error = true;
      // this.checkErrors();
    }
    return {
      error: this.error,
      results: this.results,
      status: this.status
    };
  }
    /* DELETE method call with fetch */
    async delete(url) {
      await fetch(url, {
        method: "DELETE",
        headers: this.getHeaders()
      })
        .then(response => {
          this.status = response.status;
          if (this.status !== 204) {
            return response.json();
          }
        })
        .then(jsonResponse => {
          this.results = jsonResponse;
        })
        .catch(e => {
          // console.log(e);
        });
      if (this.status !== 204) {
        this.error = true;
       
      }
      return {
        error: this.error,
        results: this.results,
        status: this.status
      };
    }
    
  

}
