"use client"
import { removeerrors } from '@/store/Reducers/movieReducer';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const ErrorDisplay = () => {
    const dispatch = useDispatch();
    const { errors } = useSelector(
        (state) => state.movieReducer
    );

    if (errors) {
        errors.map((error) => {
            toast.error(error);
            dispatch(removeerrors())
        })
    }

    return (
        <>
        </>
    )
}

export default ErrorDisplay