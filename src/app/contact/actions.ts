
'use server';

import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    location: z.enum(["china", "vietnam", "other"], {
        required_error: "You need to select a location.",
    }),
    program: z.string({
        required_error: "Please select a program of interest.",
    }),
    subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function handleContactSubmission(data: z.infer<typeof contactSchema>) {
    try {
        console.log("New contact form submission:", data);
        // Here you would typically send an email or save to a database
        return { success: true, message: "Your message has been sent successfully!" };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to send message.' };
    }
}
