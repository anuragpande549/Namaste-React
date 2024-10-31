import { CLOUD_IMG } from "../ulits/urls";


const Card = (props) => {

    const { restObj } = props;

    const { id, cloudinaryImageId, name, avgRating, sla, cuisines } = restObj?.info;
    return (
        <>
            <div className="card-container">

                <div className="card-img">
                    <img alt="item-image" src={CLOUD_IMG + cloudinaryImageId} />
                </div>
                <div className="card-detail">
                    <h3>{name}</h3>
                    <div>
                        <span>{avgRating}</span>
                        <span>{sla.slaString}</span>
                    </div>
                    <h4>{cuisines.slice(0, 5).join(", ")}</h4>
                </div>
            </div>
        </>
    )
}

export default Card