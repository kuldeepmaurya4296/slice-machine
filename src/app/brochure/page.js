import { ContactForm } from "@/components/Pages/Aboutus/ContactForm";
import Image from "next/image";

export default function page() {
    return (
        <main className="min-h-screen text-center mt-16">
            <Image
                src={'/hero.jpg'}
                width={1200}
                height={400}
                alt="abcdef"
                className="w-full object-cover"
            />
            <h1 className="py-6 text-3xl text-[#c69240]">Download NOVA uPVC Windows Brochure</h1>
            <p>Please fill in the details below.        </p>
           <div className="text-start py-4">
           <ContactForm />
           </div>
        </main>
    );
}
