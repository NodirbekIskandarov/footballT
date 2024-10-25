 // Import the axios instance

 import instance from "./base_Url";

 export const getRequest = (url) => {
     return new Promise((resolve, reject) => {
         instance.get(url)  // Use instance instead of axios.get
         .then(response => {
             resolve(response);
         })
         .catch(error => {
             reject(error);
         });
     });
 };
 
 export const postRequest = (url, data) => {
     return new Promise((resolve, reject) => {
         instance.post(url, data)  // Use instance instead of axios.post
         .then((response) => {
             resolve(response);
         })
         .catch((error) => {
             reject(error);
         });
     });
 };