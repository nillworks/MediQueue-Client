'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Input, toast } from '@heroui/react';
import { authClient, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { ImageIcon, Lock, Mail, User } from 'lucide-react';

const SignUpPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async e => {
    e.preventDefault();

    const form = new FormData(e.target);
    const signUpData = Object.fromEntries(form.entries());

    const newErrors = {};

    if (!signUpData.name) newErrors.name = 'Name is required';
    if (!signUpData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(signUpData.email))
      newErrors.email = 'Invalid email';

    if (!signUpData.photo) newErrors.photo = 'Photo URL required';

    if (!signUpData.password) newErrors.password = 'Password required';
    else if (signUpData.password.length <= 8)
      newErrors.password = 'Min 8 characters';
    else if (!/[A-Z]/.test(signUpData.password))
      newErrors.password = 'Need uppercase letter';
    else if (!/[a-z]/.test(signUpData.password))
      newErrors.password = 'Need lowercase letter';

    if (!signUpData.confirmPassword)
      newErrors.confirmPassword = 'Confirm password';
    else if (signUpData.password !== signUpData.confirmPassword)
      newErrors.confirmPassword = 'Password not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    // signup functionality implement
    const { data, error } = await authClient.signUp.email({
      name: signUpData?.name, // required
      email: signUpData?.email, // required
      password: signUpData?.password, // required
      image: signUpData?.photo,
      callbackURL: '/',
    });

    setTimeout(() => {
      setLoading(false);
      if (data) {
        signOut();
        toast.success('Account created successfully', {
          description:
            'Your account has been created. You can now Register in.',
          variant: 'success',
        });
        router.push('/signin');
      }

      if (error) {
        toast.danger('Register failed', {
          description: error.message || 'Please try again later.',
          variant: 'danger',
        });
        return;
      }
    }, 100);

    e.target.reset();
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
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
    <div className="flex pt-35 pb-10 items-center justify-center px-4 bg-gray-50 dark:bg-[#0B0F19] transition-colors duration-300">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white dark:bg-[#0B0F19] rounded-3xl shadow-xl overflow-hidden">
        {/* LEFT SIDE - MODERN DESIGN */}
        <div className="hidden lg:flex flex-col justify-between p-10 bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
          {/* glow circles */}
          <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-[-50px] left-[-50px]" />
          <div className="absolute w-72 h-72 bg-pink-400/20 rounded-full blur-3xl bottom-[-50px] right-[-50px]" />

          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-6">MediQueue</h1>

            <h2 className="text-4xl font-bold mb-4">
              Join the Learning Journey
            </h2>

            <p className="text-blue-100 text-lg">
              Find expert tutors, book sessions instantly and grow your skills.
            </p>
          </div>

          {/* stats */}
          <div className="relative z-10 grid grid-cols-3 gap-4 mt-10">
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="text-xl font-bold">500+</p>
              <p className="text-xs">Tutors</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="text-xl font-bold">1K+</p>
              <p className="text-xs">Students</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl text-center">
              <p className="text-xl font-bold">24/7</p>
              <p className="text-xs">Support</p>
            </div>
          </div>
        </div>

        {/*  RIGHT SIDE - FORM */}
        <div className="p-8 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-2 dark:text-white">
              Create Account
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Fill your details to get started
            </p>

            <form onSubmit={handleRegister} className="space-y-4">
              {/* NAME */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  <User size={16} />
                  Full Name
                </label>
                <Input
                  name="name"
                  placeholder="Your Full Name"
                  className={`w-full px-4 py-3 border rounded-xl pr-10 outline-none dark:bg-[#111827] dark:text-white dark:border-white/10
                             ${errors.password ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  <Mail size={16} />
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your valid email address"
                  className={`w-full px-4 py-3 border rounded-xl pr-10 outline-none dark:bg-[#111827] dark:text-white dark:border-white/10
                             ${errors.password ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* PHOTO */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  <ImageIcon size={16} />
                  Photo URL
                </label>
                <Input
                  name="photo"
                  pattern="https?://.*"
                  placeholder="Valid Photo URL"
                  className={`w-full px-4 py-3 border rounded-xl pr-10 outline-none dark:bg-[#111827] dark:text-white dark:border-white/10
                             ${errors.password ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'}`}
                />
                {errors.photo && (
                  <p className="text-red-500 text-sm">{errors.photo}</p>
                )}
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  <Lock size={16} />
                  Password
                </label>

                <Input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Password"
                  className={`w-full px-4 py-3 border rounded-xl pr-10 outline-none dark:bg-[#111827] dark:text-white dark:border-white/10
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
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                  <Lock size={16} />
                  Confirm Password
                </label>

                <Input
                  name="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  className={`w-full px-4 py-3 border rounded-xl pr-10 outline-none dark:bg-[#111827] dark:text-white dark:border-white/10
                             ${errors.password ? 'border-red-500' : 'focus:ring-2 focus:ring-blue-500'}`}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-[38px] text-gray-500"
                >
                  {showConfirm ? (
                    <FaEyeSlash className="cursor-pointer" />
                  ) : (
                    <FaEye className="cursor-pointer" />
                  )}
                </button>

                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                disabled={loading}
                className="w-full py-3 rounded-xl bg-blue-600 cursor-pointer duration-300 text-white font-semibold hover:bg-blue-700 transition"
              >
                {loading ? 'Loading...' : 'Register'}
              </button>
            </form>

            {/* GOOGLE */}
            <button
              onClick={handleGoogleSignIn}
              className="w-full mt-4 border py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-[#111827] dark:border-white/10 dark:text-white"
            >
              <FcGoogle />
              Continue with Google
            </button>

            <p className="text-center mt-6 text-sm dark:text-gray-300">
              Already have an account?
              <Link href="/signin" className="text-blue-600 dark:text-blue-400 font-medium ml-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
