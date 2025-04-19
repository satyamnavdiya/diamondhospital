// Sample doctors data
const doctors = [
    {
        id: 1,
        name: "Dr. Bhavesh Parmar",
        department: "GYNECOLOGY",
        experience: 9,
        imageUrl: "/IMG/doc/.png",
        bio: "Dr. Bhavesh Parmar has been serving in the field of Gynecology since 2015, bringing nearly a decade of dedicated experience in women’s healthcare. With a strong commitment to patient well-being and clinical excellence, Dr. Parmar has continually contributed to advancements in gynecological care through both practice and ongoing medical engagement.",
        education: "MBBS, DNB",
        availability: {
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }
    },
    {
        id: 2,
        name: "Dr. Pratik R. Tailor",
        department: "RADIOLOGY",
        experience: 4,
        imageUrl: "/IMG/doc/2.png",
        bio: "Dr. Pratik Tailor is a dedicated medical professional specializing in Radiology, with a total of 4 years of clinical experience. He has served 3 years at Simmer Hospital and 1 year at Kiran Hospital, where he honed his diagnostic skills and contributed to accurate and timely patient care through advanced imaging techniques. Dr. Tailor is known for his precision, commitment, and patient-centric approach in the field of radiology.",
        education: "MBBS, MO(RADIOLOGY)",
        availability: {
            morning: "Morning - Mon to Sun: 9 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 4 PM - 8 PM"
        }
    },
    {
        id: 3,
        name: "Dr. Kalpana Patel",
        department: "GYNECOLOGY",
        experience: 7,
        imageUrl: "/IMG/doc/.png",
        bio: "Dr. Kalpana Patel is a skilled and compassionate Gynecologist with 7 years of experience in women's healthcare. Throughout her career, she has been dedicated to providing comprehensive gynecological services, focusing on patient comfort, education, and evidence-based care. Dr. Patel is committed to empowering women through all stages of reproductive health with professionalism and empathy.",
        education: "MBBS, DGO",
        availability: {
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }
    },
    {
        id: 4,
        name: "Dr. Riddhi Vaghani",
        department: "GYNECOLOGY",
        experience: 13,
        imageUrl: "/IMG/doc/.png",
        bio: "Dr. Riddhi Vaghani is an experienced and dedicated Gynecologist with a rich clinical background spanning over 13 years. She has served in several reputed institutions, including 5 years at Simmer Hospital, 3 years at Gujarat Adani Institute of Medical Sciences, 1 year at Balaji Hospital, and 4 years at Dimond Hospital. Known for her compassionate care and clinical expertise, Dr. Vaghani has consistently provided high-quality healthcare services to women across all stages of life.",
        education: "MBBS, MS, OBS & GYN",
        availability: {
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }
    },
    {
        id: 5,
        name: "Dr. Akash G. Sanghani",
        department: "OPHTHALOMOLOGY",
        experience: 2,
        imageUrl: "/IMG/doc/5.png",
        bio: "Dr. Akash Sanghani is a dedicated Ophthalmologist with 2 years of experience in private practice. He specializes in diagnosing and treating a wide range of eye conditions, with a focus on personalized patient care and the latest advancements in eye health. Dr. Sanghani is committed to preserving and enhancing vision through expert clinical services and a patient-first approach.",
        education: "MBBS, MS",
        availability: {
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }
    },
    {
        id: 6,
        name: "Dr. Amisha Jain Gupta",
        department: "Cardiology",
        experience: 17,
        imageUrl: "/IMG/doc/Dr. Amisha Jain.png",
        bio: "Dr. Amisha Jain Gupta is a highly experienced Ophthalmologist with 17 years of expertise in the field of eye care. Throughout her extensive career, she has been committed to delivering exceptional ophthalmic services, ranging from routine eye exams to advanced surgical procedures. Known for her precision, compassionate care, and deep knowledge of ocular health, Dr. Gupta has earned the trust of countless patients and continues to contribute significantly to the field of ophthalmology.",
        education: "MBBS, DNB",
        availability:{
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }
    },
    {
        id: 7,
        name: "Dr.Dhara Ranpariya",
        department: "DENTAL",
        experience: 5,
        imageUrl: "/IMG/doc/Dr. Dental.png",
        bio: "Dr. Dhara Ranpariya is a committed and skilled Dental Surgeon with over 5 years of clinical experience in the field of dentistry. She has worked at several reputable healthcare centers, including Puna Shaurashtra Dental Clinic (1 year), Dwarkesh Surgery and Trauma Center (1 year), Prayosa Dental Clinic (2 years), and has recently completed 1 year at Recent Hospital. Known for her gentle approach and attention to detail, Dr. Ranpariya provides quality dental care with a strong focus on patient comfort and long-term oral health.",
        education: "BDS",
        availability: {
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }
    },
    {
        id: 8,
        name: "Dr. Nirali Panseriya",
        department: "DENTAL",
        experience: 9,
        imageUrl: "/IMG/doc/Dr. Dental 2.png",
        bio: "Dr. Nirali Panseriya is an accomplished Dental Surgeon with over 9 years of experience in the field of dentistry. Her professional journey includes 1 year at Pradhyuman Dental Clinic, 3 years of running her own clinic, 2 years at Goti Dental Hospital, and 3 years at Diamond Hospital. With a deep commitment to patient care and clinical excellence, Dr. Panseriya is known for her expertise in a wide range of dental procedures, along with her patient-friendly approach and focus on long-term oral health.",
        education: "BDS",
        availability: {
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }
    },
    {
        id: 9,
        name: "Dr. Khushi Mavani",
        department: "PHYSIOTHERAPY",
        experience: 2,
        imageUrl: "/IMG/doc/.png",
        bio: "Dr. Khushi Mavani is a passionate and dedicated Physiotherapist who has recently started her professional journey in the field of physical therapy. As a fresher, she is committed to helping patients improve their mobility, reduce pain, and regain strength through tailored therapeutic treatments. Dr. Mavani brings a fresh perspective to physiotherapy with a focus on holistic care and patient well-being.",
        education: "Bachelor of Physiotherapy",
        availability: {
            evening: "Evening - Mon to Sun: 1 PM - 7 PM"
        }
    }, 
    {
        id: 10,
        name: "Dr. Mittal Vaddoriya",
        department: "PHYSIOTHERAPY",
        experience: 2,
        imageUrl: "/IMG/doc/.png",
        bio: "Dr. Mittal Vaddoriya is a skilled Physiotherapist with extensive experience working at Metas Adventist Hospital. With a strong commitment to improving patient mobility and quality of life, Dr. Vaddoriya utilizes a combination of evidence-based therapeutic techniques to treat various musculoskeletal and neurological conditions. Her patient-centered approach ensures that each individual receives personalized care tailored to their specific needs.",
        education: "Bachelor of Physiotherapy",
        availability: {
            evening: "Evening - Mon to Sun: 1 PM - 7 PM"
        }
    }, 
    {
        id: 11,
        name: "Dr. Karina Ribadiya",
        department: "PHYSIOTHERAPY",
        experience: 3,
        imageUrl: "/IMG/doc/.png",
        bio: "Dr. Karina Ribadiya is a dedicated Physiotherapist with 2 years of experience at P P Savani Hospital. She specializes in helping patients recover from injuries, manage chronic pain, and improve mobility through personalized physiotherapy treatments. Dr. Ribadiya is committed to providing compassionate care and evidence-based interventions to support patients on their journey to better physical health.",
        education: "Bachelor of Physiotherapy",
        availability: {
            morning: "Morning - Mon to Sun: 9 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 4 PM - 8 PM"
        }
    }, 
    {
        id: 12,
        name: "Dr. Chirag Parmar",
        department: "PHYSIOTHERAPY",
        experience: 2,
        imageUrl: "/IMG/doc/7.png",
        bio: "Dr. Chirag Parmar is an enthusiastic and dedicated Physiotherapist who has recently embarked on his professional career in the field of physiotherapy. As a fresher, he is passionate about helping patients recover from injuries, alleviate pain, and improve their overall mobility through personalized treatment plans. Dr. Parmar is committed to providing high-quality care with a focus on patient well-being and rehabilitation.",
        education: "Bachelor of Physiotherapy",
        availability: {
            morning: "Morning - Mon to Sun: 9 AM - 12 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }
    }, 
    {
        id: 13,
        name: "Dr. Gaurav Raiyani",
        department: "GENERAL MEDICINE",
        experience: 8,
        imageUrl: "/IMG/doc/6.png",
        bio: "Dr. Gaurav Raiyani is a highly experienced General Medicine specialist with 8 years of expertise in patient care. He has worked at renowned institutions such as New Civil Hospital (4.5 years) and Simmer Hospital (3.5 years), where he provided comprehensive medical care for a wide range of acute and chronic conditions. Dr. Raiyani is known for his thorough approach to diagnosis and treatment, along with his commitment to patient well-being and continuous professional development.",
        education: "MBBS, MD(GENRAL MEDICINE), FELLOWSHIP IN 2D ECHO, FELLOWSHIP IN DIABETES MANAGEMENT, FELLOWSHIP THYROID DESEASE MANAGEMENT",
        availability: {
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }, 
    },
    {
        id: 14,
        name: "Dr. Kamlesh Patel",
        department: "OPHTHALOMOLOGY",
        experience: 2,
        imageUrl: "/IMG/doc/1.png",
        bio: "Dr. Kamlesh Patel is a passionate and dedicated Ophthalmologist who has recently begun his professional career in the field of eye care. As a fresher, he is eager to provide high-quality ophthalmic services, focusing on diagnosing and treating a variety of eye conditions. Dr. Patel is committed to offering compassionate care and staying updated with the latest advancements in ophthalmology to ensure the best possible outcomes for his patients.",
        education: "MBBS, MS",
        availability: {
            morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
            evening: "Evening - Mon to Sun: 5 PM - 8 PM"
        }, 
    }

];

export default doctors;