import { useState } from "react";
// import { addItem } from "./redux/cardSplice";
// import { useSelector } from "react-redux";
// import appStore from "./redux/appStore";
const ShowMenu = ({ showList }) => {
    const CLOUD_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    // console.log(showList.price)
    // const [hide, setHide] = useState(true);
    // const { price, name, isVeg, imageId, description, ratings, itemAttribute, nextAvailableAtMessage } = showList;




    return (
        <>
            <div id="menu-list-details"  className={`flex  justify-between ${""} items-center border-b pb-6 px-8 py-4 mx-auto`}>
                <div className="flex flex-col  gap-2 w-3/4">
                    <span className={`text-md font-semibold ${showList?.itemAttribute.vegClassifier === "VEG" ? "text-green-600" : "text-red-600"}`}>
                        {showList?.itemAttribute.vegClassifier}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{showList?.name}</h3>
                    <h4 className="text-lg font-medium text-gray-700">Rs {showList?.price / 100||showList?.defaultPrice /100}</h4>
                    <h6 className="text-sm text-yellow-500 font-semibold">{(showList?.ratings?.aggregatedRating?.rating)?showList?.ratings?.aggregatedRating?.rating +"★":""} </h6>
                    <p className="text-sm text-gray-600 max-w-[60vw] leading-relaxed">{showList?.description}</p>
                </div>
                <div className="text-center">

                <img
                    src={CLOUD_IMG + showList?.imageId}
                    alt={showList?.nextAvailableAtMessage}
                    className={`w-28 h-28 object-cover ${showList?.imageId?"":"hidden"} bg-gray-200 rounded-md shadow-lg`}
                />
                <button className="p-2 translate-y-[-1rem] w-24 rounded-xl bg-blue-200 hover:scale-110 ">Add+</button>

                </div>
            </div>
        </>
    );
};

export const CateShowData = () =>{
    return ({showList}) => {

        return (
            // <ShowMenu showList={showList.card.card.info}/>
            <>

            {showList.map((each,index)=>{
                return(
                    <ShowMenu key={index} showList={each?.card?.info} />
                )
            })}
            </>
        )
    }
}

export default ShowMenu;
