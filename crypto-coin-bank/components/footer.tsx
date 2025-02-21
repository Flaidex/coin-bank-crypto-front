"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function Footer() {
    return (
        <div className="bg-[#F7F6FE] bg-cover">
            <footer className="max-w-7xl mx-auto py-12 px-4 space-y-16">
                {/* Sign In Banner */}
                <div className="flex flex-col md:flex-row items-start p-6 md:p-[88px_64px_112px] isolate w-full lg:w-[1120px] lg:h-[440px] bg-[#FF6E00] rounded-[24px] relative">
                    <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
                        {/* Left Side: Text & Button */}
                        <div className="space-y-3">
                            <div className="flex flex-col items-start text-white">
                                <h2 className="text-3xl md:text-[40px] font-medium leading-[140%] tracking-[-0.01em] font-inter">
                                    Sign in now
                                    <span className="text-[#FFE0C8]">
                                        {" "}
                                        to get <br /> $50 worth of
                                    </span>{" "}
                                    <br />
                                    <span className="text-[#FFE0C8]">crypto</span>
                                </h2>
                            </div>
                            <div>
                                <button className="bg-white text-[#FF6E00] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* Right Side: Phone Image & QR Code */}
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="relative w-full md:w-[300px] h-[393px] flex items-center justify-center">
                                <Image src="/phone.svg" alt="Phone" width={320} height={400} className="object-contain" />
                            </div>

                            <div className="flex flex-col items-center   flex-none order-1 ">
                                <div className="pb-5">
                                    <Image src="/qr.svg" alt="QR Code" width={140} height={140} className="mx-auto" />
                                </div>
                                <Image src="/arr.svg" alt="Arr" width={16} height={32} className="mx-auto" />

                                <div className="pt-4 text-[#FFFFFF] text-sm text-center">
                                    Scan to download
                                    <br />
                                    Coinbank wallet
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="flex flex-col md:flex-row items-start p-6 md:p-[64px_32px_58px_64px] gap-8 md:gap-[96px] w-full bg-white rounded-[24px]">
                    <div className="w-full max-w-[1124px] mx-auto px-4">
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8">
                            {/* Logo & Language */}
                            <div className="col-span-2 md:col-span-2 flex flex-col justify-start items-start gap-6">
                                <div className="flex flex-col justify-start items-start gap-4">
                                    <div className="flex pt-6 items-center gap-2 p-1 w-[42px] h-[40px]">
                                        <Image src="/bgico.svg" alt="" width={42} height={42} />
                                    </div>

                                    <Select defaultValue="english">
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Select Language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="english">English</SelectItem>
                                            <SelectItem value="spanish">Spanish</SelectItem>
                                            <SelectItem value="french">French</SelectItem>
                                        </SelectContent>
                                    </Select>

                                    {/* Social Icons */}
                                    <div className="flex gap-6 text-gray-400">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <a key={num} href="#" className="hover:text-gray-600">
                                                <Image src={`/s${num}.svg`} alt="" width={20} height={20} />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Copyright */}
                                <div className="w-full md:w-[187px] h-[20px] pt-4 text-left md:text-center text-[#9C9CAB] text-sm leading-[145%] font-inter">
                                    <p className="text-gray-500 text-sm">Copyright 2022 © Coinbank</p>
                                </div>
                            </div>

                            {/* Footer Links */}
                            {[
                                {
                                    title: "Company",
                                    links: ["About", "Careers", "Affiliates", "Press", "Investors", "Legal & Privacy"],
                                },
                                {
                                    title: "Features",
                                    links: ["Buy & Sell Crypto", "Wallet", "Card", "Dashboard", "Trading", "Portfolio"],
                                },
                                {
                                    title: "Developers",
                                    links: ["Cloud", "Wallet SDK", "Query & Transact", "Commerce", "Exchange & Pro", "API Access"],
                                },
                                { title: "Resources", links: ["Blog", "Help & Support", "Customer Stories", "FAQ"] },
                            ].map((section, index) => (
                                <div key={index} className="space-y-4">
                                    <h3 className="font-semibold">{section.title}</h3>
                                    <ul className="space-y-2">
                                        {section.links.map((link, i) => (
                                            <li key={i}>
                                                <a href="#" className="text-gray-500 hover:text-gray-900">
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

