"use client"

import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const menus = [
    {
        id: 0,
        title: 'Statistika',
        link: 'statistics',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17H14V15H7V17ZM7 13H17V11H7V13ZM7 9H17V7H7V9ZM5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99933 5 3H19C19.55 3 20.021 3.196 20.413 3.588C20.805 3.98 21.0007 4.45067 21 5V19C21 19.55 20.804 20.021 20.412 20.413C20.02 20.805 19.5493 21.0007 19 21H5Z" fill="white"/>
        </svg>
        `
    },
    {
        id: 1,
        title: 'Tumanlar',
        link: 'regions',
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_174_471)">
        <path d="M20 2H4C3 2 2 2.9 2 4V7.01C2 7.73 2.43 8.35 3 8.7V20C3 21.1 4.1 22 5 22H19C19.9 22 21 21.1 21 20V8.7C21.57 8.35 22 7.73 22 7.01V4C22 2.9 21 2 20 2ZM15 14H9V12H15V14ZM20 7H4V4L20 3.98V7Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_174_471">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `
    },
    {
        id: 2,
        title: 'Hodimlar',
        link: 'employee',
        icon: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15.5796V16.5749C18 17.6697 17.1 18.5655 16 18.5655H2C0.89 18.5655 0 17.6697 0 16.5749V2.64053C0 1.54568 0.89 0.649902 2 0.649902H16C17.1 0.649902 18 1.54568 18 2.64053V3.63584H9C7.89 3.63584 7 4.53162 7 5.62646V13.589C7 14.6838 7.89 15.5796 9 15.5796H18ZM9 13.589H19V5.62646H9V13.589ZM13 11.1007C12.17 11.1007 11.5 10.4338 11.5 9.60771C11.5 8.7816 12.17 8.11474 13 8.11474C13.83 8.11474 14.5 8.7816 14.5 9.60771C14.5 10.4338 13.83 11.1007 13 11.1007Z" fill="white"/>
        </svg>
        `
    },
    {
        id: 3,
        title: 'Akkount',
        link: 'account',
        icon: `<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6.5C10.21 6.5 12 5.04563 12 3.25C12 1.45438 10.21 0 8 0C5.79 0 4 1.45438 4 3.25C4 5.04563 5.79 6.5 8 6.5ZM8 8.125C5.33 8.125 0 9.21375 0 11.375V13H16V11.375C16 9.21375 10.67 8.125 8 8.125Z" fill="white"/>
        </svg>
        `
    },
    {
        id: 4,
        title: 'Chiqish',
        link: 'logout',
        icon: `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0H8V8.33333H10V0ZM14.83 1.80833L13.41 2.99167C14.99 4.05 16 5.675 16 7.5C16 10.725 12.87 13.3333 9 13.3333C5.13 13.3333 2 10.725 2 7.5C2 5.675 3.01 4.05 4.58 2.98333L3.17 1.80833C1.23 3.18333 0 5.21667 0 7.5C0 11.6417 4.03 15 9 15C13.97 15 18 11.6417 18 7.5C18 5.21667 16.77 3.18333 14.83 1.80833Z" fill="white"/>
        </svg>
        `
    }
]

export default function Sidebar() {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoader(false), 2000)
    }, [])

    console.log(menus);

    return (
        <>
            {loader && <Loader />}

            <div style={{backgroundColor:'red'}}>
                {menus?.map(menu=>(
                    <div key={menu?.id}>
                        <div dangerouslySetInnerHTML={{ __html: menu?.icon }} />

                    </div>
                ))}
                Sidebar
            </div>
        </>
    )
}
