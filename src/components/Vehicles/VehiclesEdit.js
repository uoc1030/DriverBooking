import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';



export default function VehiclesEdit(props) {
    const [vehicleName, setvehicleName] = useState("");
    const [manufacturer, setmanufacturer] = useState("");
    const [categoryId, setcategoryId] = useState("");
    const [groupId, setgroupId] = useState("");
    const [img, setimg] = useState("");
    const [driverId, setdriverId] = useState("");
    const [driverName, setdriverName] = useState("")
    const [categoryName, setcategoryName] = useState("")
    let { id } = useParams();
    let navigate = useNavigate();

    let body;


    useEffect(() => {
        handleGetUserAccount(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleGetUserAccount = async (id) => {
        let res = await fetch(`https://funtrip.azurewebsites.net/api/vehicles/${id}`, {
            method: `GET`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify(body)

        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setvehicleName(result.vehicleName);
                setmanufacturer(result.manufacturer);
                setcategoryId(result.categoryId);
                setgroupId(result.groupId);
                setimg(result.img);
                setdriverId(result.driverId);
                setdriverName(result.driverName);
                setcategoryName(result.categoryName);   
            }

            )
            .catch((error) => {
                throw ('Invalid Token')
            })
        return body
    }

    const handleUpdateClick = async () => {
        body = {
            id: Number(id), vehicleName: vehicleName, manufacturer: manufacturer, categoryId: Number(categoryId), groupId: Number(groupId), img: img,driverId:Number(driverId), driverName: driverName,categoryName:categoryName
        }

        let res = await fetch(`https://funtrip.azurewebsites.net/api/vehicles/${id}`, {
            method: `PUT`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify(body)

        }).then(res => res.json())
            .then(result => {
                navigate("/Admin/Vehicles", { replace: false });
            }

            )

        return body
    }

    return (
        <div class="h-screen py-5 px-3 bg-black items-center">
            <div class="bg-white">
                <h4 class="flex justify-center p-3 text-[22px]">Edit Vehicles</h4>
                <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Vehicle Name</span>
                        <input style={{marginTop:'15px'}} type="text" value={vehicleName} onChange={e => setvehicleName(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Manufacturer</span>
                        <input style={{marginTop:'15px'}} type="text" value={manufacturer} onChange={e => setmanufacturer(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Category Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={categoryId} onChange={e => setcategoryId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Group Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={groupId} onChange={e => setgroupId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Img</span>
                        <input style={{marginTop:'15px'}} type="text" value={img} onChange={e => setimg(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Driver Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={driverId} onChange={e => setdriverId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Driver Name</span>
                        <input style={{marginTop:'15px'}} type="text" value={driverName} onChange={e => setdriverName(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Category Name</span>
                        <input style={{marginTop:'15px'}} type="text" value={categoryName} onChange={e => setcategoryName(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                </div>

                <div class="px-4 text-right py-2">
                    <button onClick={handleUpdateClick} class="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">Save</button>
                </div>
            </div>
            
        </div>
    )
}

