import { ContactForm } from "@/components/Pages/Aboutus/ContactForm";
import { ContactUs } from "@/components/Pages/Homepage/ContactUs";
import HeroSection from "@/components/Pages/Homepage/HeroSection";
import { NovaHeader } from "@/components/Pages/Homepage/NovaWindowsDoors/NovaHeader";
import { Facebook, Globe, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const heroTagline = {
    heading: `Contact Us`,
    subHeading: `Discover our amazing products and services tailored just for you!`,
    image: '"/hero.jpg"'
}

const headerData = {
    heading: "Contact Us Today ",
    subheading: "",
    paragraph: `We deliver and install uPVC Windows & uPVC Doors all across the globe.
Contact us today for a quick demo from our team.
`
};

const founderData = {
    name: "Pankaj Pandey",
    designation: "Founder",
    experience: "Experience in Prominence, Saint Gobin, Aprna Okotech, and Cora UPVC profile Industry (6+ years of sales experience)",
    socialLinks: {
        instagram: "https://instagram.com/pankajpandey",
        facebook: "https://facebook.com/pankajpandey",
        twitter: "https://twitter.com/pankajpandey",
    },
};

export default function page() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-gray-50 mt-16">
            <HeroSection heading={heroTagline.heading} subHeading={heroTagline.subHeading} image={heroTagline.image} />

            <div className="flex items-center justify-center w-28 h-28 border rounded-full mt-3 lg:mt-10 py-5 border-[#c69240]">
                <Mail className="text-[#c69240] w-20 h-20" /> {/* Icon with styling */}
            </div>


            <div className="xl:px-80 lg:px-60 px-6">
                <NovaHeader heading={headerData.heading} subheading={headerData.subheading} paragraph={headerData.paragraph} className={`text-centre`} />

            </div>

            <div className="w-full flex lg:flex-row flex-col gap-10 lg:gap-0 justify-center py-10">
                <div className="w-full lg:w-1/3 order-2 ml-3">
                    <ContactForm />
                </div>
                <div className="w-full lg:w-1/3 order-1">

                    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="flex justify-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Founder"
                                className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mt-6"
                            />
                        </div>
                        <div className="text-center p-6">
                            <h2 className="text-2xl font-bold text-gray-800">{founderData.name}</h2>
                            <p className="text-xl text-gray-500 mt-2">{founderData.designation}</p>
                            <p className="text-gray-600 mt-4">{founderData.experience}</p>

                            <div className="mt-6 flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-gray-800 ">Connect with {founderData.name}</h3>
                                <div className="flex justify-center gap-4 mt-3">
                                    <a
                                        href={founderData.socialLinks.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Instagram className="fab fa-instagram text-2xl" />
                                    </a>
                                    <a
                                        href={founderData.socialLinks.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Facebook className="fab fa-facebook text-2xl" />
                                    </a>
                                    <a
                                        href={founderData.socialLinks.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Twitter className="fab fa-twitter text-2xl" />
                                    </a>
                                </div>
                                <p className="text-gray-600 mb-2">
                                    <span className="font-medium">Email: </span>
                                    <a href="mailto:novaupvc@gmail.com" className="text-gray-900 hover:text-[#c69240]">
                                        novaupvc@gmail.com
                                    </a>
                                </p>
                                <p className="text-gray-600 mb-2">
                                    <p className="text-gray-600">
                                        Phone: <Link href="tel:+91 9826057359" className="text-gray-900 hover:text-[#c69240]">+91 982605739</Link>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex flex-col mt-4 text-center items-start max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 border border-gray-200">
                       
                        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                            <Mail className="w-12 h-12 text-[#c69240]" />
                        </div>

                        
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Details</h2>
                        <p className="text-gray-600 mb-2">
                            <span className="font-medium">Email: </span>
                            <a href="mailto:novaupvc@gmail.com" className="text-gray-900 hover:text-[#c69240]">
                                novaupvc@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-600 mb-2">
                            <p className="text-gray-600">
                                Phone: <Link href="tel:+91 9826057359" className="text-gray-900 hover:text-[#c69240]">+91 982605739</Link>
                            </p>
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-medium">Phone: </span> +91 9500895005
                        </p>
                        <p className="text-gray-600">
                            <span className="font-medium">Fax: </span> +91 4255-265507
                        </p>
                    </div> */}

                </div>
            </div>


            <div className="flex items-center justify-center w-28 h-28 border rounded-full py-5  border-[#c69240]">
                <Globe className="text-[#c69240] w-20 h-20" /> {/* Icon with styling */}
            </div>
            <p className="text-[#c69240] text-xl font-bold  lg:my-6 px-6">NOVA uPVC Windows & Doors In India</p>

            <div className="w-full  py-10">
                <ContactUs />

            </div>
        </main>
    );
}
