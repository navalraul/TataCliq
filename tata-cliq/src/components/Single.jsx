
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './Context/AuthContext';

const Single = () => {

    const [isProductExist, setIsProductExist] = useState(false);
    const [isUserLoggedin, setUserLoggedin] = useState(false);
    const [CurrentUserEmail, setCurrentUserEmail] = useState("");
    const [product, setProduct] = useState();
    const [userData, setUserData] = useState();
    const [singleproduct, setSingleProduct] = useState({});
    const [updatewindow, setUpdateWindow] = useState(false);
    const [productData, setProductData] = useState({ name: '', price: '', image: '', category: 'Other' });


    const { id } = useParams();
  const { state } = useContext(AuthContext);
  const router = useNavigate();

  console.log(product, "product")


  useEffect(() => {
    if (state) {
      setUserData(state.user)
    }
  }, )

  useEffect(() => {
    const productFromDB = JSON.parse(localStorage.getItem("Products"));
    if (productFromDB) {
      setIsProductExist(true)
      setProduct(productFromDB)
      console.log(productFromDB,"here")
    } else {
      setIsProductExist(false)
    }
  },[])

  useEffect(() => {
    if (isProductExist) {
      if (id && product.length) {
        const res = product.find((pro) => pro.id == id)
        console.log(res, "res")
        setSingleProduct(res)
      }
    }
  }, [id, product])

  useEffect(() => {
    var user = JSON.parse(localStorage.getItem("Current-user"));
    // console.log(user, "-user")
    if (user) {
      setUserLoggedin(true);
      setCurrentUserEmail(user.email)
    }
  }, [])

  function updateContainer() {
    setUpdateWindow(true);
  }
  function closewindow() {
    setUpdateWindow(false);
  }

  function addtocart() {
    // alert("hii")
    if (isUserLoggedin) {
      const user = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < user.length; i++) {
        if (user[i].email == CurrentUserEmail) {
          user[i].cart.push(singleproduct);
          localStorage.setItem("Users", JSON.stringify(user));
          break;
        }
      }
      alert("Product Added Successfully!!!")
    }
  }

  function handleChange(event) {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }
  function selectrole(event) {
    setProductData({ ...productData, ["category"]: event.target.value })
  }

  function handleSubmit(e) {
    // toast.success("Product Update")
    e.preventDefault();
    const allPro = JSON.parse(localStorage.getItem('Products'))
    for (var i = 0; i < allPro.length; i++) {
        if (allPro[i].id === id) {
            allPro[i].image = productData.image;
            allPro[i].name = productData.name;
            allPro[i].price = productData.price;
            allPro[i].category = productData.category;
            singleproduct.image = productData.image;
            singleproduct.name = productData.name;
            singleproduct.price = productData.price;
            singleproduct.category = productData.category;

            localStorage.setItem("Products", JSON.stringify(allPro));
            setProductData({name:'',price:'',image:'',category:'Other'})
            // route('/single_product')
            alert("Product Update")
        }
    }
}




    return (
        <div>
            
        </div>
    )
}

export default Single;
