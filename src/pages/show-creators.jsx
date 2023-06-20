import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/creator-card";
import { Link } from 'react-router-dom'
import './show-creators.css';

const ShowCreators = () => {
    const [creators, setCreators] = useState();

    useEffect(() => {
        const getAllCreators = async () => {
            let { data: creators, error } = await supabase
                .from('creators')
                .select('*');

            if (error) {
                console.error('Error fetching from Supabase: ', error);
            } else {
                setCreators(creators);
            }
        }
        getAllCreators();
    }, []);

    useEffect(() => {
        console.log("check creators: ", creators);
    }, [creators]);

    if (!creators) {
        return (<h3> No creators to show </h3>)
    }
    return <>
        <div className="row">
            {creators.map((creator) =>
                <div key={creator.id} className="col">
                        <CreatorCard creator={creator} />
                </div>
            )}


        </div>
    </>
}

export default ShowCreators;