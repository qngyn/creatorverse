import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faArrowRight, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import '../App.css';

library.add(fas, faArrowRight, faYoutube, faFontAwesome);

const CreatorCard = ({ creator }) => {
    const { id, name, description, url, imageURL } = creator;

    return (<>
        <article style={{ width: '300px', maxHeight: '225px', margin: 'auto', backgroundImage: `url(${imageURL})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#333333', backgroundBlendMode: 'multiply' }} >
            <div>
                <h4 style={{ textAlign: 'left', marginBottom: '0' }}>{name}</h4>

                <a href={url}>
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

                <hr />
                <p className='ellipsis-two-lines' style={{ textAlign: 'left' }}>{description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', height: '20px' }}>
                    <Link to={`/edit/${id}`}>
                        <p> Edit
                            <span style={{ marginLeft: '5px' }}><FontAwesomeIcon icon={faPenToSquare} /></span>
                        </p>
                    </Link>

                    <Link to={`/view/${id}`}>
                        <p> View more
                            <span style={{ marginLeft: '5px' }}><FontAwesomeIcon icon={faArrowRight} /></span>
                        </p>
                    </Link>
                </div>
            </div>

        </article >

        {/* <p>{name}</p>
        <p>{description}</p>
        <p>{url}</p>
        <image src={imageURL} /> */}
    </>)
}

export default CreatorCard;