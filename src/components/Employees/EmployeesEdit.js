import React, { Component } from 'react'
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';



export default function EmployeesEdit(props) {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [fullName, setfullName] = useState("")
    const [gmail, setgmail] = useState("")
    const [accountId, setaccountId] = useState("")
    let { id } = useParams();
    let navigate = useNavigate();

    let body;


    useEffect(() => {
        handleGetUserAccount(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleGetUserAccount = async (id) => {
        let res = await fetch(`https://funtrip.azurewebsites.net/api/employees/${id}`, {
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
                setfullName(result.fullName);
                setgmail(result.gmail);
                setaccountId(result.accountId);
            }

            )
            .catch((error) => {
                throw ('Invalid Token')
            })
        return body
    }

    const handleUpdateClick = async () => {
        body = {
            username: username, password:password, fullName: fullName, gmail: gmail, accountId: accountId
        }

        let res = await fetch(`https://funtrip.azurewebsites.net/api/employees/${id}`, {
            method: `PUT`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('user-token')}`,
            },
            body: JSON.stringify(body)

        }).then(res => res.json())
            .then(result => {
                navigate("/Admin/Employees", { replace: false });
            }

            )

        return body
    }

    return (
        <div class="h-screen py-5 px-3 bg-black items-center">
            <div class="bg-white">
                <h4 class="flex justify-center p-3 text-[22px]">Edit Employees</h4>
                <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">username</span>
                        <input style={{marginTop:'15px'}} type="text" value={username} onChange={e => setusername(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">password</span>
                        <input style={{marginTop:'15px'}} type="text" value={password} onChange={e => setpassword(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>

                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">fullName</span>
                        <input style={{marginTop:'15px'}} type="text" value={fullName} onChange={e => setfullName(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">gmail</span>
                        <input style={{marginTop:'15px'}} type="text" value={gmail} onChange={e => setgmail(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>


                    <div class="col-span-6 relative">
                        <span class="absolute bg-white left-3 -top-[12px] px-2">accountId</span>
                        <input style={{marginTop:'15px'}} type="text" value={accountId} onChange={e => setaccountId(e.target.value)} className="outline-none border-gray-400   border-2 ml-2  rounded-2xl w-3/6  h-12" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
                    </div>
                </div>

                <div class="px-4 text-right py-2">
                    <button onClick={handleUpdateClick} class="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">Save</button>
                </div>
            </div>
            
        </div>
    )
}

