import React, { Component } from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';



export default function GroupEdit(props) {
    const [groupName, setgroupName] = useState("");
    const [managerId, setmanagerId] = useState("");
    const [apartmentId, setapartmentId] = useState("")
    const [phone, setphone] = useState("")
    const [numberOfMembers, setnumberOfMembers] = useState("")
    const [numberOfAreas, setnumberOfAreas] = useState("")
    let { id } = useParams();
    let navigate = useNavigate();

    let body;


    useEffect(() => {
        handleGetUserAccount(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleGetUserAccount = async (id) => {
        let res = await fetch(`https://funtrip.azurewebsites.net/api/groups/${id}`, {
            method: `GET`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify(body)

        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setgroupName(result.groupName);
                setmanagerId(result.managerId);
                setapartmentId(result.apartmentId);
                setphone(result.phone);
                setnumberOfMembers(result.numberOfMembers);
                setnumberOfAreas(result.numberOfAreas);
            }

            )
            .catch((error) => {
                throw ('Invalid Token')
            })
        return body
    }

    const handleUpdateClick = async () => {
        body = {
            groupName: groupName, managerId:managerId, apartmentId: apartmentId, phone: phone, numberOfMembers: numberOfMembers , numberOfAreas: numberOfAreas
        }

        let res = await fetch(`https://funtrip.azurewebsites.net/api/groups/${id}`, {
            method: `PUT`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify(body)

        }).then(res => res.json())
            .then(result => {
                navigate("/Admin/Group", { replace: false });
            }

            )

        return body
    }

    return (
        <div class="h-screen py-5 px-3 bg-black items-center">
            <div class="bg-white">
                <h4 class="flex justify-center p-3 text-[22px]">Edit Group</h4>
                <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Group Name</span>
                        <input style={{marginTop:'15px'}} type="text" value={groupName} onChange={e => setgroupName(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Manager Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={managerId} onChange={e => setmanagerId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Apartment Id</span>
                        <input style={{marginTop:'15px'}} type="text" value={apartmentId} onChange={e => setapartmentId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Phone</span>
                        <input style={{marginTop:'15px'}} type="text" value={phone} onChange={e => setphone(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Number Of Members</span>
                        <input style={{marginTop:'15px'}} type="text" value={numberOfMembers} onChange={e => setnumberOfMembers(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">Number Of Areas</span>
                        <input style={{marginTop:'15px'}} type="text" value={numberOfAreas} onChange={e => setnumberOfAreas(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                </div>

                <div class="px-4 text-right py-2">
                    <button onClick={handleUpdateClick} class="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">Save</button>
                </div>
            </div>
            
        </div>
    )
}

