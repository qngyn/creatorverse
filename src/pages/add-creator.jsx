import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useState } from "react";
import { supabase } from "../client";

const AddCreator = () => {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');

    const onSubmit = async () => {

        const { error } = await supabase
            .from('creators')
            .insert([
                {
                    name: name,
                    url: youtubeLink,
                    description: description,
                    imageURL: imageUrl
                },
            ]);

        if (error) {
            console.error('Failed to add creator: ', error);
        }
        // else {
        //     resetForm();
        // }
    }
    return <>
        <div className='container'>
            <header>
                <h4>Add New Creator</h4>
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
            </form>
        </div>

    </>
}

export default AddCreator;