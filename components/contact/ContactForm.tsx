'use client';
import z from "zod";
import validator from 'validator';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  name: z.string().min(2 , { message: 'pole musí obsahovat alespoň 2 znaky'}).max(255, { message: 'pole může obsahovat maximálně 255 znaků'}),
  surname: z.string().min(2, { message: 'pole musí obsahovat alespoň 2 znaky'}).max(255, { message: 'pole může obsahovat maximálně 255 znaků'}),
  email: z.email({ message: 'neplatná emailová adresa'}),
  phone: z.string().refine(v => validator.isMobilePhone(v, 'any'), { message: 'neplatné tel. číslo'}),
  subject: z.string().max(255, { message: 'pole může obsahovat maximálně 255 znaků'}),
  message: z.string().min(1, { message: 'pole je povinné'}).max(1024, { message: 'pole může obsahovat maximálně 1024 znaků'})
})

const inputBgStyle = 'bg-gray-50';

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      subject: 'Poptávka',
      message: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="space-y-8">
      <h3 className="font-semibold text-2xl text-black">Kontaktujte nás</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-4 md:gap-8 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className={inputBgStyle}>
                    <Input placeholder="Jméno" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className={inputBgStyle}>
                    <Input placeholder="Příjmení" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-8 w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className={inputBgStyle}>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className={inputBgStyle}>
                    <Input placeholder="Telefon" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl className={inputBgStyle}>
                  <Input placeholder="Předmět zprávy" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl className={inputBgStyle}>
                  <Textarea className="h-24" placeholder="Zpráva" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Odeslat</Button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
