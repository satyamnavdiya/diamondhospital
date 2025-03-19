import React from 'react'
import "../CSS/Specialities.css"
import { ChevronsRight } from 'lucide-react'


function FloorPlan() {
    return (
        <div className='min-h-screen bg-white pt-36 max-sm:pt-[6.5rem] w-[80%] div-center'>
            <h1 className='doc-heading doc-gradient'>Floor Plan</h1>

            <div className='floor-div'>
                <p className='w-[50%] bg-red-600 text-white text-center rounded-[7px] p-5 mr-8'>Floor</p>
                <p className='w-[50%] bg-red-600 text-white text-center rounded-[7px] p-5'>Details</p>
            </div>

            <div className='floor-div mt-5'>
                <div className='w-1/2 bg-[#bb004e] text-white text-center rounded-[7px] p-6 mr-6'> <h1>Basement - 1</h1></div>
                <div className='w-1/2 bg-[#bb004e] text-white rounded-[7px] p-6'>
                    <p> <ChevronsRight className="inline" /> OPD - 7, 8, 9, 10, 12</p>
                    <p> <ChevronsRight className="inline" /> Medicine Department</p>
                    <p> <ChevronsRight className="inline" /> Dental Department</p>
                    <p> <ChevronsRight className="inline" /> Physiotherapy Department</p>
                    <p> <ChevronsRight className="inline" /> Conference Hall</p>
                    <p> <ChevronsRight className="inline" /> Finding Room</p>
                </div>
            </div>

            <div className='floor-div mt-5'>
                <div className='w-1/2 bg-[#942977] text-white text-center rounded-[7px] p-6   mr-6'> <h1>Ground Floor</h1></div>
                <div className='w-1/2 bg-[#942977] text-white rounded-[7px] p-6'>
                    <p> <ChevronsRight className="inline" /> OPD - 1, 2, 3</p>
                    <p> <ChevronsRight className="inline" />  Reception & Billing</p>
                    <p> <ChevronsRight className="inline" /> Emergency Department</p>
                    <p> <ChevronsRight className="inline" /> Medical Store</p>
                    <p> <ChevronsRight className="inline" /> O.P.D. Department </p>
                    <p> <ChevronsRight className="inline" /> Laboratory Department </p>
                    <p> <ChevronsRight className="inline" /> X-Ray, Sonography Department </p>
                    <p> <ChevronsRight className="inline" /> Trusty Office</p>
                    <p> <ChevronsRight className="inline" /> Administrative Office</p>
                    <p> <ChevronsRight className="inline" /> Account & H.R. Office</p>
                </div>
            </div>

            <div className='floor-div mt-5'>
                <div className='w-1/2 bg-[#5e4384] text-white text-center rounded-[7px] p-6   mr-6'><h1>First Floor</h1></div>
                <div className='w-1/2 bg-[#5e4384] text-white rounded-[7px] p-6' >
                    <p> <ChevronsRight className="inline" /> Operation Theater (1, 2, 3, 4)</p>
                    <p> <ChevronsRight className="inline" /> Labor Room </p>
                    <p> <ChevronsRight className="inline" /> Gynec General Word</p>
                    <p> <ChevronsRight className="inline" /> Semi Special   (1, 2, 3, 4)</p>
                    <p> <ChevronsRight className="inline" /> Special Room (1)</p>
                </div>
            </div>

            <div className='floor-div mt-5'>
                <div className='w-1/2 bg-[#324a75] text-white text-center rounded-[7px] p-6   mr-6'><h1>Second Floor</h1></div>
                <div className='w-1/2 bg-[#324a75] text-white rounded-[7px] p-6'>
                    <p> <ChevronsRight className="inline" /> N.I.C.U.</p>
                    <p> <ChevronsRight className="inline" /> Mother Side Bed</p>
                    <p> <ChevronsRight className="inline" /> Dialyses Department </p>
                    <p> <ChevronsRight className="inline" /> General Word (Medicine)</p>
                    <p> <ChevronsRight className="inline" /> Semi Special (1, 2, 3)</p>
                    <p> <ChevronsRight className="inline" /> Special Room (1, 2)</p>
                    <p> <ChevronsRight className="inline" /> Cashless Desk</p>
                    <p> <ChevronsRight className="inline" /> I.T. Office</p>
                </div>
            </div>

            <div className='floor-div mt-5'>
                <div className='w-1/2 bg-[#2f4858] text-white text-center rounded-[7px] p-6   mr-6'><h1>Third Floor</h1></div>
                <div className='w-1/2 bg-[#2f4858] text-white  rounded-[7px] p-6'>
                    <p> <ChevronsRight className="inline" /> Eye Department</p>
                    <p> <ChevronsRight className="inline" /> M.I.C.U.</p>
                    <p> <ChevronsRight className="inline" /> P.I.C.U.</p>
                    <p> <ChevronsRight className="inline" /> General Word (Surgery)</p>
                    <p> <ChevronsRight className="inline" /> Semi Special (1, 2, 3)</p>
                    <p> <ChevronsRight className="inline" /> M.R.D.</p>
                </div>
            </div>

            <div className='floor-div mt-5'>
                <div className='w-1/2 bg-[#00a8d8] text-white text-center rounded-[7px] p-6   mr-6'><h1>Forth Floor</h1></div>
                <div className='w-1/2 bg-[#00a8d8] text-white  rounded-[7px] p-6'>
                    <p> <ChevronsRight className="inline" /> C.S.S.D</p>
                    <p> <ChevronsRight className="inline" /> Store Room</p>
                    <p> <ChevronsRight className="inline" /> UPS Room</p>
                </div>
            </div>

        </div>
    )
}

export default FloorPlan
