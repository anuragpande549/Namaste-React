import Logo from "./Logo";
import HeadingList from "./HeadingList";

const Heading = () => {
    return (
        <div className="flex justify-between w-[90vw] m-[auto] rounded-md items-center py-4 px-6 bg-orange-400 shadow-md sticky top-0 z-50">
            <Logo />
            <HeadingList />
        </div>
    );
};

export default Heading;
