import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

type ContactFormProps = {
  // onSubmit: (email: string, message: string) => void;
};

const ContactForm: React.FC<ContactFormProps> = () => {
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmissionStatus("pending");

    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      data[key as string] = value as string;
    });

    const formEndpoint = "https://formspree.io/f/moqgqprb";
    const response = await fetch(formEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setSubmissionStatus("success");
    } else {
      setSubmissionStatus("error");
    }
  };

  return (
    <section className="px-md-5 pt-3 pb-4 contact-form bg-black text-light col">
        {submissionStatus === "success" && (
        <div className="alert alert-success text-center" role="alert">
          Form submitted successfully!
        </div>
      )}
      {submissionStatus === "error" && (
        <div className="alert alert-danger text-center" role="alert">
          Form submission error. Please try again later.
        </div>
      )}
      <Link to={"/"}>
              <button className="btn btn-outline-secondary mt-3 mx-5 text-light">
                <img src={"src/assets/—Pngtree—white house building cartoon_4724234.png"} className="icon-home" alt="" />
                Home</button>
            </Link>
      <h1 className="mt-5 py-2 px-5 mb-1">Let's get in touch!</h1>
      <p className="mt-1 py-2 px-5 mb-1 col-lg-7">
        I’m always open to talk about digital products, coding, or other
        opportunities. Do you want to send feedback? Wanna say "hi"? Let me
        know! Feel free to contact me 🤓
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-1 py-2 px-5 mb-1 col-lg-7" >
          <label htmlFor="InputEmail" className="fonts-home">
            Email Address
          </label>
          <input
            type="email"
            name="_replyto"
            className="form-control bg-transparent text-white mt-2"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group py-1 px-5 mb-3 col-lg-7">
          <label htmlFor="ControlTextarea" className="fonts-home">
            Your Message
          </label>
          <textarea
            name="message"
            className="form-control mt-2 bg-transparent text-white"
            placeholder="Enter your message"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-outline-secondary mb-2 mt-2 mx-5"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
