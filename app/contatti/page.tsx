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
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white capitalize tracking-tight mb-4">
              Contattaci
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Siamo qui per aiutarti. Compila il modulo o utilizza i riferimenti
              qui sotto per metterti in contatto con il team di Kintsugi.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                  <span>📍</span> I Nostri Contatti
                </h2>

                <div className="space-y-6">
                  {/* Indirizzo */}
                  <div className="flex items-start p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
                    <div className="shrink-0 p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full text-yellow-600 dark:text-yellow-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Indirizzo
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        Via Esempio 123
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        00100 Roma, Italia
                      </p>
                    </div>
                  </div>

                  {/* Telefono */}
                  <div className="flex items-start p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
                    <div className="shrink-0 p-3 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Telefono
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        +39 06 12345678
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Lun - Ven, 9:00 - 18:00
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition duration-300">
                    <div className="shrink-0 p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Email
                      </h3>
                      <a
                        href="mailto:info@kintsugi.it"
                        className="mt-1 text-yellow-600 dark:text-yellow-400 hover:underline"
                      >
                        info@kintsugi.it
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mappa Interattiva (Google Maps) */}
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-80 w-full">
                <iframe
                  width="100%"
                  height="100%"
                  title="Mappa Kintsugi"
                  src="https://maps.google.com/maps?q=Via%20Esempio%20123,%2000100%20Roma,%20Italia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="grayscale hover:grayscale-0 transition duration-500"
                ></iframe>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 h-fit">
              <form>
                <FieldGroup>
                  <FieldSet>
                    <FieldLegend>Inviaci un messaggio</FieldLegend>
                    <FieldDescription>
                      Compila il modulo sottostante e ti risponderemo il prima
                      possibile.{" "}
                    </FieldDescription>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-nome-43j">
                          Nome Completo
                        </FieldLabel>
                        <Input
                          id="checkout-7j9-card-nome-43j"
                          placeholder="Mario Rossi"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="checkout-7j9-card-email-uw1">
                          Email
                        </FieldLabel>
                        <Input
                          id="checkout-7j9-card-email-uw1"
                          placeholder="mario.rossi@example.com"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="textarea-messaggio">
                          Messagio
                        </FieldLabel>
                        <FieldDescription>
                          Scrivi il tuo messaggio qui sotto.
                        </FieldDescription>
                        <Textarea
                          id="textarea-messaggio"
                          placeholder="Come possiamo aiutarti?"
                        />
                      </Field>
                      <Button type="submit">Invia Email</Button>
                    </FieldGroup>
                  </FieldSet>
                </FieldGroup>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
