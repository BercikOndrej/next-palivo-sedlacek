'use client';
import z from "zod";
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
import { formSchema } from "@/utils/validation-schemas";
import { toast } from "sonner";
import easyTranslate from "@/utils/easy-translate";

const inputBgStyle = 'bg-gray-50';
const flexStyle = 'flex flex-col gap-x-4 gap-y-8 sm:flex-row w-full'

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      subject: 'Poptávka',
      message: '',
      honeyPod: ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...values
        })
      });
      if (res.ok) {
        toast.success('Zpráva byla úspěšně odeslána!', {
        })
      }
      else {
        const errors = await res.json();
        toast.error('Zpráva se bohužel neodeslala.', {
          description: `${easyTranslate(errors[0].path)}: ${errors[0].message}`,
        })
      }
      form.reset();
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="space-y-8">
      <h3 className="font-semibold text-2xl text-black">Kontaktujte nás</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className={flexStyle}>
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
          <div className={flexStyle}>
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
           <FormField
            control={form.control}
            name="honeyPod"
            render={({ field }) => (
              <FormItem className="hidden">
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
