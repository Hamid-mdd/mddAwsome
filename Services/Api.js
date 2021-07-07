import { delay } from 'redux-saga/effects';


 
function service() {
  const getAllProducts = () => {
    return fetch(
      'https://jsonplaceholder.typicode.com/users',
      
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  };
  const getBestSellingBooks = () => {
    return fetch(
      'https://jsonplaceholder.typicode.com/users',
      
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  };
  const getMutual = () => {
    return fetch(
      'https://jsonplaceholder.typicode.com/users',
      
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  };
  const getFans = () => {
    return fetch(
      'https://jsonplaceholder.typicode.com/users',
      
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  };
  const getFollowing = () => {
    return fetch(
      'https://jsonplaceholder.typicode.com/users',
      
    )
      .then((res) => res.json())
      .then((data) => data)
      .catch((e) => e);
  };



 
  return {
    getAllProducts,
    getBestSellingBooks,
    getMutual,
    getFans,
    getFollowing
  };
}
 
const productsService = service();
 
export default productsService;