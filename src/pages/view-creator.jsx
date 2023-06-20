import { useEffect } from "react";
import {useParams} from "react-router-dom";

const ViewCreator = () => {
    const { id } = useParams()

    useEffect(() => {
        console.log('id: ', id);
    }, [id]);
    
    return <></>
}

export default ViewCreator;