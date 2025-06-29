import { z } from 'zod';

const regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

export const registerUserSchema = z.object({
    username: z
        .string()
        .trim()
        .min(4, { message: 'Username must be at least 4 characters' }),
    email: z.string().email({ message: 'Invalid e-mail format' }).trim(),
    password: z.string().regex(regExp, {
        message:
            'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number',
    }),
});

export type TRegisterUser = z.infer<typeof registerUserSchema>;