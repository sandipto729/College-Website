import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import SummaryApi from '../common';
import styles from './DeveloperLogin.module.scss';
import { toast } from 'react-toastify';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const DeveloperLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(SummaryApi.DeveloperLogin.url, {
                method: SummaryApi.DeveloperLogin.method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                credentials: 'include',
            });

            const responseData = await response.json();

            if (!response.ok) {
                toast.error(responseData.message || "Login failed");
                return;
            }

            toast.success(responseData.message);
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className={styles.DevLoginContainer}>
            <p>Only for Developer</p>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.DevForm}>
                <input {...register("email", { required: true })} placeholder='Email' />
                {errors.email && <span>*This field is required</span>}

                <div className={styles.password}>
                    <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} placeholder='Password' />
                    {errors.password && <span>*This field is required</span>}
                    {showPassword ? (
                        <VisibilityOffIcon onClick={() => setShowPassword(!showPassword)} />
                    ) : (
                        <VisibilityIcon onClick={() => setShowPassword(!showPassword)} />
                    )}
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};

export default DeveloperLogin;
