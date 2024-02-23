import React from 'react';
import { auth, signIn, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link'
import { Sign } from 'crypto';

type Props = {}

function SignOut() {
    return (
        <form action={async () => {
            'use server';
            await signOut()
        }}>
            <Button type='submit'>Sign Out</Button>
        </form>
    )
}

const Header = async (props: Props) => {
    const session = await auth();
    console.log(session);
  return (
    <header className='border bottom-1'>
        <nav className='bg-white border-gray-200 px-4 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <h1>
                    SSO App
                </h1>
                <div>
                    {
                        session?.user ? (
                            <div className='flex align-middle items-center gap-4'>
                                {session.user.name}
                                <SignOut />
                            </div>
                        ) : (
                            <Link href="/api/auth/signin">
                                <Button variant="link">Sign In</Button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header