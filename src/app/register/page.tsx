'use client'
import { Button } from '@mui/material';
import '../page.module.css';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="form-login">
            <div className='title'>
                <h1>Welcome to Scrap Plan</h1>
                <p>Create an account or log in to join your orders</p>
            </div>
            <div className='login'>
                <div className='login-phone '>
                    <label>
                        Phone Number
                    </label><input type="text" placeholder="Phone number" />
                </div>
                <div className='login-password '>
                    <label>
                        Password
                    </label><input type="password" placeholder="Your Password" />
                </div>
            </div>
            <div className='button'>
                <Button>Continue</Button>
            </div>
            <div className='forgot'>
                <Button>Forgot your password</Button>
            </div>
            {/* Footer */}
            <div>
                <p>
                    Don't have an account?{' '}
                    <Button>
                        <Link href="/register">
                            Register here
                        </Link>
                    </Button>
                </p>
            </div>
        </div>
    );
};

export default Page;
