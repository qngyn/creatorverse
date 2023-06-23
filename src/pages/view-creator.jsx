import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { supabase } from "../client";
import './view-creator.css';

const ViewCreator = () => {
    const { id } = useParams()
    const [creator, setCreator] = useState();

    useEffect(() => {
        console.log('id: ', id);
        const getCurrentCreator = async (id) => {
            let { data: creator, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id);

            if (error) {
                console.error('Error fetching from Supabase: ', error);
            } else {
                setCreator(creator[0]);
            }
        }
        if (id) {
            getCurrentCreator(id);
        }
    }, [id]);

    useEffect(() => {
        console.log('check current creator: ', creator);
    }, [creator]);

    if (!creator) {
        return (<h3> Failed to fetch creator or invalid creator id </h3>)
    }

    const { name, description, url, imageURL } = creator;

    return (
        <>
            <div className="grid-container">
                <img src={imageURL} className='creator-image'/>

                <div className='text-container'>
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <p>{url}</p>
                </div>
            </div>
        </>
    )
}

export default ViewCreator;