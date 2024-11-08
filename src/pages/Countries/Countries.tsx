import { useLocation } from "react-router-dom";

const Countries = () => {

    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get('name');

    return <>{productId}</>
}

export default Countries;