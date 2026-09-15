import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { specimens } from "@/data/specimens";

type Purpose = "viewing" | "enquiry";

type FormErrors = { name?: string; email?: string; date?: string; message?: string };

const details = [
  { icon: Mail, label: "Email", value: "enquiries@venomandsilk.com", href: "mailto:enquiries@venomandsilk.com" },
  { icon: Phone, label: "Telephone", value: "+44 20 7946 0102", href: "tel:+442079460102" },
  { icon: MapPin, label: "Studio", value: "Shoreditch, London" },
  { icon: Clock, label: "Hours", value: "Private viewings by appointment" },
];

const fieldClass =
  "mt-2 h-12 rounded-none border-border bg-background/60 text-sm focus-visible:border-primary focus-visible:ring-0";

export function ContactBooking({ specimen, onSpecimenChange }: { specimen: string; onSpecimenChange: (value: string) => void }) {
  const [purpose, setPurpose] = useState<Purpose>("viewing");
  const [values, setValues] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (specimen) setPurpose("enquiry");
  }, [specimen]);

  const set = (key: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((prev) => ({ ...prev, [key]: event.target.value }));

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (purpose === "viewing" && !values.date) next.date = "Please choose a preferred date.";
    if (!values.message.trim()) next.message = "A short note helps us prepare.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const reset = () => {
    setSent(false);
    setValues({ name: "", email: "", phone: "", date: "", message: "" });
    setErrors({});
  };

  return (
    <section id="enquire" className="section-space bg-surface">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-12">
        <div className="reveal">
          <p className="eyebrow">Contact & booking</p>
          <h2 className="mt-5 font-display text-5xl leading-[0.95] sm:text-7xl">
            Arrange a<br />
            <span className="italic text-primary">private viewing.</span>
          </h2>
          <p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">
            The collection is shown quietly, one guest at a time. Tell us what draws you, and we will prepare the
            appropriate enclosures, notes, and time.
          </p>
          <dl className="mt-12 grid gap-px border-t border-border bg-border">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 bg-surface py-5">
                <span className="grid size-10 place-items-center border border-border text-primary">
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <dt className="eyebrow">{label}</dt>
                  <dd className="mt-1 truncate text-sm text-foreground/80">
                    {href ? <a className="hover:text-primary" href={href}>{value}</a> : value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal border border-border bg-card/60 p-6 sm:p-10">
          {sent ? (
            <div className="grid min-h-[28rem] place-items-center text-center">
              <div className="animate-fade-in">
                <span className="mx-auto grid size-16 place-items-center rounded-full border border-primary text-primary">
                  <Check size={24} />
                </span>
                <h3 className="mt-8 font-display text-4xl sm:text-5xl">Request received</h3>
                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
                  Thank you, {values.name.split(" ")[0] || "friend"}. We answer every enquiry personally, usually within
                  two working days.
                </p>
                <Button variant="ghost" size="sm" className="mt-8" onClick={reset}>Send another request</Button>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={submit} className="grid gap-6">
              <fieldset>
                <legend className="eyebrow">Purpose of request</legend>
                <div className="mt-3 grid grid-cols-2 gap-px border border-border bg-border">
                  {([["viewing", "Private viewing"], ["enquiry", "Specimen enquiry"]] as const).map(([key, label]) => (
                    <button
                      key={key}
                      type="button"
                      aria-pressed={purpose === key}
                      onClick={() => setPurpose(key)}
                      className={`px-4 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${purpose === key ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-primary"}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor="vs-name" className="eyebrow">Name</Label>
                  <Input id="vs-name" className={fieldClass} value={values.name} onChange={set("name")} placeholder="Your full name" />
                  {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="vs-email" className="eyebrow">Email</Label>
                  <Input id="vs-email" type="email" className={fieldClass} value={values.email} onChange={set("email")} placeholder="you@example.com" />
                  {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="vs-phone" className="eyebrow">Phone (optional)</Label>
                  <Input id="vs-phone" type="tel" className={fieldClass} value={values.phone} onChange={set("phone")} placeholder="+44 …" />
                </div>
                <div>
                  <Label htmlFor="vs-specimen" className="eyebrow">Specimen of interest</Label>
                  <select
                    id="vs-specimen"
                    value={specimen}
                    onChange={(event) => onSpecimenChange(event.target.value)}
                    className={`${fieldClass} w-full appearance-none border px-3 outline-none`}
                  >
                    <option value="">No preference</option>
                    {specimens.map((item) => (
                      <option key={item.scientific} value={item.common}>{item.common}</option>
                    ))}
                  </select>
                </div>
              </div>

              {purpose === "viewing" && (
                <div className="animate-fade-in">
                  <Label htmlFor="vs-date" className="eyebrow">Preferred date</Label>
                  <Input id="vs-date" type="date" className={`${fieldClass} sm:max-w-xs`} value={values.date} onChange={set("date")} />
                  {errors.date && <p className="mt-2 text-xs text-destructive">{errors.date}</p>}
                </div>
              )}

              <div>
                <Label htmlFor="vs-message" className="eyebrow">Message</Label>
                <Textarea id="vs-message" rows={5} className="mt-2 rounded-none border-border bg-background/60 text-sm focus-visible:border-primary focus-visible:ring-0" value={values.message} onChange={set("message")} placeholder="Tell us what you would like to see, and any experience you already have." />
                {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <p className="max-w-xs text-[0.68rem] leading-5 text-muted-foreground">
                  Requests are reviewed personally. Viewings are confirmed only after a short welfare conversation.
                </p>
                <Button type="submit" size="lg">Send request</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
