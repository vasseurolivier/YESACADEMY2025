"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { generateSlogan as aiGenerateSlogan, type SloganInput } from '@/ai/flows/ai-slogan-generation';
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const sloganSchema = z.object({
  keywords: z.string().min(3, { message: "Please enter at least one keyword." }),
});

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

async function handleSloganGeneration(input: SloganInput) {
    'use server';
    try {
        const result = await aiGenerateSlogan(input);
        return { success: true, slogan: result.slogan };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to generate slogan.' };
    }
}

async function handleContactSubmission(data: z.infer<typeof contactSchema>) {
    'use server';
    try {
        console.log("New contact form submission:", data);
        // Here you would typically send an email or save to a database
        return { success: true, message: "Your message has been sent successfully!" };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Failed to send message.' };
    }
}

type SloganGeneratorFormProps = {
    formType: 'slogan' | 'contact';
}

export function SloganGeneratorForm({formType}: SloganGeneratorFormProps) {
  const [generatedSlogan, setGeneratedSlogan] = useState<string>('');
  const { toast } = useToast();

  const isSloganForm = formType === 'slogan';
  const formSchema = isSloganForm ? sloganSchema : contactSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: isSloganForm ? { keywords: "" } : { name: "", email: "", subject: "", message: "" },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (isSloganForm) {
        const result = await handleSloganGeneration(values as SloganInput);
        if (result.success) {
            setGeneratedSlogan(result.slogan!);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.error,
            });
        }
    } else {
        const result = await handleContactSubmission(values as z.infer<typeof contactSchema>);
         if (result.success) {
            toast({
                title: 'Success!',
                description: result.message,
            });
            form.reset();
        } else {
             toast({
                variant: 'destructive',
                title: 'Error',
                description: result.error,
            });
        }
    }
  };

  if (isSloganForm) {
      return (
        <Card>
            <CardHeader>
                <CardTitle>Create a Slogan</CardTitle>
                <CardDescription>Enter comma-separated keywords (e.g., champions, journey, victory) to generate a unique slogan.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="keywords"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Keywords</FormLabel>
                                    <FormControl>
                                        <Input placeholder="e.g., dynamic, premium, inspiring" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={isSubmitting} className="w-full">
                            {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                            Generate Slogan
                        </Button>
                    </form>
                </Form>
                {generatedSlogan && (
                    <div className="mt-6 rounded-lg border bg-muted p-6 text-center">
                        <p className="text-sm font-medium text-muted-foreground">Generated Slogan:</p>
                        <p className="font-headline text-2xl font-bold text-primary">"{generatedSlogan}"</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
  }

  return (
     <Card>
        <CardContent className="p-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl><Input placeholder="you@example.com" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl><Input placeholder="Inquiry about Summer Camp" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl><Textarea placeholder="Your message here..." className="min-h-[120px]" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Send Message
                    </Button>
                </form>
            </Form>
        </CardContent>
     </Card>
  );

}
