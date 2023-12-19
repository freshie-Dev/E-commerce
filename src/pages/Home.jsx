import React, { useEffect, useState } from 'react'
import HomeSeller from './seller/HomeSeller';
import HomeBuyer from './buyer/HomeBuyer';

const Home = () => {

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
    console.log("i am running normal home")



    useEffect(() => {
        console.log("i am running normal home")
        setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
    }, []);



    return userInfo.type === "seller" ? <HomeSeller /> : <HomeBuyer />
}

export default Home