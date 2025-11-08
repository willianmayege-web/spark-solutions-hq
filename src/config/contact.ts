export const CONTACT = {
  name: "Eletro May's Engenharia",
  whatsapp: { number: "5555991389623", display: "+55 (55) 99138-9623" },
  phone:    { number: "555535205555",  display: "(55) 3520-5555" },
  email:    "atendimento@eletromays.com.br",
  address:  "Rua Vinte de Setembro, 751, Santa Rosa - RS, 98787-330",
  crea:     "231706",
  cities:   ["Santa Rosa - RS", "Porto Lucena - RS", "Região Noroeste/RS"],
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
