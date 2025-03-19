import React from 'react'
import "../CSS/Specialities.css"

function GeneralGuide() {
    return (
        <div className='w-3/4 pt-48 div-center pb-10 max-sm:pt-[7.5rem]'>
            <h1 className='text-5xl text-center font-bold'><span className='doc-heading doc-gradient'>Patient Guide</span></h1>

            <div className='text-xl mt-10 max-sm:mt-5'>
                <h2 className='spec-sub-heading'>Welcome to RTSV - SDA Dimond Hopital and Reserach Center! We are committed to providing high-quality healthcare with compassion and professionalism. This guide will help you navigate your visit and understand our services. </h2>

                <br /><br />
                <div className='spec-text'>
                    <b>1. Appointments</b>
                    <br />
                    <p>
                        (A) Booking an Appointment
                        <br />- You can schedule an appointment online via our website or by calling our reception.
                        <br />- Walk-in patients are welcome, but scheduled appointments are prioritized.
                    </p>

                    <p>
                        (B) Cancellation & Rescheduling
                        <br />- If you need to cancel or reschedule, please notify us at least 24 hours in advance.
                        <br />- Missed appointments without prior notice may incur a cancellation fee.
                    </p>
                </div>

                <br /><br />
                <div className='spec-text'>
                    <b>2. Admissions</b>
                    <br />
                    <p>
                        (A) Preparing for Admission
                        <br />- Bring a valid ID, insurance details, and any necessary medical records.
                        <br />- Pack personal essentials like toiletries, comfortable clothing, and prescribed medications.
                    </p>

                    <p>
                        (B) During Your Stay
                        <br />- Our medical team will provide daily updates on your health status.
                        <br />- Visiting hours are from 9:00 AM to 8:00 PM. Special arrangements can be made for critical care units.
                        <br />- Meals are provided according to your dietary needs. Inform our staff about any allergies.

                    </p>

                    <p>
                        (C) Discharge Process
                        <br />- Your doctor will provide discharge instructions and any necessary medications.
                        <br />- A final bill will be settled before discharge.
                        <br />- Follow-up appointments can be scheduled before you leave.
                    </p>
                </div>

                <br /><br />
                <div className='spec-text'>
                    <b>3. Billing & Insurance</b>

                    <p>
                        (A) Payment Options
                        <br />- We accept cash, credit/debit cards, and online payments.
                        <br />- Payment plans are available for eligible patients.
                    </p>

                    <p>
                        (B) Insurance Processing
                        <br />- We partner with major insurance providers. Please verify coverage with our billing department.
                        <br />- Patients are responsible for any expenses not covered by insurance.
                    </p>
                </div>

                <br /><br />
                <div className='spec-text'>
                    <b> 4. Patient Rights & Responsibilities</b>

                    <p>
                        (A) Patient Rights
                        <br />- Receive respectful and confidential care.
                        <br />- Be informed about your diagnosis, treatment options, and associated costs.
                        <br />- Seek a second opinion or refuse treatment.
                    </p>

                    <p>
                        (B) Patient Responsibilities
                        <br />- Provide accurate medical history and insurance details.
                        <br />- Follow prescribed treatments and respect hospital policies.
                        <br />- Treat hospital staff and fellow patients with courtesy.
                    </p>
                </div>

                <br /><br />
                <div className='spec-text pb-10'>
                    <b>5. Contact Information</b>

                    <br />- <b>Emergency: </b> Call [Emergency Number] for urgent medical assistance.
                    <br />- <b>General Inquiries: </b> 0261 &nbsp;2509502
                    <br />- <b>Email:</b> [Hospital Email]
                    <br />- <b>Location:</b> Swati Society, Chikuwadi, Varachcha Road, Surat.
                </div>
            </div>
        </div>
    )
}

export default GeneralGuide;
