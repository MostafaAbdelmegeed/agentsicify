import { CONTACT_EMAIL } from '../../lib/config';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-semibold">About Us</h1>
      <p>
        Agentsicify delivers premium AI agentic solutions crafted to automate workflows and accelerate growth. Our expert team builds reliable infrastructures and intelligent agents to empower businesses worldwide.
      </p>
      <p>
        Interested in partnering with us? Reach out at <a className="text-blue-600 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </div>
  );
}
