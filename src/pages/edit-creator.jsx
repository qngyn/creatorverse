import { useEffect, useState } from "react";
import { supabase } from "../client";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const EditCreator = () => {
    const { id } = useParams()
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');

    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        const getCurrentCreator = async (id) => {
            let { data: creator, error } = await supabase
                .from('creators')
                .select('*')
                .eq('id', id);

            if (error) {
                console.error('Error fetching from Supabase: ', error);
            } else {
                const { name, url, description, imageURL } = creator[0];
                setName(name);
                setYoutubeLink(url);
                setDescription(description);
                setImageUrl(imageURL);
            }
        }

        if (id) {
            getCurrentCreator(id);
        }
    }, [id]);

    const onSubmit = async () => {
        const { error } = await supabase
            .from('creators')
            .update({
                name: name,
                url: youtubeLink,
                description: description,
                imageURL: imageUrl
            })
            .eq('id', id)


        if (error) {
            console.error('Failed to update creator\'s information: ', error);
        }
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

    if (deleted) {
        return (
            <article>
                Creator {name} deleted!
            </article>
        )
    }

    return <>
        <div className='container'>
            <header>
                <h4>Edit Creator</h4>
            </header>

            <form style={{ textAlign: 'left' }}>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <label for="name">
                    Name
                    <input type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>

                {/* eslint-disable-next-line react/no-unknown-property */}
                <label for="image">
                    Image
                    <input type="url" id="image" name="image" placeholder="URL to image" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </label>

                {/* eslint-disable-next-line react/no-unknown-property */}
                <label for="description">
                    Description
                    <input type="text" id="description" name="description" placeholder="Creator's description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </label>

                {/* eslint-disable-next-line react/no-unknown-property */}
                <label for="youtube">
                    <FontAwesomeIcon icon={faYoutube} style={{ marginRight: '10px' }} />
                    <span>Youtube</span>
                    <input type="url" id="youtubeLink" name="youtubeLink" placeholder="Youtube link" value={youtubeLink} onChange={(e) => setYoutubeLink(e.target.value)} required />
                </label>

                <button type="submit" value="Submit" onClick={onSubmit}>
                    Submit
                </button>
                <button className='secondary' onClick={onDelete}>
                    Remove <span style={{ marginLeft: '5px' }}><FontAwesomeIcon icon={faTrash} /></span>
                </button>
            </form>
        </div>
    </>
}

export default EditCreator;