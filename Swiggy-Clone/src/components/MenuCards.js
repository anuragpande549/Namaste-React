import ShowMenu from "./ShowMenu";
import { CateShowData } from "./ShowMenu";
// import { useState } from "react";

// Wrap ShowMenu with CateShowData HOC
const EnhancedShowMenu = CateShowData(ShowMenu);

const MenuCards = ({ title, myCards }) => {
    // const [ForArray, setForArray] = useState();

    // Just for logging each card's itemCards or card property
    myCards.map((card) => console.log(card?.itemCards || card));

    return (
        <>
            <div>
                <div id="menu-list" className="w-[90vw] bg-slate-100 mt-4 border-t pt-4 space-y-4">
                    <div
                        onClick={() => {}}
                        className="flex justify-between bg-blue-400 rounded-md p-3 text-white w-[90vw] pl-6 pr-6"
                    >
                        <h1 className="font-bold  text-3xl">{title}</h1>
                        <span className="scale-150">⬆️</span>
                    </div>

                    {myCards.map((card, index) => {
                        return (
                            <div key={index}>
                                {card?.card?.info ? (
                                    <ShowMenu showList={card?.card?.info} />
                                ) : (
                                    <EnhancedShowMenu showList={card?.itemCards} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MenuCards;
