
"use client"
import BG from "@/assert/bgico.svg"
import logo from "@/assert/logot.svg"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="flex flex-col items-start p-6 gap-2 w-full bg-white bg-opacity-40 backdrop-blur-lg relative">
            {/* Top Navigation */}
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto">


                <div className="flex items-center gap-2">
                    <a href="/" className="w-8 h-6">
                        <Image src={BG || "/bgco.svg"} alt="BG" />
                    </a>
                    <span className="flex items-center space-x-2">
                        <a href="/">
                            <Image src={logo || "/bgco.svg"} alt="Coinbank Logo" width={116} height={20} />
                        </a>
                    </span>
                </div>


                {/* Center: Menu Items (Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-black flex items-center gap-1">
                                Features <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                            <DropdownMenuItem>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n1.svg" alt="N2" width={24} height={24} />


                                    </div>
                                    Funding
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n2.svg" alt="N2" width={24} height={24} />
                                    </div>
                                    Staking
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n3.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    Liquidity
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n4.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    Margin Trading
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant="ghost" className="text-black">
                        <a href="#">Prices</a>
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="text-black flex items-center gap-1">
                                Company <ChevronDown className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48">
                            <DropdownMenuItem>
                                <a href="/about" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n5.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    About
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="/blog" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n6.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    Blog
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n7.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    FAQs
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <a href="#" className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <Image src="/n8.svg" alt="N2" width={24} height={24} />

                                    </div>
                                    Support
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant="ghost" className="text-black">
                        <a href="#">Developers</a>
                    </Button>
                </div>

                {/* Right Side: Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Button className="text-black bg-white border border-[#FFE0C8] hover:bg-[#FF6E00] hover:text-white rounded-lg px-6 py-2 transition-colors duration-300">
                        <a href="#">Sign In</a>
                    </Button>
                    <Button className="bg-white border border-[#FFE0C8] text-[#FF6E00] hover:bg-[#FF6E00] hover:text-white rounded-lg px-6 py-2 transition-colors duration-300">
                        <a href="#">Get Started</a>
                    </Button>
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50">
                    <div className="flex flex-col items-start gap-4 p-4">
                        {/* Features Dropdown */}
                        <div className="w-full">
                            <Button variant="ghost" className="text-black w-full justify-start" onClick={toggleMenu}>
                                Features
                            </Button>
                            <div className="pl-4 space-y-2 mt-2">
                                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 1.75C4.10051 1.75 1.75 4.10051 1.75 7C1.75 9.89949 4.10051 12.25 7 12.25C9.89949 12.25 12.25 9.89949 12.25 7C12.25 4.10051 9.89949 1.75 7 1.75ZM7 0.25C10.7279 0.25 13.75 3.27208 13.75 7C13.75 10.7279 10.7279 13.75 7 13.75C3.27208 13.75 0.25 10.7279 0.25 7C0.25 3.27208 3.27208 0.25 7 0.25Z"
                                                fill="#FF6E00"
                                            />
                                            <path
                                                d="M7 3.5V4.375M7 9.625V10.5M7 6.125V7.875"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </div>
                                    Funding
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.875 1.75L2.625 8.75H7L6.125 12.25L11.375 5.25H7L7.875 1.75Z"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    Staking
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 1.75L9.625 6.125L7 10.5L4.375 6.125L7 1.75Z"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.625 8.75L4.375 11.375L7 12.25L9.625 11.375L11.375 8.75"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    Liquidity
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.75 10.5L5.25 7L7.875 9.625L12.25 5.25"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.75 5.25H12.25V8.75"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    Margin Trading
                                </a>
                            </div>
                        </div>

                        <Button variant="ghost" className="text-black w-full justify-start" onClick={toggleMenu}>
                            <a href="#">Prices</a>
                        </Button>

                        {/* Company Dropdown */}
                        <div className="w-full">
                            <Button variant="ghost" className="text-black w-full justify-start" onClick={toggleMenu}>
                                Company
                            </Button>
                            <div className="pl-4 space-y-2 mt-2">
                                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11.375 12.25V3.5L7.875 1.75L4.375 3.5V12.25H11.375Z"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M2.625 12.25V5.25L4.375 3.5"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M6.125 5.25H9.625" stroke="#FF6E00" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6.125 7.875H9.625" stroke="#FF6E00" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M6.125 10.5H9.625" stroke="#FF6E00" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    About
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.875 1.75H3.5C3.03587 1.75 2.59075 1.93437 2.26256 2.26256C1.93437 2.59075 1.75 3.03587 1.75 3.5V10.5C1.75 10.9641 1.93437 11.4092 2.26256 11.7374C2.59075 12.0656 3.03587 12.25 3.5 12.25H10.5C10.9641 12.25 11.4092 12.0656 11.7374 11.7374C12.0656 11.4092 12.25 10.9641 12.25 10.5V6.125"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M11.375 2.625L7 7"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M8.75 1.75H12.25V5.25"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    Blog
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 12.25C9.89949 12.25 12.25 9.89949 12.25 7C12.25 4.10051 9.89949 1.75 7 1.75C4.10051 1.75 1.75 4.10051 1.75 7C1.75 9.89949 4.10051 12.25 7 12.25Z"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7 9.625V7"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7 4.375H7.00875"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    FAQs
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
                                    <div className="w-5 h-5 rounded bg-orange-100 flex items-center justify-center">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.75 6.125V7C1.75 9.89949 4.10051 12.25 7 12.25C9.89949 12.25 12.25 9.89949 12.25 7V6.125"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M7 12.25V10.5"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M10.5 7.875C10.5 7.875 9.625 8.75 7 8.75C4.375 8.75 3.5 7.875 3.5 7.875V3.5C3.5 3.5 4.375 1.75 7 1.75C9.625 1.75 10.5 3.5 10.5 3.5V7.875Z"
                                                stroke="#FF6E00"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    Support
                                </a>
                            </div>
                        </div>

                        <Button variant="ghost" className="text-black w-full justify-start" onClick={toggleMenu}>
                            <a href="#">Developers</a>
                        </Button>

                        <Button
                            className="text-black bg-white border border-[#FFE0C8] hover:bg-[#FF6E00] hover:text-white rounded-lg px-6 py-2 transition-colors duration-300 w-full"
                            onClick={toggleMenu}
                        >
                            <a href="#">Sign In</a>
                        </Button>

                        <Button
                            className="bg-white border border-[#FFE0C8] text-[#FF6E00] hover:bg-[#FF6E00] hover:text-white rounded-lg px-6 py-2 transition-colors duration-300 w-full"
                            onClick={toggleMenu}
                        >
                            <a href="#">Get Started</a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}


export default nav