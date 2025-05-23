import React from 'react'
import '../CSS/Homapage.css';

function Certifications() {
    return (
        <>
            <section className='certifications'>
                <div className='div-center w-[80%] pt-10 max-[640px]:pt-0 max-sm:pt-8'>
                <div className='text-center'>
                    <span className='bg-teal-500 text-white rounded-xl text-center py-1 px-2'>Our Achievement</span>
                    <h1 className='cer-heading pt-2'><span className="cer-gradient">Certifications</span></h1>
                </div>

                <div className='grid grid-cols-4 max-[991px]:grid-cols-2 max-[640px]:grid-cols-1 items-center gap-x-5'>
                    <div className='p-5 hover:shadow-2xl transition-all rounded-2xl hover:border-teal-500 hover:border-2'><img src="/IMG/certifications.jpg" alt="" /></div>
                    <div className='p-5 hover:shadow-2xl transition-all rounded-2xl hover:border-teal-500 hover:border-2'><img src="/IMG/certifications.jpg" alt="" /></div>
                    <div className='p-5 hover:shadow-2xl transition-all rounded-2xl hover:border-teal-500 hover:border-2'><img src="/IMG/certifications.jpg" alt="" /></div>
                    <div className='p-5 hover:shadow-2xl transition-all rounded-2xl hover:border-teal-500 hover:border-2'><img src="/IMG/certifications.jpg" alt="" /></div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Certifications
