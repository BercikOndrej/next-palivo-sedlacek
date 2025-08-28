import validator from "validator"
import z from "zod"

export const formSchema = z.object({
  name: z.string().min(2 , { message: 'pole musí obsahovat alespoň 2 znaky'}).max(255, { message: 'pole může obsahovat maximálně 255 znaků'}),
  surname: z.string().min(2, { message: 'pole musí obsahovat alespoň 2 znaky'}).max(255, { message: 'pole může obsahovat maximálně 255 znaků'}),
  email: z.email({ message: 'neplatná emailová adresa'}),
  phone: z.string().refine(v => validator.isMobilePhone(v, 'any'), { message: 'neplatné tel. číslo'}),
  subject: z.string().max(255, { message: 'pole může obsahovat maximálně 255 znaků'}),
  message: z.string().min(1, { message: 'pole je povinné'}).max(1024, { message: 'pole může obsahovat maximálně 1024 znaků'})
})