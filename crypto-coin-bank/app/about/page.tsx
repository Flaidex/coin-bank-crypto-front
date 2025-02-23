
import Footer from '../../components/footer';
import Nav from '../../components/nav';

import IC1 from "@/assert/ic1.svg";
import IC2 from "@/assert/ic2.svg";
import IC3 from "@/assert/ic3.svg";
import IC4 from "@/assert/ic4.svg";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";





const page = () => {
    return (
        <div>
            <Nav />
            <div className="min-h-screen bg-background">
                {/* Header */}


                <main className="pb-20">
                    {/* Hero Section */}
                    <section className="container mx-auto px-4 pt-12 pb-20">
                        <div className="max-w-[800px] mx-auto text-center">
                            <span className="text-orange-500 text-sm font-medium">ABOUT</span>
                            <h1 className="text-4xl md:text-[40px] font-bold mt-4 mb-12 leading-tight">
                                Building cryptocurrency
                                <br />
                                platform for everyone
                            </h1>
                            <div className="rounded-2xl overflow-hidden">
                                <Image
                                    src="/about.png"
                                    alt="Team collaboration"
                                    width={800}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className="container mx-auto px-4 py-16">
                        <div className="grid md:grid-cols-[1.5fr,1fr] gap-16 max-w-[1000px] mx-auto">
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                                <p className="text-gray-600 mb-6">
                                    Every person could use resources offered via all blockchain for personal gain. We offer the ecosystem to
                                    do so with ease. Each member receives professional support from a dedicated group. Money makes credit
                                    card approach difficult and all steps to gain.
                                </p>
                                <a href="#" className="text-orange-500 font-medium hover:underline">
                                    Learn more
                                </a>
                            </div>
                            <div className="flex flex-col gap-4 w-[448px]">
                                {/* First Box */}
                                <div className="flex flex-col justify-center items-start w-full p-8 bg-white border border-[#E7E3FC] rounded-xl">
                                    <div className="text-2xl font-bold text-gray-900">1 million+</div>
                                    <div className="text-sm text-gray-500">Average daily volume</div>
                                </div>

                                {/* Second Box */}
                                <div className="flex flex-col justify-center items-start w-full p-8 bg-white border border-[#D1D5DB] rounded-xl">
                                    <div className="text-2xl font-bold text-gray-900">300%+</div>
                                    <div className="text-sm text-gray-500">Transaction per second</div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* Quote Section */}
                    <section className="container mx-auto px-4 py-16">
                        <div className="max-w-[600px] mx-auto text-center">
                            <div className="flex flex-col items-center text-center max-w-[736px] mx-auto space-y-4">
                                <span className="text-[#FF6E00] text-[80px] leading-[110%] font-medium">“</span>

                                <blockquote className="text-[#0E0637] text-[40px] leading-[140%] font-medium">
                                    Its low fees, high rates for staking, and futures markets are all a draw.
                                </blockquote>

                                <span className="text-[#FF6E00] text-[80px] leading-[110%] font-medium">”</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                                <span className="text-sm font-medium">John Doe</span>
                            </div>
                        </div>
                    </section>

                    {/* Two Images Section */}
                    <section className="container mx-auto px-4 py-16">
                        <div className="max-w-[1000px] mx-auto">
                            <div className="grid md:grid-cols-2 gap-6 mb-16">
                                <div className="rounded-2xl overflow-hidden">
                                    <Image
                                        src="/about1.png"
                                        alt="Team working"
                                        width={480}
                                        height={320}
                                        className="w-full"
                                    />
                                </div>
                                <div className="rounded-2xl overflow-hidden">
                                    <Image
                                        src="/image.png"
                                        alt="Person working"
                                        width={480}
                                        height={320}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                            <div className="max-w-[480px]">
                                <h2 className="text-3xl font-bold mb-4">The power to chart your own financial course</h2>
                                <p className="text-gray-600">
                                    Every person could use resources offered via all blockchain for personal gain. We offer the ecosystem to
                                    do so with ease. Each member receives professional support from a dedicated group.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Founders Section */}
                    <section className="container mx-auto px-4 py-16">
                        <h2 className="text-xl font-semibold text-center mb-12">Our Founders</h2>
                        <div className="grid md:grid-cols-3 gap-12 max-w-[800px] mx-auto">
                            {[
                                { name: "Clark Kent", role: "Founder & CEO", bgColor: "bg-orange-500" },
                                { name: "Ali Price", role: "Founder & CTO", bgColor: "bg-blue-600" },
                                { name: "Miranda Nielsen", role: "Founder & COO", bgColor: "bg-yellow-500" },
                            ].map((founder) => (
                                <div key={founder.name} className="text-center">
                                    <div className={`w-28 h-28 ${founder.bgColor} rounded-full mx-auto mb-4`}></div>
                                    <h3 className="font-medium mb-1">{founder.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4">{founder.role}</p>
                                    <div className="flex justify-center gap-2">
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Twitter className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Linkedin className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Partners Section */}
                    <section className="container mx-auto px-4 py-16">
                        <div className="text-center">
                            <span className="text-orange-500 text-sm font-medium">PARTNERS</span>
                            <h2 className="text-xl font-semibold mt-2 mb-2">We're backed by the best</h2>
                            <p className="text-sm text-gray-500 mb-12">Trusted by these innovative leading companies</p>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center justify-items-center">
                                <Image src={IC1} alt="IC1" className="w-171 h-32" />
                                <Image src={IC2} alt="IC2" className="w-171 h-32" />
                                <Image src={IC3} alt="IC3" className="w-171 h-32" />
                                <Image src={IC4} alt="IC4" className="w-171 h-32" />
                            </div>
                        </div>
                    </section>

                    {/* Join Mission CTA */}
                    <section className="container mx-auto px-4 py-16">
                        <div className="bg-[#14162E] text-white rounded-3xl p-12 text-center max-w-[1000px] mx-auto">
                            <h2 className="text-2xl font-bold mb-4">Join our mission</h2>
                            <p className="text-gray-300 mb-8 max-w-[600px] mx-auto">
                                Join our mission to bring greater choice, independence, and opportunity by reimagining money for users.
                            </p>
                            <Button className="bg-orange-500 hover:bg-orange-600">See Career Page</Button>
                        </div>
                    </section>


                </main>


            </div>
            <Footer />
        </div>
    )
}

export default page