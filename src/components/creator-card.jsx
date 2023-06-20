import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

library.add(fas, faArrowRight, faYoutube, faFontAwesome);

const CreatorCard = ({ creator }) => {
    const { id, name, description, url, imageURL } = creator;

    return (<>
        <article style={{ width: '300px', height: '200px', backgroundImage: `url(${imageURL})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#333333', backgroundBlendMode: 'multiply' }} >
            <h5 style={{ textAlign: 'left', marginBottom: '0' }}>{name}</h5>

            <a href={url}>
                <FontAwesomeIcon icon={faYoutube} />
            </a>

            <hr />
            <p className='ellipsis-two-lines' style={{ textAlign: 'left' }}>{description}</p>
            <Link to={`/view/${id}`}>
                <p> View more 
                    <span style={{marginLeft: '5px'}}><FontAwesomeIcon icon={faArrowRight} /></span>
                </p>
            </Link>

        </article >

        {/* <p>{name}</p>
        <p>{description}</p>
        <p>{url}</p>
        <image src={imageURL} /> */}
    </>)
}

export default CreatorCard;