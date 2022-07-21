import React from 'react'
import { useState } from "react";
import { useNavigate} from 'react-router-dom';


export default function OrderCreate(props) {
    const [startTime, setstartTime] = useState("");
    const [endTime, setendTime] = useState("");
    const [cost, setcost] = useState("")
    const [vehicleId, setvehicleId] = useState("")
    const [driverId, setdriverId] = useState("")
    const [startLocationId, setstartLocationId] = useState("")
    const [isRoundTrip, setisRoundTrip] = useState("")
    const [address, setaddress] = useState("")
    const [employeeId, setemployeeId] = useState("")

    let navigate = useNavigate();

    const handleUpdateClick = async () => {
        let body;
        body = {
            startTime: startTime, endTime: endTime, vehicleId: vehicleId, driverId: driverId, startLocationId: startLocationId, isRoundTrip:isRoundTrip,address: address,employeeId:employeeId,cost:cost
        }

        let res = await fetch(`https://funtrip.azurewebsites.net/api/orders`, {
            method: `POST`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify({
                ...body,
                isRoundTrip: Boolean(isRoundTrip)
            })

        }).then(res => res.json())
            .then(result => {
                navigate("/Admin/Order", { replace: false });
            }

            )

        return body
    }

    return (
        
        <div class="h-screen py-5 px-3 bg-black items-center">
            <div class="bg-white">
                <h4 class="flex justify-center p-3 text-[22px]">Create Order</h4>
                

                <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Start Time</span>
                        <input style={{marginTop:'15px'}} type="text" value={startTime} onChange={e => setstartTime(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">End Time</span>
                        <input style={{marginTop:'15px'}} type="text" value={endTime} onChange={e => setendTime(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Cost</span>
                        <input style={{marginTop:'15px'}} type="text" value={cost} onChange={e => setcost(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Vehicle Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={vehicleId} onChange={e => setvehicleId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Driver Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={driverId} onChange={e => setdriverId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Start Location Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={startLocationId} onChange={e => setstartLocationId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Is Round Trip</span>
                        <input style={{marginTop:'15px'}} type="text" value={isRoundTrip} onChange={e => setisRoundTrip(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Address</span>
                        <input style={{marginTop:'15px'}} type="text" value={address} onChange={e => setaddress(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Employee Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={employeeId} onChange={e => setemployeeId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    
                </div>

                <div class="px-4 text-right py-2">
                    <button onClick={handleUpdateClick} class="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">Save</button>
                </div>
            </div>
            
        </div>
    )
}

