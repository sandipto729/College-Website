import React from 'react'
import { useForm } from "react-hook-form"
import SummaryApi from '../common'
import styles from './DeveloperLogin.module.scss'

const DeveloperLogin = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = async(data) => {
        console.log(data);
        const response = await fetch(SummaryApi.DeveloperLogin.url, {
            method: SummaryApi.DeveloperLogin.method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include',
        })

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log(responseData);
    }
    return (
        <div className={styles.DevLoginContainer}>
            <p>Only for Developer</p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.DevForm}>
                
                <input {...register("email", { required: true })} placeholder='Email'/>
                {errors.email && <span>*This field is required</span>}


                <input {...register("password", { required: true })} placeholder='Password'/>
                {errors.password && <span>*This field is required</span>}


                <input type="submit" />
            </form>

        </div>
    )
}

export default DeveloperLogin
