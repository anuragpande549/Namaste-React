const SimmerUi = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 animate-pulse">
                {Array(8).fill("").map((_, index) => (
                    <div key={index} className="bg-gray-200 rounded-lg p-4 flex flex-col gap-4">
                        {/* Placeholder for image */}
                        <div className="h-32 bg-gray-300 rounded-md"></div>
                        {/* Placeholder for title */}
                        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                        {/* Placeholder for text */}
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SimmerUi;
