import React from 'react';
import './ErrorPage.css';
import notFound from'../../Photos/Styles/notFound.png';

const ErrorPage = () => {
    return (
        <>
            <h1 >OOpssss!!!! ... Page Not Found</h1>
            <img src={notFound} alt="" />
        </>

    )
}

export default ErrorPage;