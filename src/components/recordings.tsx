'use client';
import React from 'react';

import { useSession, signIn } from 'next-auth/react';

const Recordings = () => {
    const session = useSession();
    return (
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <div>
                    {session.data?.user &&
                        <h3>Recordings</h3>
                    }
                    {!session.data?.user &&
                        <h3>Sign In to see Recordings</h3>
                    }
                </div>
            </div>
    )
}

export default Recordings;