    "use client"

    import React from "react"
    import { Users, Twitter, Linkedin } from "lucide-react"
    import TeamMemberModal from "./TeamMemberModal"

    type TeamMember = {
    name: string
    role: string
    image: string
    description: string
    detailedDescription: string
    twitter: string
    linkedin: string
    gradient: string
    }

    const TeamProfiles = () => {
    const [selectedMember, setSelectedMember] = React.useState<TeamMember | null>(null)
    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const teamMembers: TeamMember[] = [
        {
        name: "Ajay Basarur",
        role: "CEO & Co-Founder",
        image: "/AjayBasarur.png",
        description: "Deep expertise in audio/video compression, established German subsidiary of PathPartner",
        detailedDescription:
            "Ajay Basarur is very passionate about solving problems through Digital Processing. He has deep knowledge of several audio and video compression and decompression algorithms. He was the first in the world to integrate 3D video decompression on Texas Instruments platforms for the global Television market. Apart from engineering, he held various positions in pre-sales, marketing and business development worldwide. He was instrumental in setting up German subsidiary of PathPartner (now part of KPIT Automotive). As Managing Director of European operations of PathPartner, he built the Automotive business from scratch and brought in several Fortune 500 companies as customers. He had led In-Cabin Radar sensing strategy and supported major Automotive Tier1s of Europe to bring \"Child & Pet sensing products for Car OEMs globally\". He is an Alumni of SJCE, Mysore and INSEAD BUSINESS SCHOOL, France.\n\nHe is an avid book reader and a regular sports player. During his free time, he plays Badminton and is undergoing training to play at a competitive level. He loves Roller Skating and Ice Skating",
        twitter: "https://twitter.com/ajaybasarur",
        linkedin: "https://linkedin.com/in/ajaybasarur",
        gradient: "from-blue-500 to-cyan-500",
        },
        {
        name: "Radhesh Bhat",
        role: "CTO & Co-Founder",
        image: "/RadheshBhat.png",
        description: "20+ years in camera systems, AI, and digital video with multiple patents",
        detailedDescription:
            "Radhesh is a seasoned technology leader with over 20 years of expertise in digital camera systems, image processing, computer vision, deep learning, digital video codecs, camera tuning, image quality and embedded multimedia software. Before co-founding Emmetra, he played a pivotal role at PathPartner (now part of KPIT), where he established a new division dedicated to imaging and vision. This strategic move significantly expanded the company's capabilities, positioning PathPartner as one of top three players in the global imaging industry.\n\nRadhesh has extensive experience working with image signal processors (ISPs) from industry giants like Texas Instruments, Qualcomm, Broadcom etc. He has enabled to build cutting-edge camera products for leading brands, including Amazon, Meta, Motorola, GoPro, Mercedes Benz and has a proven track record in optimizing image quality to meet stringent industry standards. One of his key achievements was setting up a state-of-the-art Imaging Lab at PathPartner from scratch, which became a cornerstone of the company's technical strengths.\n\nHis work has earned him multiple patents in imaging technologies, and he has contributed significantly to the field through research publications in several international journals/conferences.\n\nRadhesh holds Bachelor's degree in electronics engineering from SDMCET, Dharwad. Outside of work, Radhesh enjoys playing tennis and cricket, reading, trekking, and staying up-to-date with the latest technology trends.\n\nNow, as CTO and co-founder of Emmetra, Radhesh continues to leverage his deep expertise to keep the company at the forefront of technological innovation.",
        twitter: "https://twitter.com/radhesh",
        linkedin: "https://linkedin.com/in/radhesh",
        gradient: "from-purple-500 to-pink-500",
        },
        {
        name: "Chethan KR",
        role: "VP, Corporate Development",
        image: "/ChethanKR.png",
        description: "Corporate development, M&A, strategic alliances expert",
        detailedDescription:
            "Chethan is a seasoned professional with over 25 years of experience in consumer electronics, multimedia systems and automotive hardware and software. He brings deep expertise in embedded software, digital television, set-top boxes, image processing, camera systems, electronic control unit (ECU) hardware and software.\n\nIn his previous role as Director at PathPartner (now a member of KPIT Group), he led a talented team of software engineers, delivering high-quality solutions and launching ECU and camera products for numerous automotive OEM's and consumer markets. His commitment to excellence has consistently driven successful outcomes.\n\nAs a founding member of his current venture, he is dedicated to building transformative technology solutions that create significant business value.\n\nHe holds a bachelor's degree in Computer Science and Engineering from Bangalore University and an MBA degree from Sikkim Manipal University. Outside of his professional pursuits, he enjoys playing badminton and exploring the great outdoors through trekking, reflecting his adventurous spirit.",
        twitter: "https://twitter.com/chethankr",
        linkedin: "https://linkedin.com/in/chethankr",
        gradient: "from-green-500 to-teal-500",
        },
    ]

    const boardMembers: TeamMember[] = [
        {
        name: "Dave Tokic",
        role: "VP, Corporate Development",
        image: "/DaveTokic.png",
        description:
            "Senior technology executive with extensive experience in corporate development and strategic partnerships",
        detailedDescription:
            "Dave is a senior technology executive with extensive experience in corporate development, revenue growth, marketing, and strategic partnerships across advanced technology sectors. With a career spanning startups and global corporations, he brings key insight into commercializing innovation and accelerating market adoption.\n\nDave currently serves as Vice President of Corporate Development at Torc Robotics, where he leads funding, M&A, and strategic alliances to advance the evolution and deployment of autonomous trucking. Prior to Torc, he was Vice President of Marketing and Strategic Partnerships at Algolux, a pioneer in AI-driven vision systems and image optimization, helping the company achieve industry leadership, revenue growth, and eventual acquisition by Torc Robotics.\n\nEarlier, as Senior Director of Worldwide Strategic Partnerships and Alliance Ecosystems at Xilinx (acquired by AMD), Dave built high-impact solutions and service alliances, empowering ecosystem partners across the semiconductor and embedded systems landscape.\n\nDave holds a Bachelor's in Electrical Engineering from Tufts University.",
        twitter: "https://twitter.com/davetokic",
        linkedin: "https://linkedin.com/in/davetokic",
        gradient: "from-orange-500 to-red-500",
        },
        {
        name: "James Prior",
        role: "Technology Marketing Leader",
        image: "/JamesPrior.png",
        description:
            "Seasoned technology marketing leader with 20+ years of experience in semiconductor and edge-compute companies",
        detailedDescription:
            "James Prior is a seasoned technology marketing leader with more than 20 years of hands-on experience guiding semiconductor and edge-compute companies through product definition, brand building, go-to-market execution, and analyst/media engagement. His unique blend of technical acumen, strategic vision, and deep industry relationships helps technology ventures from seed-stage startups to global corporations crystallize marketing messaging and value propositions to amplify market traction and outmaneuver entrenched competitors.\n\nJames holds a BSc in Electrical & Electronic Engineering from the University of Portsmouth and is based in central Texas.",
        twitter: "https://twitter.com/jamesprior",
        linkedin: "https://linkedin.com/in/jamesprior",
        gradient: "from-indigo-500 to-purple-500",
        },
        {
        name: "Dr. Prasad S Murthy",
        role: "AI Scientist & Researcher",
        image: "/Dr.PrasadSMurthy.png",
        description:
            "Leading AI scientist in healthcare with 27 patents and 35+ publications across top-tier journals",
        detailedDescription:
            "Dr. Prasad S Murthy is a leading AI scientist in the field of healthcare with 27 patents and 35+ publications across IEEE TMI, ICCAI, ISBI and SPIE. With over 20 years of experience spanning academic research, industry R&D, and translational applications, Dr. Murthy has pioneered contributions in uncertainty quantification, test-time adaptation, and self-supervised representation learning for diagnostic imaging.\n\nDr. Murthy is deeply committed to fostering academic-industry collaboration – he currently supervises doctoral students at the Indian Institute of Science (IISc) and serves as a visiting faculty member in the departments of Computational and Data Sciences and Sustainable Technologies.\n\nDr. Murthy holds a Ph.D. from INRIA Rennes, France, and has held research positions in Belgium and Switzerland. His current research focuses on building robust, responsible & generalizable AI models for clinical deployment.",
        twitter: "https://twitter.com/prasadmurthy",
        linkedin: "https://linkedin.com/in/prasadmurthy",
        gradient: "from-emerald-500 to-teal-500",
        },
    ]

    const handleMemberClick = (member: TeamMember) => {
        setSelectedMember(member)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedMember(null)
    }

    return (
        <section id="team" className="py-4 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
                <Users className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Meet Our Team</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                <span className="text-gradient">Leadership Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Industry veterans and AI pioneers driving the future of camera technology with decades of combined
                experience.
            </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {teamMembers.map((member, index) => (
                <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 relative cursor-pointer"
                onClick={() => handleMemberClick(member)}
                >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
                <div className="absolute inset-[1px] bg-card rounded-2xl z-10"></div>
                {/* Profile Image with Rounded Top Corners */}
                <div className="relative z-20">
                    <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-96 object-cover rounded-t-2xl"
                    />
                </div>

                {/* Content */}
                <div className="p-6 text-center relative z-20">
                    <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                    <p
                    className={`font-medium mb-4 transition-colors duration-300 ${
                        member.gradient === "from-blue-500 to-cyan-500"
                        ? "text-blue-600 group-hover:text-blue-500"
                        : member.gradient === "from-purple-500 to-pink-500"
                        ? "text-purple-600 group-hover:text-purple-500"
                        : "text-green-600 group-hover:text-green-500"
                    }`}
                    >
                    {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.description}</p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-4">
                    <a
                        href={member.twitter}
                        className="w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter className="w-4 h-4 text-primary" />
                    </a>
                    <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Board of Advisors Section */}
            <div className="text-center py-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
                <span className="text-gradient">Board of Advisors</span>
            </h2>
            </div>

            {/* Board Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {boardMembers.map((member, index) => (
                <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 relative cursor-pointer"
                onClick={() => handleMemberClick(member)}
                >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}></div>
                <div className="absolute inset-[1px] bg-card rounded-2xl z-10"></div>
                {/* Profile Image with Rounded Top Corners */}
                <div className="relative z-20">
                    <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-96 object-cover rounded-t-2xl"
                    />
                </div>

                {/* Content */}
                <div className="p-6 text-center relative z-20">
                    <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                    <p
                    className={`font-medium mb-4 transition-colors duration-300 ${
                        member.gradient === "from-orange-500 to-red-500"
                        ? "text-orange-600 group-hover:text-orange-500"
                        : member.gradient === "from-indigo-500 to-purple-500"
                        ? "text-indigo-600 group-hover:text-indigo-500"
                        : "text-emerald-600 group-hover:text-emerald-500"
                    }`}
                    >
                    {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.description}</p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-4">
                    <a
                        href={member.twitter}
                        className="w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter className="w-4 h-4 text-primary" />
                    </a>
                    <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        {/* Team Member Modal */}
        <TeamMemberModal member={selectedMember} isOpen={isModalOpen} onClose={handleCloseModal} />
        </section>
    )
    }

    export default TeamProfiles


