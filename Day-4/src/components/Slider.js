const Slider = ({ slideData }) => {
    let CLOUD_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const id = slideData?.header?.title;
    const info = slideData?.imageGridCards?.info;

    return (
        <>
            <h1 className="text-2xl font-bold text-yellow-700">{id}</h1>
            <div className="h-40 overflow-y-auto flex items-center text-center gap-5 w-auto scrollbar-hide ">
                {info.map((each) => (
                    <div key={each.imageId}>
                        <img className="h-[7rem] rounded-full min-w-[7rem] transform transition-all duration-100 hover:scale-105 hover:shadow-2xl mix-blend-multiply hover:bg-gray-100" src={CLOUD_IMG + each.imageId} alt="" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Slider;
