import { useEffect, useState } from "react";




const MensMulti = () => {

    const [ isProductsExist, setIsProductsExist] = useState(false);
    const [ products, setProducts] = useState();

    console.log(products);

    useEffect( () => {
        const productsFromDb = JSON.parse(localStorage.getItem("Products"));

        if (productsFromDb) {
            setIsProductsExist(true);
            setProducts(productsFromDb)
        } else {
            setIsProductsExist(false)
        }
    },[])

    
  return (
   <div>
        {!isProductsExist}
   </div>
  )
}

export default MensMulti;
