
"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sports } from '@/lib/sports-data';
import { handleContactSubmission } from '@/app/contact/actions';
import type { ContactFormValues } from '@/app/contact/actions';
import { useTranslations } from 'next-intl';

const contactSchema = z.object({
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

export function ContactForm() {
  const { toast } = useToast();
  const t = useTranslations('ContactForm');
  const tSports = useTranslations('HomePage.sports');
  const tPrograms = useTranslations('ProgramsPage.programs');
  const tCamps = useTranslations('CampsPage.camps');

  const programsOfInterest = [
      tPrograms('schools_title'),
      ...sports.map(s => tSports(`${s.slug}.name`)),
      tCamps('summer_camp_title'),
      tCamps('winter_camp_title'),
      tCamps('france_camp_title'),
      tPrograms('corporate_title'),
      t('other_inquiry')
  ];

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: ContactFormValues) => {
    const result = await handleContactSubmission(values);
     if (result.success) {
        toast({
            title: t('toast.success_title'),
            description: t('toast.success_message'),
        });
        form.reset();
    } else {
         toast({
            variant: 'destructive',
            title: t('toast.error_title'),
            description: result.error,
        });
    }
  };

  return (
     <Card>
        <CardContent className="p-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('name_label')}</FormLabel>
                                    <FormControl><Input placeholder={t('name_placeholder')} {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('email_label')}</FormLabel>
                                    <FormControl><Input placeholder={t('email_placeholder')} {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                     <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('phone_label')}</FormLabel>
                                <FormControl><Input placeholder={t('phone_placeholder')} {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                            <FormLabel>{t('location_label')}</FormLabel>
                            <FormControl>
                                <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                                >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="china" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                    {t('location_china')}
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="vietnam" />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                    {t('location_vietnam')}
                                    </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl>
                                    <RadioGroupItem value="other" />
                                    </FormControl>
                                    <FormLabel className="font-normal">{t('location_other')}</FormLabel>
                                </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="program"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>{t('program_label')}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder={t('program_placeholder')} />
                                </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {programsOfInterest.map(program => (
                                        <SelectItem key={program} value={program}>{program}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                     <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('subject_label')}</FormLabel>
                                <FormControl><Input placeholder={t('subject_placeholder')} {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                     <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('message_label')}</FormLabel>
                                <FormControl><Textarea placeholder={t('message_placeholder')} className="min-h-[120px]" {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {t('submit_button')}
                    </Button>
                </form>
            </Form>
        </CardContent>
     </Card>
  );

}
