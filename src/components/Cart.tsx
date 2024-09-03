"use client";
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import { FaShoppingCart } from 'react-icons/fa';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const Cart = () => {
    const itemCount = 0;
    const price = 1;
    const fee = 1;
    return (
        <Sheet>
            <SheetTrigger className="flex items-center space-x-2">
                <FaShoppingCart aria-hidden={true} className="text-sm" />
                <span className="text-base">Cart</span>
            </SheetTrigger>
            <SheetContent className='flex flex-col w-full'>
                <SheetHeader>
                    <SheetTitle>Cart {0}</SheetTitle>
                </SheetHeader>
                {
                    itemCount > 0 ? <SheetContent className='flex flex-col'>
                        <div className='flex-1'>
                            <h1 className='heading'>Cart <span className='text-shiny text-lg'>({itemCount})</span></h1>
                            <div className='mt-12'>
                                <div>
                                    <h2 className='subheading'>Cart Items</h2>
                                </div>
                                <Separator className='my-6' />
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-base py-2'>Shipping</h3>
                                    <span className='text-shiny text-sm'>Free</span>
                                </div>
                                <div className='flex items-centr justify-between'>
                                    <h3 className='text-base py-2'>Transaction Fee</h3>
                                    <span className='text-shiny text-sm'>{formatPrice(fee, {
                                        currency: 'INR'
                                    })}</span>
                                </div>
                                <div className='flex items-centr justify-between'>
                                    <h3 className='text-base py-2'>Total</h3>
                                    <span className='text-shiny text-sm'>{formatPrice(price, {
                                        currency: 'INR'
                                    })}</span>
                                </div>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href="/cart" className={buttonVariants(
                                    {
                                        className: 'w-full '
                                    }
                                )}>Continue</Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </SheetContent> : <SheetContent className='flex flex-col'>
                        <div className='flex-1'>
                            <h1 className='heading'>Cart</h1>
                            <h2 className='subheading'>Your cart is empty.</h2>
                        </div>
                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href="products" className={buttonVariants(
                                    {
                                        className: 'w-full',
                                    }
                                )}>Check Products</Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </SheetContent>
                }
            </SheetContent>
        </Sheet>
    )
}

export default Cart