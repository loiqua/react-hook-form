"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import type { formSchema } from '@/types';
import { formSchemaValidator } from '@/types';

const schema = formSchemaValidator;

export const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(schema),
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: formSchema) => {
    console.log('Authentication successful', data);
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col items-center justify-center space-y-4 border p-6 rounded-lg shadow-md">
      <div className="mb-3 w-full">
        <label className="block text-sm font-bold">Name</label>
        <input {...register('name')} className="block w-full p-2 pl-10 border rounded" />
        {errors.name?.message && (
          <p className="text-red-500 text-xs italic">{errors.name?.message}</p>
        )}
      </div>

      <div className="mb-3 w-full">
        <label className="block text-sm font-bold">Email</label>
        <input {...register('email')} className="block w-full p-2 pl-10 border rounded" />
        {errors.email?.message && (
          <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
        )}
      </div>

      <div className="mb-3 w-full">
        <label className="block text-sm font-bold">Phone Number</label>
        <input {...register('phoneNumber')} className="block w-full p-2 pl-10 border rounded" />
        {errors.phoneNumber?.message && (
          <p className="text-red-500 text-xs italic">{errors.phoneNumber?.message}</p>
        )}
      </div>

      <div className="mb-3 w-full">
        <label className="block text-sm font-bold">Password</label>
        <input {...register('password')} className="block w-full p-2 pl-10 border rounded" />
        {errors.password?.message && (
          <p className="text-red-500 text-xs italic">{errors.password?.message}</p>
        )}
      </div>

      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
      {/* Show success message */}
      {isSubmitted && (
        <div className="bg-green-500 text-white p-4 rounded mt-4">
          Authentication successful
        </div>
      )}
    </form>
  );
};