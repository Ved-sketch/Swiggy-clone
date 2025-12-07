import React, {useState,useEffect} from "react";
import Card from "./Card.jsx"

export default function OnlineDelivery(){

    const [data,setData] = useState([]);
        const fetchTopRestaurant = async () =>{
            const response = await fetch('http://localhost:5000/top-restaurant-chains');
            const apiData = await response.json();
            setData(apiData);
        }
    
        useEffect(() => {
                fetchTopRestaurant();
            }, []);

    return (
        <div className="max-w-[1200px] mx-auto">
                
            <div className="flex my-5 items-center justify-between">
                <div className="font-bold text-[25px]">Restaurants with online food delivery
                    in Jaunpur
                </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
                {
                    data.map(
                        (d,i) => {
                            return <Card {...d}/>
                        }
                    )
                }
            </div>

        </div>
    )
}