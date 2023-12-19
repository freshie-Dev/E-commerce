
import { createContext, useState, useContext } from "react";
import cartContextProvider from "./CartContext";
import axios from "axios";


const UserContext = createContext({});

const UserProvider = ({ children }) => {
    // const url = "https://web-production-8eab.up.railway.app"
    const url = "http://localhost:3000"
    const { clearCart } = cartContextProvider();
    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        type: "",
        phone: "",
        country: "+92",
    });
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userOrders, setUserOrders] = useState();
    const [userInfo, setUserInfo] = useState({});
    const [check, setCheck] = useState(true);
    const [errorInfo, setErrorInfo] = useState({})

    const [editableInfo, setEditableInfo] = useState({
        name: "",
        password: "",
    })

    const [toggle, setToggle] = useState(false); // for navbar toggle

    const clearCredentials = () => {
        setIsUserLoggedIn(false);
        localStorage.clear();
        setUserInfo({})
    }

    //! Login user - Login.jsx
    const loginUser = async (user)=> {
        const loginCredentials = {
            username: user.username,
            password: user.password
        }
        const response = await axios.post(`${url}/register/login`, loginCredentials);
        const data = response.data;

        console.log(data);

        localStorage.setItem('token', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.foundUser));
        setIsUserLoggedIn(true)
        setUserInfo(data.foundUser)

    }

    //! Signup user - Login.jsx
    const signupUser = async(user, countryCode)=> {
        const signupCredentials = {
            username: user.username,
            password: user.password,
            type: user.type,
            phone: countryCode + user.phone,
        }
        const response = await axios.post(`${url}/register`, signupCredentials)
        const data = response.data;

        localStorage.setItem('token', data.token);
        localStorage.setItem('userInfo', JSON.stringify(data.user));
        setIsUserLoggedIn(true);
        setUserInfo(data.foundUser)
    }
    //! Buy items - Cart.jsx
    const buyItems = async () => {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        const config = {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }
        const order = cartData.map((product) => {
            return {
                productId: product._id,
                quantity: product.quantity,
                color: product.color,
                imageUrl: product.image,
                name: product.name,
                price: product.price,
                brand: product.brand,
            }
        });
        console.log(order);
        const response = await axios.post(`${url}/register/addtocart`, order, config)
        const data = await response.data;

        setUserOrders(data.orders)
        console.log("from buy items", userOrders)
        clearCart();
    }

    //! Fetch User Information - Orders.jsx
    const fetchInfo = async () => {
        const config = {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }
        const response = await axios.get(`${url}/register/userinfo`, config)
        const data = await response.data;
        setInfo(data)

        localStorage.setItem('orders', data.orders)
        console.log(data)
    }
    function setInfo(data) {
        setUserInfo(data)
    }

    //! Sumbit rating values
    const submitReview = async (stars, reviews, productId) => {
        // console.log(stars, reviews, productId)
        const review = {
            stars,
            reviews,
            productId
        }
        const config = {
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        }
        const response = await axios.post(`${url}/register/review`, review, config);
        const data = await response.data;
        console.log("review is: ", data);
    }

    //! Fetch all revies of a product
    const fetchReviews = async (productId) => {
        const id = {
            productId
        }
        const response = await axios.get(`${url}/products/fetchreviews`, id)
        const data = await response.data;
        // console.log("these are all reviews",data)
        console.log("this is the id of the reviewed item", id)
    }

    //! Fetch user type - Login.jsx

    return (
        <UserContext.Provider value={{
            buyItems,
            fetchInfo,
            userOrders,
            userInfo,
            editableInfo,
            setEditableInfo,
            submitReview,
            fetchReviews,
            check, setCheck,
            errorInfo, setErrorInfo,
            user, setUser,
            loginUser, signupUser,
            isUserLoggedIn, setIsUserLoggedIn,
            clearCredentials,
            toggle, setToggle
        }}>
            {children}
        </UserContext.Provider>
    )
}

const UserContextProvider = () => {
    return (useContext(UserContext))
};

export { UserProvider };
export default UserContextProvider;