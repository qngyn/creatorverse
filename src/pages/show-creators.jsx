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
        <div className="main-panel">
            <header>

                <hgroup>
                    <h1>Creatorverse</h1>
                    <h4>A person's top content creators can say a lot about them?
                    </h4>
                    <h4>Share yours</h4>
                </hgroup>
                {/* <p><a href="#" role="button" onclick="event.preventDefault()">Call to action</a></p> */}
                <Link to={'/add'} role="button" style={{height: '65px'}}>
                    <h5> Add Creator
                    </h5>
                </Link>
            </header>

        </div>


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