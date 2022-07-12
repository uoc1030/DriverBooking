import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    return (
        <div class="h-screen py-5 px-3 bg-black items-center">
        <div class="bg-white"> 
         <h4 class="flex justify-center p-3 text-[22px]">Edit Social Profiles</h4>
         <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
             <div class="col-span-6 relative">
                 <span class="absolute bg-white left-3 -top-[12px] px-2">Dribbble</span>
                 <input  type="text" placeholder="https://dribbble.com/username" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
             </div>
         
             <div class="col-span-6 relative">
                 <span class="absolute bg-white left-3 -top-[12px] px-2">Facebook</span>
                 <input type="text" placeholder="https://www.facebook.com/username" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
             </div>
         
             <div class="col-span-6 relative">
                 <span class="absolute bg-white left-3 -top-[12px] px-2">Linkedin</span>
                 <input type="text" placeholder="https://www.linkedin.com/company/username" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
             </div>
         
         
             <div class="col-span-6 relative">
                 <span class="absolute bg-white left-3 -top-[12px] px-2">Codepen</span>
                 <input type="text" placeholder="https://codepen.io/username" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
             </div>
         
         
             <div class="col-span-6 relative">
                 <span class="absolute bg-white left-3 -top-[12px] px-2">Website</span>
                 <input type="text" placeholder="https://website.com" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
             </div>
         
         
         
             <div class="col-span-6 relative">
                 <span class="absolute bg-white left-3 -top-[12px] px-2">Twitter</span>
                 <input type="text" placeholder="https://twitter.com/username" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
             </div>
         
         
         
             <div class="col-span-6 relative">
                 <span class="absolute bg-white left-3 -top-[12px] px-2">Behance</span>
                 <input type="text" placeholder="https://www.behance.net/username" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
             </div>
         
         
         
             <div class="col-span-6 relative">
                 <span class="absolute bg-white left-3 -top-[12px] px-2">Medium</span>
                 <input type="text" placeholder="https://medium.com/@username" class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm" />
             </div>

         </div>
         
         <div class="px-4 text-right py-2">
             <button class="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600">Save</button>
         </div>
       </div>
     </div>
    )
  }
}
