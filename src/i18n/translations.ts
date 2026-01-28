export const translations = {
    de: {
        nav: {
            home: "Startseite",
            about: "Über uns",
            services: "Leistungen",
            wahlarzt: "Wahlarzt",
            contact: "Kontakt",
            cta: "Termin buchen",
            subServices: [
                {
                    title: "Kardiologie",
                    description: "EKG, Ultraschall & Herzdiagnostik",
                    link: "/services/cardiology",
                    image: "/about-ultrasound.jpg"
                },
                {
                    title: "Diagnostik & Vorsorge",
                    description: "OP-Clearance & Vorsorgeprogramme",
                    link: "/services/diagnostics",
                    image: "/hero-consultation.jpg"
                },
                {
                    title: "Spezialbetreuung",
                    description: "COVID-Nachsorge & chronische Leiden",
                    link: "/services/covid-aftercare",
                    image: "/about-portrait.jpg"
                }
            ]
        },
        about: {
            label: "Ihre Fachärztin",
            title: "Dr. Stephanie Sang",
            quote: '"In meiner Ordination steht der Mensch im Mittelpunkt. Wir nehmen uns die Zeit, die für eine ganzheitliche Betreuung notwendig ist."',
            text1: "Als Fachärztin für Innere Medizin und Kardiologie verfüge ich über langjährige Erfahrung in der umfassenden Diagnostik und Therapie von Herz-Kreislauf-Erkrankungen.",
            text2: "Mein Schwerpunkt liegt nicht nur auf der Behandlung akuter Beschwerden, sondern vor allem auf der Prävention und der langfristigen Begleitung meiner Patientinnen und Patienten.",
            qualificationsTitle: "Qualifikationen",
            cvTitle: "Medizinischer Lebenslauf",
            cvItems: [
                { year: "Seit 2024", text: "Selbstständige Wahlarztordination in Brand-Laaben" },
                { year: "Seit 2022", text: "Oberärztin für Innere Medizin & Kardiologie" },
                { year: "2016 – 2022", text: "Facharzt-Ausbildung im KH Barmherzige Brüder" }
            ],
            expertiseTitle: "Expertise",
            expertiseItems: [
                "Kardiologische Funktionsdiagnostik",
                "Internistische Vorsorge-Untersuchungen",
                "Ganzheitliche Präventivmedizin"
            ],
            philosophyTitle: "Unsere Philosophie",
            philosophyText: "Wir glauben an eine Medizin, die sich Zeit nimmt. Eine Medizin, die zuhört und den Menschen hinter den Befunden sieht. In unserer Ordination in Brand-Laaben schaffen wir einen Raum für Vertrauen und fachliche Exzellenz."
        },
        hero: {
            welcome: "Willkommen",
            headline: "Internistische & Kardiologische Facharztordination – Dr. Sang",
            subheadline: "Medizinische Kompetenz mit persönlicher Note in Brand-Laaben.",
            primaryCta: "Termin buchen",
            secondaryCta: "Unsere Leistungen",
        },
        infobar: {
            address: "Adresse",
            phone: "Telefon",
            hours: "Öffnungszeiten",
            hoursValue: "Nach Vereinbarung",
        },
        home: {
            welcome: "Willkommen",
            welcomeHeadline: "Zeit für Ihre Gesundheit.",
            welcomeText: '"In meiner Ordination steht der Mensch im Mittelpunkt. Wir nehmen uns die Zeit, die für eine ganzheitliche Betreuung notwendig ist."',
            servicesHeadline: "Unsere Leistungen",
            wahlarztLabel: "Information",
            wahlarztHeadline: "Was ist ein Wahlarzt?",
            wahlarztText1: "Als Wahlarzt habe ich keinen direkten Vertrag mit den Krankenkassen. Das ermöglicht mir, mir ausreichend Zeit für Ihre Anliegen zu nehmen und Ihnen eine persönliche Betreuung ohne Zeitdruck zu bieten.",
            wahlarztText2: "Sie bezahlen das Honorar zunächst in der Ordination und können die Honorarnote anschließend bei Ihrer Krankenkasse zur teilweisen Rückerstattung einreichen.",
            wahlarztCta: "Mehr erfahren",
            locationHeadline: "Anfahrt",
            services: [
                {
                    title: "Kardiologie",
                    description: "EKG, Herzultraschall und umfassende Herzdiagnostik für Ihre Sicherheit.",
                    image: "/about-ultrasound.jpg",
                    link: "/services/cardiology"
                },
                {
                    title: "Vorsorge & OP-Clearance",
                    description: "Präoperative Untersuchungen und individuelle Vorsorgeprogramme.",
                    image: "/hero-consultation.jpg",
                    link: "/services/diagnostics"
                },
                {
                    title: "Spezialisierte Betreuung",
                    description: "Ganzheitliche Begleitung bei COVID-Nachsorge und chronischen Leiden.",
                    image: "/about-portrait.jpg",
                    link: "/services/covid-aftercare"
                }
            ]
        },
        services: {
            headline: "Medizinische Leistungen",
            label: "Unsere Fachgebiete",
            subheadline: "Wir bieten Ihnen modernste kardiologische und internistische Diagnostik in einer vertrauensvollen Atmosphäre.",
            cta: "Detailinfos",
            back: "Zurück zur Übersicht",
            bookingText: "Benötigen Sie eine Untersuchung in diesem Bereich?",
            bookingCta: "Termin vereinbaren",
            items: {
                cardiology: {
                    title: "Kardiologie",
                    subtitle: "Herz- & Kreislaufdiagnostik",
                    image: "/about-ultrasound.jpg",
                    content: [
                        "Eine präzise kardiologische Diagnostik ist der Grundstein für Ihre Herzgesundheit. In unserer Ordination nutzen wir modernste Medizintechnik, um Funktionsstörungen frühzeitig zu erkennen und individuell zu behandeln.",
                        "Vom klassischen EKG bis hin zum hochauflösenden Herzultraschall bieten wir Ihnen das gesamte Spektrum der nicht-invasiven kardiologischen Abklärung.",
                    ],
                    details: [
                        { name: "Echokardiographie", desc: "Detaillierter Herzultraschall zur Beurteilung von Herzmuskel, Klappen und Funktion." },
                        { name: "EKG (Ruhe-EKG)", desc: "Aufzeichnung der elektrischen Herzaktivität zur Rhythmusanalyse." },
                        { name: "Langzeit-EKG", desc: "Überwachung des Herzrhythmus über 24-72 Stunden bei Herzrasen oder Schwindel." },
                        { name: "Ergometrie", desc: "Belastungs-EKG zur Beurteilung der Leistungsfähigkeit und Durchblutung." },
                    ]
                },
                vascular: {
                    title: "Gefäßmedizin",
                    subtitle: "Prävention & Ultraschall",
                    image: "/hero-consultation.jpg",
                    content: [
                        "Gesunde Gefäße sind lebenswichtig. Unser Fokus liegt auf der Früherkennung von Arterienverkalkungen (Atherosklerose), um Schlaganfälle und Durchblutungsstörungen effektiv zu verhindern.",
                        "Mittels farbkodierter Duplex-Sonographie können wir Ihre Gefäße schmerzfrei und ohne Strahlenbelastung visualisieren und beurteilen.",
                    ],
                    details: [
                        { name: "Carotis-Duplex", desc: "Ultraschall der Halsschlagadern zur Schlaganfall-Prävention." },
                        { name: "Arterieller Status", desc: "Untersuchung der Beingefäße bei Verdacht auf 'Schaufensterkrankheit'." },
                        { name: "Aorta-Screening", desc: "Vorsorgeuntersuchung zur Früherkennung von Aneurysmen (Gefäßerweiterungen)." },
                    ]
                },
                diagnostics: {
                    title: "Innere Medizin",
                    subtitle: "Umfassende Diagnostik",
                    image: "/about-portrait.jpg",
                    content: [
                        "Die Innere Medizin ist das Fundament der fächerübergreifenden Diagnostik. Wir koordinieren Ihre Befunde und bieten Ihnen eine ganzheitliche internistische Betreuung.",
                        "Besonders vor geplanten Operationen (OP-Clearance) oder im Rahmen der jährlichen Vorsorgeuntersuchung sind wir Ihr kompetenter Ansprechpartner.",
                    ],
                    details: [
                        { name: "OP-Freigaben", desc: "Umfassende präoperative Untersuchung inkl. EKG und Laborfreigabe." },
                        { name: "Spirometrie", desc: "Lungenfunktionstest zur Abklärung von Atemnot oder Husten." },
                        { name: "24h-Blutdruck", desc: "Langzeitmessung zur optimalen Einstellung einer Hypertonie (Bluthochdruck)." },
                        { name: "Laboranalysen", desc: "Umfassende Blutuntersuchungen in Kooperation mit Fachlaboren." },
                    ]
                },
                "covid-aftercare": {
                    title: "COVID Nachsorge",
                    subtitle: "Regeneration & Support",
                    image: "/hero-consultation.jpg",
                    content: [
                        "Viele Patientinnen und Patienten leiden nach einer COVID-19-Infektion unter langanhaltenden Beschwerden wie Atemnot, Herzrasen oder ausgeprägter Erschöpfung (Fatigue).",
                        "Wir bieten Ihnen eine spezialisierte kardiologische und internistische Abklärung, um organische Ursachen auszuschließen und Ihren Weg zurück in den Alltag zu unterstützen.",
                    ],
                    details: [
                        { name: "Kardiale Abklärung", desc: "Ausschluss von Herzmuskelentzündungen (Myokarditis) nach Infektion." },
                        { name: "Belastungs-Check", desc: "Einschätzung der körperlichen Belastbarkeit mittels Ergometrie." },
                        { name: "Ganzheitliche Beratung", desc: "Begleitung bei Fatigue-Symptomatik und Atemtraining." },
                    ]
                }
            }
        },
        wahlarzt: {
            label: "Information",
            title: "Wahlarzt-System",
            quote: '"Ein Wahlarzt ist ein niedergelassener Arzt, der keinen Vertrag mit den Krankenkassen hat. Das bedeutet für Sie vor allem: Zeit, Flexibilität und persönliche Betreuung."',
            howTitle: "Wie funktioniert es?",
            howText: "Das Prinzip ist einfach: Sie erhalten für die erbrachte Leistung eine Honorarnote, die Sie zunächst in der Ordination begleichen. Danach reichen wir (auf Wunsch) oder Sie die Rechnung bei Ihrer Krankenkasse ein.",
            reimbursementTitle: "Kostenrückerstattung",
            reimbursementText: "Ihre Krankenkasse (ÖGK, SVS, BVAEB, etc.) erstattet Ihnen einen Teil des Honorars zurück. In der Regel sind dies ca. 80% dessen, was ein Vertragsarzt für dieselbe Leistung erhalten würde.",
            processTitle: "Der Ablauf",
            processItems: [
                "Untersuchung & Beratung in Ruhe",
                "Bezahlung (Bar oder Karte)",
                "Einreichung bei der Krankenkasse",
                "Teilweise Rückerstattung auf Ihr Konto"
            ],
            benefitsTitle: "Ihre Vorteile",
            benefits: [
                { title: "Mehr Zeit", text: "Ausführliche Gespräche und Untersuchungen ohne Zeitdruck." },
                { title: "Kurze Wartezeiten", text: "Termingenaue Planung für minimalen Zeitverlust." },
                { title: "Schnelle Termine", text: "Kurzfristige Terminvergabe bei akuten Anliegen." }
            ],
            footerTitle: "Noch Fragen?",
            footerText: "Gibt es Unklarheiten zur Einreichung oder den Kosten? Wir beraten Sie gerne vorab telefonisch.",
            footerCta: "Termin online buchen"
        },
        legal: {
            imprint: "Impressum",
            privacy: "Datenschutzerklärung",
            imprintTitle: "Medieninhaber & Herausgeber",
            contactTitle: "Kontakt",
            chamberTitle: "Zuständige Kammer",
            chamberValue: "Ärztekammer für Niederösterreich",
            jobTitle: "Berufsbezeichnung",
            jobValue: "Fachärztin für Innere Medizin und Kardiologie (verliehen in Österreich)",
            disclosureTitle: "Offenlegung gemäß § 25 Mediengesetz",
            disclosureValue: "Diese Website dient der Information über die medizinischen Leistungen der Ordination Dr. Sang sowie der Terminvereinbarung.",
            privacyIntro: "Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).",
            privacyContactTitle: "Kontakt mit uns",
            privacyContactValue: "Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
            privacyDataTitle: "Datenspeicherung",
            privacyDataValue: "Wir weisen darauf hin, dass zum Zweck des einfacheren Buchungsvorganges und zur späteren Vertragsabwicklung vom Webshop-Betreiber im Rahmen von Cookies die IP-Daten des Anschlussinhabers gespeichert werden, ebenso wie Name und Anschrift des Buchers.",
            privacyCookiesTitle: "Cookies",
            privacyCookiesValue: "Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen.",
            privacyRightsTitle: "Ihre Rechte",
            privacyRightsValue: "Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren."
        },
        footer: {
            contact: "Kontakt",
            hours: "Öffnungszeiten",
            hoursValue: "Termine nach telefonischer Vereinbarung oder online.",
            imprint: "Impressum",
            privacy: "Datenschutz",
        },
        cookie: {
            text: "Wir nutzen Cookies, um Ihr Erlebnis zu verfeinern. Durch die Nutzung der Website stimmen Sie der Verwendung zu.",
            accept: "Einverstanden",
            details: "Details",
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            wahlarzt: "Private Practice",
            contact: "Contact",
            cta: "Book Appointment",
            subServices: [
                {
                    title: "Cardiology",
                    description: "ECG, Ultrasound & Heart Diagnostics",
                    link: "/services/cardiology",
                    image: "/about-ultrasound.jpg"
                },
                {
                    title: "Diagnostics & Prevention",
                    description: "OP-Clearance & Check-ups",
                    link: "/services/diagnostics",
                    image: "/hero-consultation.jpg"
                },
                {
                    title: "Specialized Care",
                    description: "COVID aftercare & chronic conditions",
                    link: "/services/covid-aftercare",
                    image: "/about-portrait.jpg"
                }
            ]
        },
        about: {
            label: "Your Specialist",
            title: "Dr. Stephanie Sang",
            quote: '"In my practice, the individual is at the center. We take the time necessary for holistic care."',
            text1: "As a specialist in internal medicine and cardiology, I have many years of experience in the comprehensive diagnostics and therapy of cardiovascular diseases.",
            text2: "My focus is not only on the treatment of acute symptoms, but especially on prevention and the long-term support of my patients.",
            qualificationsTitle: "Qualifications",
            cvTitle: "Medical CV",
            cvItems: [
                { year: "Since 2024", text: "Independent private practice in Brand-Laaben" },
                { year: "Since 2022", text: "Senior Physician for Internal Medicine & Cardiology" },
                { year: "2016 – 2022", text: "Specialist training at KH Barmherzige Brüder" }
            ],
            expertiseTitle: "Expertise",
            expertiseItems: [
                "Cardiological functional diagnostics",
                "Internal medicine check-ups",
                "Holistic preventive medicine"
            ],
            philosophyTitle: "Our Philosophy",
            philosophyText: "We believe in medicine that takes time. Medicine that listens and sees the person behind the findings. In our practice in Brand-Laaben, we create a space for trust and professional excellence."
        },
        hero: {
            welcome: "Welcome",
            headline: "Specialist Practice for Internal Medicine & Cardiology – Dr. Sang",
            subheadline: "Medical expertise with a personal touch in Brand-Laaben.",
            primaryCta: "Book Appointment",
            secondaryCta: "Our Services",
        },
        infobar: {
            address: "Address",
            phone: "Phone",
            hours: "Hours",
            hoursValue: "By appointment",
        },
        home: {
            welcome: "Welcome",
            welcomeHeadline: "Time for your health.",
            welcomeText: '"In my practice, the individual is at the center. We take the time necessary for holistic care."',
            servicesHeadline: "Our Services",
            wahlarztLabel: "Information",
            wahlarztHeadline: "What is a Private Physician?",
            wahlarztText1: "As a 'Wahlarzt' (private physician), I do not have a direct contract with health insurance providers. This allows me to take sufficient time for your concerns and offer you personal care without time pressure.",
            wahlarztText2: "You pay the fee at the practice first and can then submit the invoice to your health insurance for partial reimbursement.",
            wahlarztCta: "Learn more",
            locationHeadline: "Location",
            services: [
                {
                    title: "Cardiology",
                    description: "ECG, heart ultrasound, and comprehensive heart diagnostics for your safety.",
                    image: "/about-ultrasound.jpg",
                    link: "/services/cardiology"
                },
                {
                    title: "Prevention & Clearance",
                    description: "Preoperative examinations and individual prevention programs.",
                    image: "/hero-consultation.jpg",
                    link: "/services/diagnostics"
                },
                {
                    title: "Specialized Care",
                    description: "Holistic support for COVID aftercare and chronic conditions.",
                    image: "/about-portrait.jpg",
                    link: "/services/covid-aftercare"
                }
            ]
        },
        services: {
            headline: "Medical Services",
            label: "Our Specializations",
            subheadline: "We offer modern cardiological and internal medical diagnostics in a trustful atmosphere.",
            cta: "Detailed info",
            back: "Back to overview",
            bookingText: "Do you need an examination in this area?",
            bookingCta: "Schedule appointment",
            items: {
                cardiology: {
                    title: "Cardiology",
                    subtitle: "Heart & Circulatory Diagnostics",
                    image: "/about-ultrasound.jpg",
                    content: [
                        "Precise cardiological diagnostics is the foundation for your heart health. in our practice, we use the latest medical technology to detect functional disorders early and treat them individually.",
                        "From classic ECG to high-resolution heart ultrasound, we offer you the entire spectrum of non-invasive cardiological evaluation.",
                    ],
                    details: [
                        { name: "Echocardiography", desc: "Detailed heart ultrasound for evaluating cardiac muscle, valves, and function." },
                        { name: "ECG (Resting ECG)", desc: "Recording electrical heart activity for rhythm analysis." },
                        { name: "Long-term ECG", desc: "Monitoring heart rhythm over 24-72 hours for palpitations or dizziness." },
                        { name: "Ergometry", desc: "Stress ECG for evaluating performance and circulation." },
                    ]
                },
                vascular: {
                    title: "Vascular Medicine",
                    subtitle: "Prevention & Ultrasound",
                    image: "/hero-consultation.jpg",
                    content: [
                        "Healthy vessels are essential. Our focus is on early detection of arterial calcification (atherosclerosis) to effectively prevent strokes and circulatory disorders.",
                        "Using color-coded duplex sonography, we can visualize and evaluate your vessels painlessly and without radiation exposure.",
                    ],
                    details: [
                        { name: "Carotis Duplex", desc: "Ultrasound of carotid arteries for stroke prevention." },
                        { name: "Arterial Status", desc: "Examination of leg vessels when intermittent claudication is suspected." },
                        { name: "Aorta Screening", desc: "Preventive examination for early detection of aneurysms (vascular dilations)." },
                    ]
                },
                diagnostics: {
                    title: "Internal Medicine",
                    subtitle: "Comprehensive Diagnostics",
                    image: "/about-portrait.jpg",
                    content: [
                        "Internal medicine is the foundation of interdisciplinary diagnostics. We coordinate your findings and offer you holistic internal medical care.",
                        "Especially before planned operations (OP clearance) or within the framework of the annual check-up, we are your competent partner.",
                    ],
                    details: [
                        { name: "OP Clearances", desc: "Comprehensive preoperative examination including ECG and lab clearance." },
                        { name: "Spirometry", desc: "Lung function test for clarifying shortness of breath or cough." },
                        { name: "24h Blood Pressure", desc: "Long-term measurement for optimal management of hypertension." },
                        { name: "Lab Analysis", desc: "Comprehensive blood tests in cooperation with specialist labs." },
                    ]
                },
                "covid-aftercare": {
                    title: "COVID Aftercare",
                    subtitle: "Regeneration & Support",
                    image: "/hero-consultation.jpg",
                    content: [
                        "Many patients suffer from long-lasting complaints after a COVID-19 infection, such as shortness of breath, palpitations, or pronounced exhaustion (fatigue).",
                        "We offer you specialized cardiological and internal medical evaluation to exclude organic causes and support your way back into everyday life.",
                    ],
                    details: [
                        { name: "Cardiac Evaluation", desc: "Exclusion of heart muscle inflammation (myocarditis) after infection." },
                        { name: "Exertion Check", desc: "Assessment of physical load capacity using ergometry." },
                        { name: "Holistic Consulting", desc: "Support for fatigue symptoms and breathing training." },
                    ]
                }
            }
        },
        wahlarzt: {
            label: "Information",
            title: "Private Practice System",
            quote: '"A Wahlarzt is an independent physician who has no direct contract with health insurance providers. This primarily means for you: time, flexibility, and personal care."',
            howTitle: "How does it work?",
            howText: "The principle is simple: You receive an invoice for the service provided, which you first settle at the practice. Then we (on request) or you submit the invoice to your health insurance.",
            reimbursementTitle: "Reimbursement",
            reimbursementText: "Your health insurance (ÖGK, SVS, BVAEB, etc.) will reimburse you for part of the fee. Generally, this is approximately 80% of what a contracted physician would receive for the same service.",
            processTitle: "The Procedure",
            processItems: [
                "Examination & consultation in peace",
                "Payment (cash or card)",
                "Submission to the health insurance",
                "Partial reimbursement to your account"
            ],
            benefitsTitle: "Your Advantages",
            benefits: [
                { title: "More Time", text: "Detailed conversations and examinations without time pressure." },
                { title: "Short Wait Times", text: "Precise scheduling for minimal time loss." },
                { title: "Quick Appointments", text: "Short-term appointment scheduling for acute concerns." }
            ],
            footerTitle: "Any Questions?",
            footerText: "Is there any ambiguity regarding submission or costs? We would be happy to advise you in advance by phone.",
            footerCta: "Book appointment online"
        },
        legal: {
            imprint: "Imprint",
            privacy: "Privacy Policy",
            imprintTitle: "Media Owner & Publisher",
            contactTitle: "Contact",
            chamberTitle: "Responsible Chamber",
            chamberValue: "Medical Chamber for Lower Austria",
            jobTitle: "Job Title",
            jobValue: "Specialist in Internal Medicine and Cardiology (awarded in Austria)",
            disclosureTitle: "Disclosure according to § 25 Media Act",
            disclosureValue: "This website serves to provide information about the medical services of the practice Dr. Sang as well as for appointment scheduling.",
            privacyIntro: "The protection of your personal data is an important concern for us. We therefore process your data exclusively on the basis of legal provisions (GDPR, TKG 2003).",
            privacyContactTitle: "Contact with us",
            privacyContactValue: "If you contact us via a form on the website or by email, your details will be stored by us for six months for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.",
            privacyDataTitle: "Data Storage",
            privacyDataValue: "We point out that for the purpose of a simpler booking process and for later contract processing, the web shop operator stores the IP data of the connection owner within the framework of cookies, as well as the name and address of the booker.",
            privacyCookiesTitle: "Cookies",
            privacyCookiesValue: "Our website uses so-called cookies. These are small text files that are stored on your device with the help of the browser. They do no harm. We use cookies to make our offer user-friendly. Some cookies remain stored on your device until you delete them.",
            privacyRightsTitle: "Your Rights",
            privacyRightsValue: "In principle, you have the rights to information, correction, deletion, restriction, data portability, revocation, and objection. If you believe that the processing of your data violates data protection law or your data protection claims have otherwise been violated, you can complain to the supervisory authority."
        },
        footer: {
            contact: "Contact",
            hours: "Hours",
            hoursValue: "Appointments by telephone agreement or online.",
            imprint: "Imprint",
            privacy: "Privacy Policy",
        },
        cookie: {
            text: "We use cookies to refine your experience. By using the website, you agree to their use.",
            accept: "I agree",
            details: "Details",
        }
    },
};

export type Language = "de" | "en";
export type TranslationDict = typeof translations.de;
