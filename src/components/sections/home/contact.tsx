import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../ui/button";
import Input from "../../ui/input";
import { H2, P } from "../../typography";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactSection() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatus("idle");
    setFormState((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      return;
    }
    setStatus("success");
    setFormState(initialState);
  };

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
      <div className="rounded-[32px] border border-dark/10 bg-white p-8 shadow-xl lg:p-12">
        <div className="space-y-4 text-center">
          <H2 className="text-3xl text-dark">Tell us what you’re building.</H2>
          <P className="text-dark-300">
            Share a few details and we’ll send a tailored starter plan, component recommendations,
            and a live preview link.
          </P>
        </div>
        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-2 text-sm font-semibold text-dark">
            Full name
            <Input
              type="user text"
              placeholder="Add your name"
              value={formState.name}
              onChange={handleChange("name")}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-dark">
            Work email
            <Input
              type="email"
              placeholder="name@company.com"
              value={formState.email}
              onChange={handleChange("email")}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-dark">
            What should we focus on?
            <textarea
              className="min-h-[120px] rounded-[8px] border border-dark/10 px-4 py-3 text-base text-dark outline-none transition-colors focus:border-primary/70"
              placeholder="Tell us about your goals or current bottlenecks."
              value={formState.message}
              onChange={handleChange("message")}
            />
          </label>
          <div className="space-y-2">
            <Button className="bg-dark text-white hover:bg-dark-200" type="submit">
              Send project brief
            </Button>
            {status === "success" && (
              <p className="text-sm text-primary">Thanks! We’ll reply within one business day.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

