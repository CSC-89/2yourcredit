// import Image from 'next/future/image'

import { Container } from "./Container";
import backgroundImage from "../assets/images/background-faqs.jpg";

const faqs = [
    [
        {
            question: "Hva er et forbrukslån?",
            answer: "Forbrukslån er et såkalt lån uten sikkerhet, det vil si at det ikke stilles noe som sikkerhet for lånet. Dette gjør at alle kan søke om slike lån, selv om man ikke eier noe fast eiendom. Det er heller ingen begrensninger på hva du kan bruke lånet til.",
        },
        {
            question: "Hvem kan søke forbrukslån?",
            answer: "Du må ha både fylt året og ha inntekt på minimum 250.000 kroner i året som står på beskrivelsen",
        },
        {
            question: "Hvor mye kan jeg låne?",
            answer: "Dette avhenger av din økonomiske situasjon. Vi tilbyr et utvalg fra 5.000 til 1.000.000.",
        },
    ],
    [
        {
            question: "Hvilken rente kan jeg få på forbrukslånet?",
            answer: "Hver enkelt bank gjør en helhetsvurdering på bakgrunn av opplysningene du har oppgitt og kredittopplysningene som er innhentet. Renten vil derfor variere. Hvis du har en medsøker betyr det ofte lavere risiko for banken, noe som kan føre til lavere rente.",
        },
        {
            question: "Hvor lang nedbetalingstid kan jeg få på et forbrukslån?",
            answer: "På nye forbrukslån kan du få fra 1 til 5 år nedbetalingstid. Men på refinansiere av eksiterende lån, kan du få opp til fra 1 til 15 års nedbetalingstid.",
        },
        {
            question: "Trenger jeg sikkerhet for å kunne få et forbrukslån?",
            answer: "Nei, forbrukslån er uten krav til sikkerhet.",
        },
    ],
    [
        {
            question: "Kan jeg betale forbrukslånet raskere?",
            answer: "Dersom du ønsker å bli tidligere ferdig med lånet, kan du betale mer de gangene du har mulighet.",
        },
        {
            question: "Hvor raskt får jeg utbetalt pengene?‍",
            answer: "Dette avhenger av banken du har valgt. Oftest er det mellom 1-3 ukedager",
        },
        {
            question: "Er jeg forpliktet til å velge et tilbud hvis jeg legger inn en søknad?",
            answer: "Nei, det er helt uforpliktende å legge inn en lånesøknad hos oss. Dersom du mottar noen tilbud, er disse gyldig i 30 dager før de blir kansellert.",
        },
    ],
];

export function Faqs() {
    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
        >
            {/* <img
        className="absolute top-0 left-1/2 max-w-none "
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        
      /> */}
            <Container className="relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
                    >
                        Vanlige Spørsmål
                    </h2>
                </div>
                <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    {faqs.map((column, columnIndex) => (
                        <li key={columnIndex}>
                            <ul className="flex flex-col gap-y-8">
                                {column.map((faq, faqIndex) => (
                                    <li key={faqIndex}>
                                        <h3 className="font-display text-lg leading-7 text-slate-900">
                                            {faq.question}
                                        </h3>
                                        <p className="mt-4 text-sm text-slate-700">
                                            {faq.answer}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
