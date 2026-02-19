// Mock data – replace with real DB calls when ready
// Today: 2026-02-18 (Wednesday)

export type PatientStatus = "active" | "inactive";
export type RequestStatus = "pending" | "sent" | "opened" | "reviewed";

export interface Patient {
  id: string;
  name: string;
  email: string;
  lastVisit: string; // ISO date
  status: PatientStatus;
}

export interface ReviewRequest {
  id: string;
  patientName: string;
  email: string;
  appointmentDate: string; // ISO date
  sendDate: string; // appointmentDate + 2 days
  status: RequestStatus;
  rating?: number; // 1–5
  feedbackText?: string;
  isPublic?: boolean;
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

// ─── Patients ────────────────────────────────────────────────────────────────

export const mockPatients: Patient[] = [
  { id: "1",  name: "Maria Huber",       email: "m.huber@gmail.com",       lastVisit: "2026-02-17", status: "active" },
  { id: "2",  name: "Thomas Maier",      email: "th.maier@web.at",         lastVisit: "2026-02-17", status: "active" },
  { id: "3",  name: "Elisabeth Müller",  email: "e.mueller@icloud.com",    lastVisit: "2026-02-16", status: "active" },
  { id: "4",  name: "Andreas Gruber",    email: "a.gruber@gmx.at",         lastVisit: "2026-02-16", status: "active" },
  { id: "5",  name: "Sabine Wagner",     email: "s.wagner@gmail.com",      lastVisit: "2026-02-15", status: "active" },
  { id: "6",  name: "Klaus Bauer",       email: "k.bauer@a1.net",          lastVisit: "2026-02-15", status: "active" },
  { id: "7",  name: "Ingrid Schmid",     email: "i.schmid@hotmail.com",    lastVisit: "2026-02-14", status: "active" },
  { id: "8",  name: "Franz Lehner",      email: "f.lehner@gmail.com",      lastVisit: "2026-02-14", status: "active" },
  { id: "9",  name: "Renate Fischer",    email: "r.fischer@yahoo.com",     lastVisit: "2026-02-13", status: "active" },
  { id: "10", name: "Herbert Steiner",   email: "h.steiner@gmx.at",        lastVisit: "2026-02-12", status: "active" },
  { id: "11", name: "Gertrude Wolf",     email: "g.wolf@icloud.com",       lastVisit: "2026-02-11", status: "active" },
  { id: "12", name: "Johann Pichler",    email: "j.pichler@web.at",        lastVisit: "2026-02-10", status: "active" },
  { id: "13", name: "Helga Moser",       email: "h.moser@gmail.com",       lastVisit: "2026-02-07", status: "active" },
  { id: "14", name: "Walter Hofer",      email: "w.hofer@a1.net",          lastVisit: "2026-02-06", status: "active" },
  { id: "15", name: "Brigitte Reiter",   email: "b.reiter@outlook.com",    lastVisit: "2026-02-05", status: "active" },
  { id: "16", name: "Karl Schwarz",      email: "k.schwarz@gmx.at",        lastVisit: "2026-02-04", status: "active" },
  { id: "17", name: "Anna Berger",       email: "a.berger@gmail.com",      lastVisit: "2026-01-31", status: "active" },
  { id: "18", name: "Friedrich Lang",    email: "f.lang@yahoo.com",        lastVisit: "2026-01-29", status: "active" },
  { id: "19", name: "Margarete König",   email: "m.koenig@icloud.com",     lastVisit: "2026-01-27", status: "active" },
  { id: "20", name: "Erich Winkler",     email: "e.winkler@web.at",        lastVisit: "2026-01-24", status: "inactive" },
  { id: "21", name: "Hilde Brunner",     email: "h.brunner@gmail.com",     lastVisit: "2026-01-22", status: "active" },
  { id: "22", name: "Rudolf Eder",       email: "r.eder@a1.net",           lastVisit: "2026-01-20", status: "inactive" },
  { id: "23", name: "Elfriede Haas",     email: "e.haas@gmx.at",           lastVisit: "2026-01-17", status: "active" },
  { id: "24", name: "Günter Wimmer",     email: "g.wimmer@outlook.com",    lastVisit: "2026-01-15", status: "active" },
  { id: "25", name: "Hildegard Fuchs",   email: "h.fuchs@gmail.com",       lastVisit: "2026-01-12", status: "active" },
];

// ─── Review Requests ─────────────────────────────────────────────────────────
// This week = Feb 16–20. Send date = appointmentDate + 2 days.

export const mockReviewRequests: ReviewRequest[] = [
  // This week – pending (to be sent)
  { id: "rr1",  patientName: "Maria Huber",      email: "m.huber@gmail.com",    appointmentDate: "2026-02-17", sendDate: "2026-02-19", status: "pending" },
  { id: "rr2",  patientName: "Thomas Maier",     email: "th.maier@web.at",      appointmentDate: "2026-02-17", sendDate: "2026-02-19", status: "pending" },
  { id: "rr3",  patientName: "Elisabeth Müller", email: "e.mueller@icloud.com", appointmentDate: "2026-02-16", sendDate: "2026-02-18", status: "pending" },
  { id: "rr4",  patientName: "Andreas Gruber",   email: "a.gruber@gmx.at",      appointmentDate: "2026-02-16", sendDate: "2026-02-18", status: "pending" },
  { id: "rr5",  patientName: "Sabine Wagner",    email: "s.wagner@gmail.com",   appointmentDate: "2026-02-15", sendDate: "2026-02-17", status: "sent" },
  { id: "rr6",  patientName: "Klaus Bauer",      email: "k.bauer@a1.net",       appointmentDate: "2026-02-15", sendDate: "2026-02-17", status: "sent" },
  { id: "rr7",  patientName: "Ingrid Schmid",    email: "i.schmid@hotmail.com", appointmentDate: "2026-02-14", sendDate: "2026-02-16", status: "opened" },
  { id: "rr8",  patientName: "Franz Lehner",     email: "f.lehner@gmail.com",   appointmentDate: "2026-02-14", sendDate: "2026-02-16", status: "reviewed", rating: 5, isPublic: true },
  // Previous weeks – various statuses
  { id: "rr9",  patientName: "Renate Fischer",   email: "r.fischer@yahoo.com",  appointmentDate: "2026-02-13", sendDate: "2026-02-15", status: "reviewed", rating: 4, isPublic: true },
  { id: "rr10", patientName: "Herbert Steiner",  email: "h.steiner@gmx.at",     appointmentDate: "2026-02-12", sendDate: "2026-02-14", status: "reviewed", rating: 2, feedbackText: "Die Wartezeit war leider sehr lang. Sonst war alles in Ordnung.", isPublic: false },
  { id: "rr11", patientName: "Gertrude Wolf",    email: "g.wolf@icloud.com",    appointmentDate: "2026-02-11", sendDate: "2026-02-13", status: "reviewed", rating: 5, isPublic: true },
  { id: "rr12", patientName: "Johann Pichler",   email: "j.pichler@web.at",     appointmentDate: "2026-02-10", sendDate: "2026-02-12", status: "reviewed", rating: 5, isPublic: true },
  { id: "rr13", patientName: "Helga Moser",      email: "h.moser@gmail.com",    appointmentDate: "2026-02-07", sendDate: "2026-02-09", status: "reviewed", rating: 3, feedbackText: "Kompetente Ärztin, aber Terminvergabe könnte besser sein.", isPublic: false },
  { id: "rr14", patientName: "Walter Hofer",     email: "w.hofer@a1.net",       appointmentDate: "2026-02-06", sendDate: "2026-02-08", status: "reviewed", rating: 5, isPublic: true },
  { id: "rr15", patientName: "Brigitte Reiter",  email: "b.reiter@outlook.com", appointmentDate: "2026-02-05", sendDate: "2026-02-07", status: "sent" },
];

// ─── Google Reviews ───────────────────────────────────────────────────────────

export const mockGoogleReviews: GoogleReview[] = [
  { id: "gr1", author: "Franz Lehner",   rating: 5, text: "Sehr kompetente und einfühlsame Ärztin. Die Praxis ist modern und das Personal sehr freundlich. Ich kann Frau Dr. Sang wärmstens empfehlen!", date: "2026-02-16" },
  { id: "gr2", author: "Renate Fischer", rating: 4, text: "Sehr gute Ärztin, nimmt sich viel Zeit für die Patienten. Wartezeiten manchmal etwas länger, aber die Qualität der Behandlung ist ausgezeichnet.", date: "2026-02-15" },
  { id: "gr3", author: "Gertrude Wolf",  rating: 5, text: "Endlich eine Ärztin die zuhört und wirklich hilft! Dr. Sang erklärt alles verständlich und geht auf individuelle Bedürfnisse ein.", date: "2026-02-13" },
  { id: "gr4", author: "Johann Pichler", rating: 5, text: "Hervorragende Fachärztin. Die Diagnose war präzise und die Behandlung sehr erfolgreich. Die Praxis in Brand-Laaben ist sehr gut erreichbar.", date: "2026-02-12" },
  { id: "gr5", author: "Walter Hofer",   rating: 5, text: "Sehr professionell und herzlich. Das ganze Team ist äußerst kompetent. Ich fühle mich bei Dr. Sang in den besten Händen.", date: "2026-02-08" },
];

export const mockPrivateFeedback = mockReviewRequests.filter(
  (r) => r.status === "reviewed" && r.isPublic === false && r.rating !== undefined
);

// ─── Derived helpers ──────────────────────────────────────────────────────────

export const thisWeekRequests = mockReviewRequests.filter((r) =>
  r.appointmentDate >= "2026-02-16" && r.appointmentDate <= "2026-02-20"
);

export const recentlySent = mockReviewRequests
  .filter((r) => r.status === "sent" || r.status === "opened" || r.status === "reviewed")
  .slice(0, 3);

export const googleRating = (
  mockGoogleReviews.reduce((sum, r) => sum + r.rating, 0) / mockGoogleReviews.length
).toFixed(1);

export const formatDate = (iso: string): string => {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
};
