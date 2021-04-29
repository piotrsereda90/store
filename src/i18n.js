import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description:{
            part1: 'all',
            part2: 'gun',
            part3: 'knife',
            part4: 'wardrobe',
            part5: 'holster',
            part6: 'vest',
            part7: 'optics',
            part8:'ammunition',
            part9: 'Products',
            part10: 'Recommended',
            part11: 'SERVICE GIWERA.COM',
            part12: 'Help',
            part13: 'Safe payment',
            part14:'Delivery costs',
            part15:'Complaints',
            part16:'ABOUT US',
            part17:'Contact',
            part18:'Principles of cooperation',
            part19:'Find a salon',
            part20:'Career at Giwera',
            part21:'Your e-mail',
            part22:'SAVE',
            part23:'By subscribing to our newsletter you accept',
            part24:'Regulations and Privacy Policy',
            part25:'MY ACCOUNT',
            part26:'Sign In',
            part27:'Registration',
            part28:'CONVENIENT ONLINE PURCHASE',
            part29:'60 days return policy',
            part30:'Free shipping from 149',
            part31:'Delivery in 72h',
            part32:'INFORMATION',
            part33:'Regulations',
            part34:'Privacy policy',
            part35:'GET INSPIRED ON',
            part36:'Price',
            part37:'Add to cart',
            part38:'Go to cart',
            part39:'The product is already in the cart',
            part40:'Remove the product from the cart',
            part41:'Go to order fulfillment',
            part42:'ORDERING PARTY'+'S DETAILS',
            part43:'Name',
            part44:'Postal Code',
            part45:'City',
            part46:'Street',
            part47:'House/flat number',
            part48:'Tel',
            part49:'SUBMIT YOUR ORDER',
            part50:'Thank you for your order :)',
          }
        }
      },
      de:{
        translation:{
          description:{
            part1: 'alle',
            part2: 'waffen',
            part3: 'messern',
            part4: 'schranken',
            part5: 'pistolentasche',
            part6: 'vesten',
            part7: 'otpike',
            part8:'ammunition',
            part9:'Artikel',
            part10: 'Empfehlen',
            part11: 'SERVICE GIWERA.COM',
            part12: 'Hilfe',
            part13: 'Sichere Zahlungen',
            part14: 'Versandkosten',
            part15:'Beschwerden',
            part16:'ÜBER UNS',
            part17:'Kontakt',
            part18:'Grundsätze der Zusammenarbeit',
            part19:'Finde einen Salon',
            part20:'Karriere bei Giwera',
            part21:'Dein e-mail',
            part22:'SPEICHERN',
            part23:'Mit dem Abonnieren unseres Newsletters akzeptieren Sie',
            part24:'Bestimmungen und Datenschutzbestimmungen',
            part25:'MEIN KONTO',
            part26:'Einloggen',
            part27:'Anmeldung',
            part28:'Bequemer Online-Kauf',
            part29:'60 Tage Rückgaberecht',
            part30:'Kostenloser Versand ab 149',
            part31:'Lieferung in 72h',
            part32:'INFORMATION',
            part33:'Vorschriften',
            part34:'Datenschutz-Bestimmungen',
            part35:'LASSEN SIE SICH INSPIRIREN',
            part36:'Preis',
            part37:'in den Warenkorb',
            part38:'Zum Einkaufskorb',
            part39:'Produkt ist bereits im Warenkorb',
            part40:' Nehmen Sie das Produkt aus dem Warenkorb',
            part41:'Gehen Sie zur Auftragserfüllung',
            part42:'Angaben zur bestellenden Partei',
            part43:'Name',
            part44:'Postleitzahl',
            part45:'Stadt',
            part46:'Strasse',
            part47:'Haus-/Wohnungsnummer',
            part48:'Tel',
            part49:'SENDEN SIE IHRE BESTELLUNG',
            part50:'Vielen Dank für Ihre Bestellung :)',
          }
        }
      },
      pl:{
        translation:{
          description:{
            part1: 'wszystko',
            part2: 'broń',
            part3: 'noże',
            part4: 'szafy na broń',
            part5: 'kabury',
            part6: 'kamizelki',
            part7: 'optyka',
            part8:'amunicja',
            part9: 'Produkty',
            part10: 'Polecane',
            part11: 'OBSŁUGA SKLEPU GIWERA.COM',
            part12: 'Pomoc',
            part13: 'Bezpieczne płatności',
            part14: 'Koszty dostawy',
            part15:'Reklamacje',
            part16:'O NAS',
            part17:'Kontakt',
            part18:'Zasady współpracy',
            part19:'Znajdz salon',
            part20:'Kariera w Giwera',
            part21:'Twój e-mail',
            part22:'ZAPISZ',
            part23:'Zapisując się na nasz newsletter akceptujesz',
            part24:'Regulamin i Politykę Prywatności',
            part25:'MOJE KONTO',
            part26:'Zaloguj się',
            part27:'Rejestracja',
            part28:'WYGODNE ZAKUP ONLINE',
            part29:'60 dni na zwrot',
            part30:'Darmowa wysyłka od 149 ',
            part31:'Dostawa w 72h',
            part32:'INFORMACJE',
            part33:'Regulaminy',
            part34:'Polityka prywatności',
            part35:'ZAINSPIRUJ SIĘ NA',
            part36:'Cena',
            part37:'Dodaj do koszyka',
            part38:'Idź do koszyka',
            part39:'Product jest już w koszyku',
            part40:'Usuń produkt z koszyka',
            part41:'Przejdz do realizacji zamówienia',
            part42:'Dane zamawiajacego',
            part43:'Nazwisko',
            part44:'Kod pocztowy',
            part45:'Miasto',
            part46:'Ulica',
            part47:'Numer domu/mieszkania',
            part48:'Tel',
            part49:'ZŁÓŻ ZAMÓWIENIE',
            part50:'Dziękujemy zazłożenie zamowienia :)',
          }
        }
      },
    }
  });

export default i18n;