import { useState } from 'react';
import { supabase } from '../SupabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for navigation
  const [email, setEmail] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signInWithOtp({ email,options: {
      emailRedirectTo: "/check",
    } });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert('Check your email for the login link!');
      navigate('/check'); // Redirect to Check after sending magic link
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    
    const { user , error } = await supabase.auth.signInWithOAuth({ provider: 'google',  options: {
      redirectTo: "http://localhost:5173/check"
    }});

    if(error){
      console.log(error)
    }

    console.log(user)
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-lg font-bold">Supabase + React</h1>
          <p className="mb-4">Sign in via magic link with your email below</p>
          
          <form className="mb-4" onSubmit={handleLogin}>
            <input
              className="input input-bordered w-full mb-4"
              type="email"
              placeholder="Your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className={`btn btn-primary w-full`} disabled={loading}>
              {loading ? <span>Loading...</span> : <span>Send magic link</span>}
            </button>
          </form>

          <div className="text-center mb-2">OR</div>

          <button className={`btn btn-outline w-full`} onClick={handleGoogleLogin} disabled={loading}>
            {loading ? <span>Loading...</span> : <span>Sign in with Google</span>}
          </button>
        </div>
      </div>
    </div>
  );
}
