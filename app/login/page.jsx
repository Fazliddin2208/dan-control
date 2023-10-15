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
import { useRouter } from 'next/navigation'
import Loading from '../components/Loading'
import Snackbar from '../components/Snackbar'

export default function Login() {

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [snackOpen, setSnackOpen] = useState(false)
    const [snackText, setSnackText] = useState('')
    const [snackPriority, setSnackPriority] = useState('')

    const handleSnackOpen = () => {
        setSnackOpen(true)
    }

    const handleSnackClose = () => {
        setSnackOpen(false)
    }

    const [showPassword, setShowPassword] = useState(false)

    const changePasswordType = () => {
        setShowPassword(!showPassword)
    }

    const [remember, setRemember] = useState(false)

    const handleRemember = () => {
        setRemember(!remember)
    }

    const [datas, setDatas] = useState({})

    const handlePickDatas = (e) => {
        setDatas({ ...datas, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(()=>{
            if (datas.login === 'admin' && datas.password === 'parol') {
                handleSnackOpen()
                setSnackText("Muvaffaqiyatli ro'yhatdan o'tdingiz!")
                setSnackPriority("success")
                setTimeout(()=>{
                    router.push('/')
                }, 5000)
            } else {
                handleSnackOpen()
                setSnackText("Xatolik yuz berdi!")
                setSnackPriority("danger")
            }
            setLoading(false)
        }, 2000)
    }

    return (
        <div className={Style.wrapper}>
            <Snackbar open={snackOpen} close={handleSnackClose} text={snackText} priority={snackPriority} />
            <div className={Style.wrapper__container}>
                <div className={Style.wrapper__left}>
                    <Image src={Logo} alt='logo' width={400} quality={100} priority='blur' />
                    <h3>Akkountga kirish</h3>

                    <form onSubmit={handleSubmit} className={Style.wrapper__form}>
                        <div className={Style.wrapper__form__top}>
                            <div className={Style.wrapper__form__row}>
                                <label>Login</label>
                                <div>
                                    <input
                                        name='login'
                                        onChange={handlePickDatas}
                                        type="text"
                                        placeholder='Login...'
                                        required
                                    />
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                            <div className={Style.wrapper__form__row}>
                                <label>Parol</label>
                                <div>
                                    <input
                                        name='password'
                                        onChange={handlePickDatas}
                                        type={!showPassword ? "password" : "text"}
                                        placeholder='Password...'
                                        required
                                    />
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
                            <button disabled={loading || snackOpen} className={loading || snackOpen ? 'button disabled' : 'button'}>
                                {loading ?
                                    <Loading /> :
                                    'Kirish'
                                }
                            </button>
                            <Link href='/'>Parolni unutdingizmi?</Link>
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
