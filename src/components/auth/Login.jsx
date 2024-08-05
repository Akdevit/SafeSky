import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignedOut, SignIn, useSession } from '@clerk/clerk-react';
import Nav from '../layout/Nav';

const Login = () => {
  const navigate = useNavigate();
  const { session } = useSession();

  useEffect(() => {
    if (session) {
      navigate('/dashboard/weather');
    }
  }, [session, navigate]);

  return (
    <>
      <Nav />
      <div className="w-full h-full flex justify-center items-center py-12">
        <SignedOut>
          <SignIn />
        </SignedOut>
      </div>
    </>
  );
};

export default Login;
