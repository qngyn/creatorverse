import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faYoutube, faFontAwesome);

const CreatorCard = ({ creator }) => {
    const { name, description, url, imageURL } = creator;

    return (<>
        <article style={{ width: '300px', height: '200px', backgroundImage: `url(${imageURL})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#333333', backgroundBlendMode: 'multiply' }} >
            <h5 style={{ textAlign: 'left', marginBottom: '0' }}>{name}</h5>

            <a href={url}>
                <FontAwesomeIcon icon={faYoutube} />
            </a>

            <hr />

            <p style={{ textAlign: 'left', fontSize: '12px' }}>{description}</p>
        </article >

        {/* <p>{name}</p>
        <p>{description}</p>
        <p>{url}</p>
        <image src={imageURL} /> */}
    </>)
}

export default CreatorCard;