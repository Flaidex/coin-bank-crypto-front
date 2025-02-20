"use client"

import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto py-12 px-4 space-y-16">


            {/* Sign In Banner */}
            <div className="bg-[#FF6E00] text-white rounded-xl mx-4 mb-16 overflow-hidden">
                <div className="flex items-center justify-between p-8">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-2xl font-medium">Sign in now to get</h3>
                            <p className="text-3xl font-bold">$50 worth of crypto</p>
                        </div>
                        <Button className="bg-white text-[#FF6E00] hover:bg-gray-100">
                            Get Started
                        </Button>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="bg-white rounded-xl p-4 shadow-lg">
                            <div className="space-y-1">
                                <div className="text-black text-sm">Last price</div>
                                <div className="text-black font-bold">$6278.13</div>
                                <div className="text-gray-500 text-sm">Volume (24h)</div>
                                <div className="text-black font-bold">38.25 BTC</div>
                            </div>
                            <div className="mt-4 h-24 w-48">
                                {/* Chart placeholder */}
                                <div className="w-full h-full bg-gradient-to-b from-orange-100 to-transparent rounded" />
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white p-2 rounded-xl mb-2">
                                <Image
                                    src="/placeholder.svg?height=80&width=80"
                                    alt="QR Code"
                                    width={80}
                                    height={80}
                                    className="w-20 h-20"
                                />
                            </div>
                            <div className="text-sm">
                                Scan to download
                                <br />
                                Coinbank wallet
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="max-w-7xl mx-auto px-4 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                    {/* Logo and Language */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="flex items-center gap-2 p-1 w-[42px] h-[40px]">
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
                        <div className="flex gap-4 text-gray-400">
                            <a href="#" className="hover:text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-600">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">About</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Careers</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Affiliates</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Press</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Investors</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Legal & Privacy</a></li>
                        </ul>
                    </div>

                    {/* Features Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Features</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Buy & Sell Crypto</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Wallet</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Card</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Dashboard</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Trading</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Portfolio</a></li>
                        </ul>
                    </div>

                    {/* Developers Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Developers</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Cloud</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Wallet SDK</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Query & Transact</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Commerce</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Exchange & Pro</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">API Access</a></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Blog</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Help & Support</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">Customer Stories</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-900">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-500 text-sm">Copyright 2022 © Coinbank</p>
                </div>
            </div>
        </footer>
    )
}
