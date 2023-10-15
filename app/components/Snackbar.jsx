import React, { useEffect, useState } from 'react'
import Snack from '@/app/styles/Snackbar.module.scss'

export default function Snackbar({ open, close, text, priority }) {

    const [status, setStatus] = useState(open)
    
    useEffect(() => {
        setStatus(open)
        if (open) {
            setTimeout(() => {
                setStatus(false)
                close()
            }, 5000)
        }
        
    }, [open])
    
    return (
        <div className={status ? (
            priority === 'success' ? `${Snack.snackbar} ${Snack.success}` :
                priority === 'danger' ? `${Snack.snackbar} ${Snack.danger}` :
                    priority === 'info' ? `${Snack.snackbar} ${Snack.info}` :
                        priority === 'info' ? `${Snack.snackbar} ${Snack.success}` :
                            `${Snack.snackbar} ${Snack.success}`
        ) : `${Snack.hidden}`}>
            <div className={Snack.snackbar__top}>
                <span className={Snack.snackbar__loader}></span>
            </div>
            <div className={Snack.snackbar__bottom}>
                <div className={Snack.snackbar__bottom__text}>
                    <p>{text}</p>
                </div>

                <div className={Snack.snackbar__bottom__action}>
                    <p onClick={close}>&times;</p>
                </div>
            </div>
        </div>
    )
}
