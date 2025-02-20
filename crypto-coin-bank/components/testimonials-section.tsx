import N from "@/public/new.svg";
import { Star } from "lucide-react";
import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <section
            className="bg-cover bg-center bg-no-repeat lg:h-[800px] lg:w-full"
            style={{
                backgroundImage: `url('${N.src}')`,
            }}
        >

            <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
                <div className="flex flex-col items-center justify-center text-center space-y-6 w-full">
                    <p className="text-orange-500 font-medium tracking-wide">TESTIMONIALS</p>
                    <h2 className="text-3xl font-bold">Trusted by more than 100K+ people</h2>
                    <p className="text-[#717184] text-sm">
                        Hear what they say about us and why you should choose Coinbank
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Testimonial Card 1 */}
                    <div className="flex flex-col items-center p-12 gap-6 bg-white rounded-2xl shadow-lg w-[352px] h-[334px]">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-orange-500 stroke-orange-500" />
                            ))}
                        </div>
                        <p className="text-center text-sm leading-relaxed">
                            "Cool crypto currency, fast withdrawals and deposits, way better than any wallet."
                        </p>
                        <div className="flex items-center gap-3">
                            <Image src="/jj.png" alt="Avatar" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-medium">Abel Shelton</p>
                                <p className="text-sm text-[#717184]">Customer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="flex flex-col items-center p-12 gap-6 bg-white rounded-2xl shadow-lg w-[352px] h-[334px]">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-orange-500 stroke-orange-500" />
                            ))}
                        </div>
                        <p className="text-center text-sm leading-relaxed">
                            "It's worth it, very intuitive and easy to learn about cryptocurrencies."
                        </p>
                        <div className="flex items-center gap-3">
                            <Image src="/jon.png" alt="Avatar" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-medium">John Clayton</p>
                                <p className="text-sm text-[#717184]">Customer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="flex flex-col items-center p-12 gap-6 bg-white rounded-2xl shadow-lg w-[352px] h-[334px]">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-orange-500 stroke-orange-500" />
                            ))}
                        </div>
                        <p className="text-center text-sm leading-relaxed">
                            "Best customer service so far. Amazing in all areas, best centralized exchange."
                        </p>
                        <div className="flex items-center gap-3">
                            <Image src="/sava.png" alt="Avatar" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-medium">Savanna Bridges</p>
                                <p className="text-sm text-[#717184]">Customer</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Crypto Icons Section */}
                <div className="bg-[#14162E] rounded-2xl p-6 flex items-center justify-between">
                    <div className="flex gap-3">
                        <Image src="/bitcoin.svg" alt="Bitcoin" width={32} height={32} />
                        <Image src="/ethereum.svg" alt="Ethereum" width={32} height={32} />
                        <Image src="/tether.svg" alt="Tether" width={32} height={32} />
                        <Image src="/bnb.svg" alt="BNB" width={32} height={32} />
                        <Image src="/usdc.svg" alt="USDC" width={32} height={32} />
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <span className="text-sm">New assets added regularly</span>
                        <span className="text-2xl">+</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
