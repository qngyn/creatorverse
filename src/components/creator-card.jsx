const CreatorCard = ({ creator }) => {
    const { name, description, url, imageURL } = creator;

    return (<>
        <p>{name}</p>
        <p>{description}</p>
        <p>{url}</p>
        <image src={imageURL} />
    </>)
}

export default CreatorCard;