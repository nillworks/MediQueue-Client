'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { toast } from '@heroui/react';
import { Lock, Mail, User, Clock, Star, CalendarCheck } from 'lucide-react';

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
        toast.success('Welcome Back ZenoTutor', {
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
    <div className="flex pt-30 pb-10 items-center justify-center px-4 bg-gray-50 dark:bg-[#0B0F19] transition-colors duration-300">
      <div className="container mx-auto grid lg:grid-cols-2 bg-white dark:bg-[#0B0F19] rounded-3xl shadow-xl overflow-hidden">
        {/*  MODERN LEFT */}
        <div className="hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-700 text-white relative overflow-hidden">
          {/* glow effect */}
          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-[-50px] left-[-50px]" />
          <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl bottom-[-50px] right-[-50px]" />

          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-6 tracking-wide">ZenoTutor</h1>

            <h2 className="text-4xl font-bold leading-tight mb-4">
              Welcome Back
            </h2>

            <p className="text-blue-100 text-lg">
              Book expert tutors, manage sessions, and grow faster
            </p>
          </div>

          {/* Floating Cards Section */}
          <div className="relative flex-1 flex items-center justify-center mt-12 mb-12">
            {/* Primary Card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl w-4/5 transform -rotate-3 hover:rotate-0 transition-all duration-500 shadow-2xl relative z-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Alex Johnson</h3>
                  <p className="text-blue-100 text-sm">Mathematics Expert</p>
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-sm flex items-center gap-2">
                <Clock size={16} className="text-yellow-300" />
                Next session in 15 mins
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -right-4 top-1/4 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-2xl transform rotate-6 shadow-xl z-30 animate-[bounce_3s_ease-in-out_infinite]">
              <div className="flex items-center gap-2">
                <Star size={18} className="text-yellow-400 fill-yellow-400" />
                <span className="font-bold">4.9/5 Rating</span>
              </div>
            </div>

            {/* Notification Badge */}
            <div className="absolute -left-6 bottom-4 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-3 rounded-2xl transform -rotate-6 shadow-xl z-30 animate-[bounce_4s_ease-in-out_infinite]">
              <div className="flex items-center gap-2">
                <CalendarCheck size={18} className="text-green-400" />
                <span className="font-bold text-sm">Confirmed!</span>
              </div>
            </div>
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
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Enter your email & password
            </p>

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
                  className={`w-full px-4 py-3 rounded-xl border outline-none bg-white text-gray-900 border-gray-200 placeholder:text-gray-400 dark:bg-[#111827] dark:text-white dark:border-white/10 dark:placeholder:text-gray-500
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
                  className={`w-full px-4 py-3 rounded-xl border pr-10 outline-none bg-white text-gray-900 border-gray-200 placeholder:text-gray-400 dark:bg-[#111827] dark:text-white dark:border-white/10 dark:placeholder:text-gray-500
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

                <Link href="#" className="text-blue-600 dark:text-blue-400">
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
              className="w-full mt-4 border py-3 rounded-xl flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-[#111827] dark:border-white/10 dark:text-white transition duration-300 justify-center gap-2"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <p className="text-center mt-6 text-sm dark:text-gray-300">
              Don’t have an account?{' '}
              <Link
                href="/signup"
                className="text-blue-600 dark:text-blue-400 font-medium"
              >
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
