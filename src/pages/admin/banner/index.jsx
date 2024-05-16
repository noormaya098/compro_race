import React, { useEffect } from 'react'
import { BannerStore } from '../../../ZustandStore/Banner'

function BannerAdmin() {
    const { GetBanner } = BannerStore()
    useEffect(() => {
        GetBanner()
    }, [])
    return (
        <div>BannerAdmin</div>
    )
}

export default BannerAdmin