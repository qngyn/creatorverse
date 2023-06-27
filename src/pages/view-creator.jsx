import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import './view-creator.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const ViewCreator = () => {
    const { id } = useParams()
    const [creator, setCreator] = useState();
    const [deleted, setDeleted] = useState(false);

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

    if (!creator) {
        return (<h3> Failed to fetch creator or invalid creator id </h3>)
    }

    const onDelete = async () => {

        const { error } = await supabase
            .from('creators')
            .delete()
            .eq('id', id);
        
        if (error) {
            console.error("Failed to delete user: ", error);
        } else {
            setDeleted(true);
        }

    }

    const { name, description, url, imageURL } = creator;

    if (deleted) {
        return (
            <article>
                Creator {name} deleted!
            </article>
        )
    }
    
    return (
        <>
            <div className='container'>
                <div className="grid-container">
                    <img src={imageURL} className='creator-image' />

                    <div className='text-container'>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <p>{url}</p>

                        <div style={{ display: 'flex' }}>
                            <Link to={`/edit/${id}`} role="button" style={{ height: '40px', display: 'flex', width: 'fit-content', alignItems: 'center', marginRight: '5px' }}>
                                <p style={{ margin: 0 }}> Edit <span style={{ marginLeft: '5px' }}><FontAwesomeIcon icon={faPenToSquare} /></span>
                                </p>
                            </Link>

                            <button className='secondary delete-btn' onClick={onDelete}>
                                <p style={{ margin: 0 }}> Remove <span style={{ marginLeft: '5px' }}><FontAwesomeIcon icon={faTrash} /></span>
                                </p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewCreator;