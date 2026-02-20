const fs = require('fs');
let file = fs.readFileSync('src/i18n/translations.ts', 'utf8');

const deReplacement = `            items: {
                kardiologie: {
                    title: "Kardiologie",
                    subtitle: "Herz- & Kreislaufdiagnostik",
                    image: "/services/cardiology.png",
                    content: [
                        "Als Fachärztin für Innere Medizin und Kardiologie begleite ich Sie einfühlsam und kompetent in allen Fragen rund um Herz- und Gefäßerkrankungen sowie internistische Gesundheitsvorsorge.",
                        "Abklärung von Herzbeschwerden (z. B. Brustschmerz, Luftnot, Herzstolpern). Betreuung bei Herzschwäche und Rhythmusstörungen. Kardiologische Vorsorgeuntersuchungen.",
                        "Modernste Untersuchungsmethoden und eine sorgfältige Befundinterpretation sind dabei selbstverständlich."
                    ],
                    details: [
                        { name: "Echokardiographie (Herzultraschall)", desc: "Die Echokardiographie ist eine schonende und schmerzfreie Ultraschalluntersuchung des Herzens. Dabei werden Herzmuskel, Herzklappen und die Pumpfunktion in Echtzeit dargestellt. So lassen sich Durchblutungsstörungen, Klappenerkrankungen, Herzschwäche oder Strukturveränderungen frühzeitig erkennen. Der Herzultraschall ist ein zentrales Diagnoseverfahren in der Kardiologie – völlig strahlenfrei und jederzeit wiederholbar. Die Ergebnisse werden im Anschluss ausführlich mit Ihnen besprochen, um gemeinsam die bestmögliche Behandlung zu planen." },
                        { name: "EKG (Elektrokardiogramm)", desc: "Das EKG ist eine einfache und schmerzfreie Untersuchung, bei der die elektrischen Aktivitäten des Herzens gemessen werden. Über kleine Elektroden auf der Haut können Herzrhythmus, Herzfrequenz und mögliche Durchblutungsstörungen beurteilt werden. So lassen sich Herzrhythmusstörungen, Herzinfarkte oder andere Veränderungen rasch und zuverlässig erkennen. Das EKG dauert nur wenige Minuten und liefert wertvolle Informationen für die weitere kardiologische Abklärung und Behandlung." },
                        { name: "Langzeit-EKG", desc: "Beim Langzeit-EKG wird die elektrische Aktivität des Herzens über 24 bis 72 Stunden mittels eines kleinen, tragbaren Geräts aufgezeichnet. So können Herzrhythmus und mögliche Unregelmäßigkeiten im Alltag erfasst werden – auch dann, wenn Beschwerden nur zeitweise auftreten. Die Auswertung liefert wertvolle Hinweise auf Herzrhythmusstörungen, Herzrasen, Pausen im Herzschlag oder unklare Schwindel- und Ohnmachtsanfälle. Die Untersuchung ist schmerzfrei, alltagstauglich und ermöglicht eine besonders genaue Beurteilung des Herzrhythmus." },
                        { name: "Carotis-Ultraschall (Halsschlagader-Sonographie)", desc: "Der Carotis-Ultraschall ist eine schmerzfreie Untersuchung der Halsschlagadern mittels Ultraschall. Dabei können Ablagerungen (Plaques), Gefäßverengungen oder Durchblutungsstörungen frühzeitig erkannt werden. Diese Untersuchung ist besonders wichtig bei Bluthochdruck, Diabetes, Rauchen, erhöhten Blutfetten oder nach Schlaganfallereignissen. Durch die genaue Beurteilung des Gefäßzustands lässt sich Ihr individuelles Schlaganfallrisiko besser einschätzen – völlig strahlenfrei und schonend." }
                    ]
                },
                diagnostik: {
                    title: "Innere Medizin",
                    subtitle: "Umfassende Diagnostik",
                    image: "/services/diagnostics.png",
                    content: [
                        "In meiner Praxis setzen wir auf eine ruhige Atmosphäre und ausführliche Beratung. So können wir gemeinsam die beste Lösung für Ihre Gesundheit finden.",
                        "Bluthochdruckdiagnostik und -therapie. Internistische Ganzkörperdiagnostik. Risikoeinschätzung & Prävention. Nachsorge nach Spitalsaufenthalten.",
                        "Modernste Untersuchungsmethoden und eine sorgfältige Befundinterpretation sind dabei selbstverständlich."
                    ],
                    details: [
                        { name: "Langzeit-Blutdruckmessung", desc: "Bei der Langzeit-Blutdruckmessung wird Ihr Blutdruck über 24 Stunden regelmäßig mithilfe eines tragbaren Messgeräts aufgezeichnet. So lassen sich natürliche Schwankungen im Tages- und Nachtverlauf erfassen und ein möglichst genaues Bild Ihrer Blutdrucksituation gewinnen. Die Untersuchung ist unkompliziert und hilft, Bluthochdruck sicher zu diagnostizieren, die Wirksamkeit einer Therapie zu überprüfen und individuelle Risikofaktoren besser einzuschätzen." },
                        { name: "Spirometrie (Lungenfunktionstest)", desc: "Die Spirometrie ist ein Lungenfunktionstest, mit dem gemessen wird, wie viel Luft eine Person ein- und ausatmen kann und wie schnell das geschieht. Sie wird häufig eingesetzt, um Atemwegserkrankungen wie Asthma oder COPD zu erkennen, zu beurteilen oder zu kontrollieren. Der Test ist schmerzfrei, dauert nur wenige Minuten und erfolgt durch kräftiges Atmen in ein spezielles Messgerät." },
                        { name: "OP- Freigaben", desc: "OP- Freigaben." },
                        { name: "COVID Nachsorge", desc: "COVID Nachsorge." }
                    ]
                }
            }`;

const enReplacement = `            items: {
                kardiologie: {
                    title: "Cardiology",
                    subtitle: "Heart & Circulatory Diagnostics",
                    image: "/services/cardiology.png",
                    content: [
                        "As a specialist in internal medicine and cardiology, I accompany you sensitively and competently in all questions regarding heart and vascular diseases.",
                        "Clarification of heart complaints (e.g. chest pain, shortness of breath, palpitation), Care for heart failure and rhythm disturbances, Cardiological preventive examinations.",
                        "State-of-the-art examination methods and careful interpretation of findings are a matter of course."
                    ],
                    details: [
                        { name: "Echocardiography (Heart Ultrasound)", desc: "Echocardiography is a gentle and painless ultrasound examination of the heart. The heart muscle, heart valves, and pumping function are displayed in real time, allowing circulatory disorders, valve diseases, heart failure, or structural changes to be detected early. Heart ultrasound is a central diagnostic procedure in cardiology – completely radiation-free and repeatable at any time. The results will be discussed in detail with you afterwards to plan the best possible treatment together." },
                        { name: "ECG (Electrocardiogram)", desc: "An ECG is a simple, painless test measuring the electrical activity of the heart. Small electrodes on the skin help assess heart rhythm, frequency, and potential circulatory issues, enabling quick and reliable detection of arrhythmias, heart attacks, or other changes. The test takes only a few minutes and provides valuable information for further cardiological diagnosis and treatment." },
                        { name: "Long-term ECG", desc: "In a long-term ECG, the heart's electrical activity is recorded over 24 to 72 hours using a small, portable device. This detects heart rhythm and possible irregularities in everyday life, even when symptoms only occur occasionally. The evaluation provides valuable clues to arrhythmias, racing hearts, pauses in heartbeat, or unclear dizziness and fainting spells. The examination is painless, suitable for daily life, and enables particularly precise assessment." },
                        { name: "Carotid Ultrasound (Carotid Sonography)", desc: "Carotid ultrasound is a painless examination of the carotid arteries using ultrasound. Deposits (plaques), vascular constrictions, or circulatory disorders can be detected early. This examination is especially important for high blood pressure, diabetes, smoking, elevated blood lipids, or after strokes. A precise assessment of the vascular condition helps to better evaluate your individual stroke risk – completely radiation-free and gentle." }
                    ]
                },
                diagnostik: {
                    title: "Internal Medicine",
                    subtitle: "Comprehensive Diagnostics",
                    image: "/services/diagnostics.png",
                    content: [
                        "In my practice, we focus on a calm atmosphere and extensive consultation. Thus, we can together find the best solution for your health.",
                        "High blood pressure diagnostics and therapy. Internal full-body diagnostics. Risk assessment & prevention. Aftercare following hospital stays.",
                        "State-of-the-art examination methods and careful interpretation of findings are a matter of course."
                    ],
                    details: [
                        { name: "Long-term Blood Pressure", desc: "In long-term blood pressure measurement, your blood pressure is regularly recorded over 24 hours using a portable device. This captures natural fluctuations during the day and night to obtain the most accurate picture of your situation. The examination is uncomplicated and helps to reliably diagnose high blood pressure, check the effectiveness of a therapy, and better assess individual risk factors." },
                        { name: "Spirometry (Lung Function Test)", desc: "Spirometry is a lung function test measuring how much air a person can inhale and exhale and how quickly this occurs. It is often used to detect, assess, or control respiratory diseases like asthma or COPD. The test is painless, takes only a few minutes, and involves breathing forcefully into a specialized measuring device." },
                        { name: "OP- Clearances", desc: "OP- Clearances." },
                        { name: "COVID Aftercare", desc: "COVID Aftercare." }
                    ]
                }
            }`;

const deMatch = file.substring(file.indexOf('            items: {', file.indexOf('        services: {')), file.indexOf('            }', file.indexOf('                "covid-nachsorge": {')) + '            }'.length);
file = file.replace(deMatch, deReplacement);

const enMatch = file.substring(file.indexOf('            items: {', file.indexOf('    en: {')), file.indexOf('            }', file.indexOf('                "covid-nachsorge": {', file.indexOf('    en: {'))) + '            }'.length);
file = file.replace(enMatch, enReplacement);

fs.writeFileSync('src/i18n/translations.ts', file);
console.log('Translations updated.');
