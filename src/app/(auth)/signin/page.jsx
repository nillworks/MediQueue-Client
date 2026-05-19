'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { toast } from '@heroui/react';
import { Lock, Mail } from 'lucide-react';

const SignInPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const validate = data => {
    const newErrors = {};

    if (!data.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!data.password) {
      newErrors.password = 'Password is required';
    } else {
      if (data.password.length < 6) {
        newErrors.password = 'Must be at least 6 characters';
      } else if (!/[A-Z]/.test(data.password)) {
        newErrors.password = 'Must include an uppercase letter';
      } else if (!/[a-z]/.test(data.password)) {
        newErrors.password = 'Must include a lowercase letter';
      }
    }

    //  Remember me validation
    if (!remember) {
      newErrors.remember = 'You must accept Remember Me';
    }

    return newErrors;
  };

  const handleLogin = async e => {
    e.preventDefault();

    const form = new FormData(e.target);
    const SignInData = Object.fromEntries(form.entries());

    const validationErrors = validate(SignInData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    // SignIn Auth Page
    const { data, error } = await authClient.signIn.email({
      email: SignInData.email, // required
      password: SignInData.password, // required
      rememberMe: true,
      callbackURL: '/',
    });

    setTimeout(() => {
      setLoading(false);
      if (data) {
        toast.success('Welcome Back MediQueue', {
          description: 'You have successfully Login in to your account.',
          variant: 'success',
        });
      }

      if (error) {
        toast.danger('Login failed', {
          description: error.message || 'Invalid email or password.',
          variant: 'danger',
        });
        return;
      }
    }, 100);
  };

  const handleGoogleSignIn = async () => {
    const { error } = await authClient.signIn.social({
      provider: 'google',
    });

    if (error) {
      toast.danger('Login failed', {
        description: error.message || 'Something went wrong',
        variant: 'danger',
      });
      return;
    }
  };

  return (
    <div className="flex pt-30 pb-10 items-center justify-center px-4 bg-gray-50 dark:bg-black">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white dark:bg-[#0B0F19] rounded-3xl shadow-xl overflow-hidden">
        {/*  MODERN LEFT */}
        <div className="hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-700 text-white relative overflow-hidden">
          {/* glow effect */}
          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-[-50px] left-[-50px]" />
          <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl bottom-[-50px] right-[-50px]" />

          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-6 tracking-wide">MediQueue</h1>

            <h2 className="text-4xl font-bold leading-tight mb-4">
              Welcome Back
            </h2>

            <p className="text-blue-100 text-lg">
              Book expert tutors, manage sessions, and grow faster
            </p>
          </div>

          {/* mini stats */}
          <div className="relative z-10 grid grid-cols-3 gap-4 mt-10">
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
              <p className="text-xl font-bold">500+</p>
              <p className="text-xs text-blue-100">Tutors</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
              <p className="text-xl font-bold">1K+</p>
              <p className="text-xs text-blue-100">Students</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-4 rounded-xl text-center">
              <p className="text-xl font-bold">24/7</p>
              <p className="text-xs text-blue-100">Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="p-8 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-2 dark:text-white">Sign In</h2>
            <p className="text-gray-500 mb-6">Enter your email & password</p>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* EMAIL */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <Mail size={16} />
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter your valid email address"
                  className={`w-full px-4 py-3 rounded-xl border outline-none dark:bg-[#111827] dark:text-white
                             ${errors.email ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'}`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  <Lock size={16} />
                  Password
                </label>

                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-3 rounded-xl border pr-10 outline-none dark:bg-[#111827] dark:text-white
      ${errors.password ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'}`}
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-[38px] text-gray-500"
                >
                  {showPass ? (
                    <FaEyeSlash className="cursor-pointer" />
                  ) : (
                    <FaEye className="cursor-pointer" />
                  )}
                </button>

                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              {/* REMEMBER */}
              <div className="flex justify-between text-sm items-center">
                <label className="flex gap-2 items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={() => setRemember(!remember)}
                  />
                  Remember me
                </label>

                <Link href="#" className="text-blue-600">
                  Forgot password?
                </Link>
              </div>

              {errors.remember && (
                <p className="text-red-500 text-sm -mt-2">{errors.remember}</p>
              )}

              {/* BUTTON */}
              <button
                disabled={loading}
                className="w-full py-3 cursor-pointer rounded-xl bg-blue-600 text-white font-semibold flex hover:bg-blue-800 transition duration-300 justify-center items-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  'Login'
                )}
              </button>
            </form>

            {/* GOOGLE */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full mt-4 border py-3 rounded-xl flex items-center cursor-pointer hover:bg-gray-50 transition duration-300 justify-center gap-2"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <p className="text-center mt-6 text-sm">
              Don’t have an account?{' '}
              <Link href="/signup" className="text-blue-600 font-medium">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
