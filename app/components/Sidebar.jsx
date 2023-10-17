"use client"

import React, { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Sidebar() {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoader(false), 2000)
    }, [])

    return (
        <>
            {loader && <Loader />}

            <div>Sidebar</div>
        </>
    )
}
