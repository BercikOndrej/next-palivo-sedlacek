export default function easytranslate(word: string): string {
  const dictionary: Record<string, string> = {
    name: "jméno",
    surname: "příjmení",
    email: "email",
    phone: "telefonní číslo",
    subject: "předmět zprávy",
    message: "zpráva",
  };

  return dictionary[word] ?? "neznámé";
}