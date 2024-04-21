import * as z from 'zod';

export const formSchemaValidator = z.object({
  name: z.string().min(1, { message: 'This is a required field' }),
  email: z.string().email('Please enter a valid email address'),
  phoneNumber: z.string().regex(/^[0-9]+$/, 'Phone number should only contain numbers'),
  password: z.string().min(6, { message: 'Password should be at least 6 characters' }),
});

export type formSchema = z.infer<typeof formSchemaValidator>;