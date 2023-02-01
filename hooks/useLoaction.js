import { useState } from 'react'

const useLoaction = () => {

    const [loactionError, setLoactionError] = useState('')
    const [latLong, setlatLong] = useState('')
    const [isFindingLoaction, setisFindingLoaction] = useState(false)

    const success = (position) => {
        const latitude = position?.coords?.latitude;
        const longitude = position?.coords?.longitude;
        setlatLong(`${latitude},${longitude}`)
        setLoactionError('')
        setisFindingLoaction(false)
    }
    const error = () => {
        setLoactionError('Unable to retrieve your location')
    }
    const handleLoaction = () => {
        setisFindingLoaction(true)
        if (!navigator?.geolocation) {
            setLoactionError('Geolocation is not supported by your browser')
        } else {
            setisFindingLoaction(false)
            // setLoactionError('Locating…')
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
    return {
        latLong,
        handleLoaction,
        loactionError,
        isFindingLoaction
    }
}

export default useLoaction