export const CONTACT = {
  name: "Eletro May's Engenharia",
  whatsapp: { number: "5535205555", display: "(55) 3520-5555" },
  phone:    { number: "555535205555",  display: "(55) 3520-5555" },
  email:    "atendimento@eletromays.com",
  address:  "Santa Rosa - RS",
  cities:   ["Santa Rosa - RS", "Porto Lucena - RS", "Região Noroeste/RS"],
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
