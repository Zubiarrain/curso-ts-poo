import axios from "axios";

(async () => {


  function delay (time: number) {
    const promise = new Promise<boolean>((resolve) => { // -> Si no coloco el boolean infiere un unknown
      setTimeout(() => {
        resolve(true);
      }, time)
    })
    return promise
  }

  function getProducts () {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getProductsAsync () {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  const rta = await delay(3000)
  console.log(rta)

  const rta2 = await getProducts()
  console.log(rta2.data[0])

  const rta3 = await getProductsAsync()
  console.log(rta3[0])

})()
