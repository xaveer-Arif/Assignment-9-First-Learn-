import {useState, useEffect } from "react"
// import {  } from "react/cjs/react.development"

const useServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [services]
}
export default useServices