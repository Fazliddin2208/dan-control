"use client"

import React, { useState } from 'react'
import Style from './login.module.scss'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import Vector from '@/public/login-photo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faSquareCheck, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

export default function Login() {

    const [showPassword, setShowPassword] = useState(false)

    const changePasswordType = () => {
        setShowPassword(!showPassword)
    }

    const [remember, setRemember] = useState(false)

    const handleRemember = () => {
        setRemember(!remember)
    }

    return (
        <div className={Style.wrapper}>
            <div className={Style.wrapper__container}>
                <div className={Style.wrapper__left}>
                    <Image src={Logo} alt='logo' width={400} quality={100} priority='blur' />
                    <h3>Akkountga kirish</h3>

                    <form className={Style.wrapper__form}>
                        <div className={Style.wrapper__form__top}>
                            <div className={Style.wrapper__form__row}>
                                <label>Login</label>
                                <div>
                                    <input type="text" placeholder='Login...' />
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                            <div className={Style.wrapper__form__row}>
                                <label>Parol</label>
                                <div>
                                    <input type={!showPassword ? "password" : "text"} placeholder='Password...' />
                                    {
                                        showPassword ?
                                            <FontAwesomeIcon onClick={changePasswordType} icon={faEye} /> :
                                            <FontAwesomeIcon onClick={changePasswordType} icon={faEyeSlash} />
                                    }
                                </div>
                            </div>
                            <div className={Style.wrapper__form__row__remember}>
                                {remember ?
                                    <FontAwesomeIcon onClick={handleRemember} icon={faSquareCheck} /> :
                                    <FontAwesomeIcon onClick={handleRemember} icon={faSquare} />
                                }
                                <label onClick={handleRemember} htmlFor='remember'>Eslab qolish</label>

                            </div>
                        </div>
                        <div className={Style.wrapper__form__bottom}>
                            <button className='button'>Kirish</button>
                            <Link href={'/'}>Parolni unutdingizmi?</Link>
                        </div>
                    </form>
                </div>
                <div className={Style.wrapper__right}>
                    <Image src={Vector} alt='vector' width={400} quality={100} priority='blur' />
                </div>

            </div>
        </div>
    )
}
