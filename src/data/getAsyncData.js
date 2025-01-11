
import products from './data';

function getAsyncData() {
  console.log("Solicitando datos");
  const promiseData = new Promise((resolve, reject) => {
    const errorFatal = false;

    setTimeout(() => {
      if (errorFatal) reject("Algo salió mal!!!!");
      console.log("Promesa Terminada");
      resolve(products);
    }, 500);
  });

  console.log("Promesa generada.");

  return promiseData;
}

export function getAsyncItemById(itemID) {
  console.log("Solicitando producto id....", itemID);

  const promiseData = new Promise((resolve) => {
    setTimeout(() => {
      const requestedProduct = products.find((item) => item.id === Number(itemID));
      resolve(requestedProduct);
    }, 500);
  });

  console.log("Promesa generada.");

  return promiseData;
}

export function getAsyncItemsByCategory(catID) {
  console.log("Solicitando productos para... ", catID);

  const promiseData = new Promise((resolve) => {
    setTimeout(() => {
      const requestedProduct = products.filter((item) => item.category.toLowerCase() === catID.toLowerCase());
      resolve(requestedProduct);
    }, 500);
  });

  console.log("Promesa generada.");

  return promiseData;
}

export default getAsyncData;
