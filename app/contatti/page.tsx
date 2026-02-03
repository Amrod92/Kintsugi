"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContattiPage() {
  return (
    <div className="bg-[#f7f4ee] text-[#3b2f22] min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(219,177,108,0.25),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(240,220,185,0.6),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Contatti
              </p>
              <h1 className="font-seasons mt-4 text-4xl font-bold leading-tight sm:text-5xl">
                Parliamone. Ogni conversazione è un inizio.
              </h1>
              <p className="mt-5 max-w-xl text-base text-[#5b4b3a] sm:text-lg">
                Siamo qui per aiutarti. Raccontaci il tuo progetto o la tua
                esigenza e costruiremo insieme un percorso di cura e
                trasformazione.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Email
                  </p>
                  <a
                    href="mailto:info@kintsugi.it"
                    className="mt-2 block text-sm font-semibold text-[#3b2f22] hover:text-[#886b44]"
                  >
                    info@kintsugi.it
                  </a>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Telefono
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#3b2f22]">
                    +39 06 12345678
                  </p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Orari
                  </p>
                  <p className="mt-2 text-sm text-[#5b4b3a]">
                    Lun - Ven, 9:00 - 18:00
                  </p>
                </div>
                <div className="rounded-3xl border border-white/70 bg-white/70 p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Sede
                  </p>
                  <p className="mt-2 text-sm text-[#5b4b3a]">
                    Via Esempio 123, Roma
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/80 bg-white/80 p-8 shadow-2xl shadow-[#cbb896]/40">
              <form className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                    Inviaci un messaggio
                  </p>
                  <p className="mt-2 text-sm text-[#5b4b3a]">
                    Compila il modulo e ti risponderemo entro 48 ore.
                  </p>
                </div>
                <FieldGroup>
                  <FieldSet>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="contact-nome">
                          Nome completo
                        </FieldLabel>
                        <Input
                          id="contact-nome"
                          placeholder="Mario Rossi"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="contact-email">Email</FieldLabel>
                        <Input
                          id="contact-email"
                          placeholder="mario.rossi@example.com"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="contact-topic">
                          Argomento
                        </FieldLabel>
                        <Input
                          id="contact-topic"
                          placeholder="Laboratorio per team / richiesta partnership"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="contact-message">
                          Messaggio
                        </FieldLabel>
                        <Textarea
                          id="contact-message"
                          placeholder="Raccontaci come possiamo aiutarti."
                        />
                      </Field>
                      <Button
                        type="submit"
                        className="w-full rounded-full bg-[#9b7b4f] text-xs font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#886b44]"
                      >
                        Invia messaggio
                      </Button>
                    </FieldGroup>
                  </FieldSet>
                </FieldGroup>
              </form>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Dove siamo
              </p>
              <p className="mt-3 text-sm text-[#5b4b3a]">
                Vieni a trovarci per un incontro o una visita al laboratorio.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/80">
                <iframe
                  width="100%"
                  height="320"
                  title="Mappa Kintsugi"
                  src="https://maps.google.com/maps?q=Via%20Esempio%20123,%2000100%20Roma,%20Italia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="grayscale hover:grayscale-0 transition duration-500"
                ></iframe>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b7b4f]">
                Servizi
              </p>
              <ul className="mt-4 space-y-3 text-sm text-[#5b4b3a]">
                <li>Laboratori di Kintsugi per team e comunità.</li>
                <li>Percorsi formativi su resilienza e cura.</li>
                <li>Eventi e talk personalizzati per aziende.</li>
                <li>Progetti culturali con impatto sociale.</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  type="button"
                  className="rounded-full bg-white/80 text-xs font-semibold uppercase tracking-[0.2em] text-[#3b2f22] hover:bg-white"
                >
                  Scarica brochure
                </Button>
                <Button
                  type="button"
                  className="rounded-full border border-[#cbb896] bg-transparent text-xs font-semibold uppercase tracking-[0.2em] text-[#5b4b3a] hover:bg-white/80"
                >
                  Prenota call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
