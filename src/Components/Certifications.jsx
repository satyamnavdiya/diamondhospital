import React from 'react'

function Certifications() {
    return (
        <>

            <div className='div-center w-[80%] pt-10'>
                <div className='text-center'>
                    <span className='bg-teal-500 text-white rounded-xl text-center py-1 px-2'>Our Achievement</span>
                    <h1 className='achievement-heading pt-2'><span className="achi-gradient">Cerrtifications</span></h1>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='w-[24%] p-5 hover:shadow-2xl transition-all rounded-2xl hover:border-teal-500 hover:border-2'><img src="/IMG/certifications.jpg" alt="" /></div>
                    <div className='w-[24%] p-5 hover:shadow-2xl transition-all rounded-2xl hover:border-teal-500 hover:border-2'><img src="/IMG/certifications.jpg" alt="" /></div>
                    <div className='w-[24%] p-5 hover:shadow-2xl transition-all rounded-2xl hover:border-teal-500 hover:border-2'><img src="/IMG/certifications.jpg" alt="" /></div>
                    <div className='w-[24%] p-5 hover:shadow-2xl transition-all rounded-2xl hover:border-teal-500 hover:border-2'><img src="/IMG/certifications.jpg" alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Certifications
