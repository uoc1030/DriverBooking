import React, { Component } from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';


export default function Edit(props) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [creditCard, setcreditCard] = useState("")
    const [groupId, setgroupId] = useState("")
    const [vehicleId, setvehicleId] = useState("")
    const [img, setimg] = useState("")
    const [vehicleName, setvehicleName] = useState("")
    let { id } = useParams();
    let navigate = useNavigate();

    let body;


    useEffect(() => {
        handleGetUserAccount(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleGetUserAccount = async (id) => {
        let res = await fetch(`https://funtrip.azurewebsites.net/api/drivers/${id}`, {
            method: `GET`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify(body)

        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setusername(result.username);
                setpassword(result.password);
                setemail(result.email);
                setphone(result.phone);
                setcreditCard(result.creditCard);
                setgroupId(result.groupId);
                setvehicleId(result.vehicleId);
                setimg(result.img);
                setvehicleName(result.vehicleName);
            }

            )
            .catch((error) => {
                throw ('Invalid Token')
            })
        return body
    }

    const handleUpdateClick = async () => {
        body = {
            username: username, password: password, email: email,phone: phone, creditCard: creditCard, groupId: groupId, vehicleId:vehicleId,img:img,vehicleName:vehicleName
        }

        let res = await fetch(`https://funtrip.azurewebsites.net/api/drivers/${id}`, {
            method: `PUT`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify(body)

        }).then(res => res.json())
            .then(result => {
                navigate("/Admin/Driver", { replace: false });
            }

            )

        return body
    }

    return (
        <div class="h-screen py-5 px-3 bg-black items-center">
            <div class="bg-white">
                <h4 class="flex justify-center p-3 text-[22px]">Edit Driver</h4>
                <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">User Name</span>
                        <input style={{marginTop:'15px'}} type="text" value={username} onChange={e => setusername(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">password</span>
                        <input style={{marginTop:'15px'}} type="text" value={password} onChange={e => setpassword(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Email</span>
                        <input style={{marginTop:'15px'}} type="text" value={email} onChange={e => setemail(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">phone</span>
                        <input style={{marginTop:'15px'}} type="text" value={phone} onChange={e => setphone(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">creditCard</span>
                        <input style={{marginTop:'15px'}} type="text" value={creditCard} onChange={e => setcreditCard(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">groupId</span>
                        <input style={{marginTop:'15px'}} type="text" value={groupId} onChange={e => setgroupId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">vehicleId</span>
                        <input style={{marginTop:'15px'}} type="text" value={vehicleId} onChange={e => setvehicleId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">img</span>
                        <input style={{marginTop:'15px'}} type="text" value={img} onChange={e => setimg(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">vehicleName</span>
                        <input style={{marginTop:'15px'}} type="text" value={vehicleName} onChange={e => setvehicleName(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                </div>

                <div class="px-4 text-right py-2">
                    <button onClick={handleUpdateClick} class="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">Save</button>
                </div>
            </div>
            
        </div>
    )
}

