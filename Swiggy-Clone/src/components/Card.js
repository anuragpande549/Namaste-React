import { CLOUD_IMG } from "../ulits/urls";

const Card = (props) => {
  const { restObj } = props;

  const { id, cloudinaryImageId, name, avgRating, sla, cuisines } = restObj?.info;

  return (
    <div className="card-container  bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full max-w-[23rem]  transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <div className="card-img flex-shrink-0">
        <img
          alt="item-image"
          src={CLOUD_IMG + cloudinaryImageId}
          className="w-full h-44 object-cover"
        />
      </div>

      <div className="card-detail flex-grow p-4">
        <h3 className="text-xl font-semibold truncate">{name}</h3>
        <div className="flex justify-between text-gray-700 text-sm mt-2">
          <span>{avgRating}⭐</span>
          <span>{sla.slaString}</span>
        </div>
        <h4 className="mt-2 text-gray-500 text-sm">{cuisines.slice(0, 5).join(", ")}</h4>
      </div>
    </div>
  );
};

export const newCard=(Card)=>{
  return  (props)=>{
    
    return(
      <>
      {/* <h1>this is new component</h1> */}
      <Card {...props}/>
      </>
    )
  }
  
}


export default Card;
