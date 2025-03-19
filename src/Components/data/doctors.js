// Sample doctors data
const doctors = [
    {
        id: 1,
        name: "Dr. Chirag Parmar",
        department: "Physiotherapy",
        specialty: "Interventional Cardiology",
        experience: 12,
        imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        bio: "Dr. Sarah Johnson is a board-certified cardiologist specializing in interventional procedures. With over 12 years of experience, she has performed more than 1,000 cardiac catheterizations and stent placements.",
        education: "MD from Johns Hopkins University",
        contact: {
            email: "sarah.johnson@medcenter.com",
            phone: "(555) 123-4567",
            office: "Medical Center, Building A, Room 305"
        },
        availability: "Mon, Wed, Fri: 9AM-5PM"
    },
    {
        id: 2,
        name: "Dr. Michael Chen",
        department: "Neurology",
        specialty: "Neurological Surgery",
        experience: 15,
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        bio: "Dr. Michael Chen is a renowned neurosurgeon with expertise in complex brain and spine surgeries. He has pioneered several minimally invasive techniques that have improved patient outcomes.",
        education: "MD from Stanford University, Neurosurgery Residency at Mayo Clinic",
        contact: {
            email: "michael.chen@medcenter.com",
            phone: "(555) 234-5678",
            office: "Neuroscience Center, Floor 4, Suite 412"
        },
        availability: "Tue, Thu: 8AM-4PM"
    },
    {
        id: 3,
        name: "Dr. Emily Rodriguez",
        department: "Pediatrics",
        specialty: "Pediatric Oncology",
        experience: 8,
        imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        bio: "Dr. Emily Rodriguez specializes in pediatric cancer treatment with a compassionate approach to care. She is actively involved in clinical research to develop new therapies for childhood cancers.",
        education: "MD from University of California, San Francisco",
        contact: {
            email: "emily.rodriguez@medcenter.com",
            phone: "(555) 345-6789",
            office: "Children's Hospital, Wing B, Room 210"
        },
        availability: "Mon-Fri: 10AM-3PM"
    },
    {
        id: 4,
        name: "Dr. James Wilson",
        department: "Orthopedics",
        specialty: "Sports Medicine",
        experience: 10,
        imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        bio: "Dr. James Wilson is an orthopedic surgeon specializing in sports-related injuries. He has served as a team physician for several professional sports teams and has treated many elite athletes.",
        education: "MD from Duke University, Fellowship in Sports Medicine",
        contact: {
            email: "james.wilson@medcenter.com",
            phone: "(555) 456-7890",
            office: "Sports Medicine Center, Suite 150"
        },
        availability: "Mon, Wed, Fri: 7AM-3PM"
    },
    {
        id: 5,
        name: "Dr. Lisa Patel",
        department: "Dermatology",
        specialty: "Cosmetic Dermatology",
        experience: 7,
        imageUrl: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        bio: "Dr. Lisa Patel is a dermatologist with expertise in both medical and cosmetic procedures. She is known for her artistic approach to facial rejuvenation and skin care treatments.",
        education: "MD from University of Pennsylvania, Dermatology Residency at NYU",
        contact: {
            email: "lisa.patel@medcenter.com",
            phone: "(555) 567-8901",
            office: "Dermatology Clinic, Floor 2, Room 215"
        },
        availability: "Tue, Thu: 9AM-6PM, Sat: 9AM-12PM"
    },
    {
        id: 6,
        name: "Dr. Robert Kim",
        department: "Cardiology",
        specialty: "Electrophysiology",
        experience: 14,
        imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        bio: "Dr. Robert Kim is a cardiac electrophysiologist who specializes in heart rhythm disorders. He has performed over 2,000 ablation procedures and pacemaker implantations.",
        education: "MD from Columbia University, Cardiology Fellowship at Cleveland Clinic",
        contact: {
            email: "robert.kim@medcenter.com",
            phone: "(555) 678-9012",
            office: "Heart Center, Floor 3, Suite 320"
        },
        availability: "Mon, Tue, Thu: 8AM-5PM"
    },
    {
        id: 7,
        name: "Dr. Amanda Taylor",
        department: "Neurology",
        specialty: "Stroke Medicine",
        experience: 9,
        imageUrl: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        bio: "Dr. Amanda Taylor is a neurologist specializing in stroke prevention and treatment. She leads the hospital's stroke response team and has implemented protocols that have significantly improved patient outcomes.",
        education: "MD from Yale University, Neurology Residency at Massachusetts General Hospital",
        contact: {
            email: "amanda.taylor@medcenter.com",
            phone: "(555) 789-0123",
            office: "Neuroscience Center, Floor 3, Suite 310"
        },
        availability: "Wed, Thu, Fri: 9AM-5PM"
    },
    {
        id: 8,
        name: "Dr. David Martinez",
        department: "Pediatrics",
        specialty: "Neonatology",
        experience: 11,
        imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        bio: "Dr. David Martinez is a neonatologist who specializes in the care of premature and critically ill newborns. He has developed innovative care protocols that have reduced complications in high-risk infants.",
        education: "MD from University of Chicago, Fellowship in Neonatology at Boston Children's Hospital",
        contact: {
            email: "david.martinez@medcenter.com",
            phone: "(555) 890-1234",
            office: "Children's Hospital, NICU, Floor 2"
        },
        availability: "Mon-Fri: 7AM-7PM (On-call rotations)"
    }
];

export default doctors;