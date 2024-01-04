import React from 'react';

type ContactFormProps = {
  onSubmit: (email: string, message: string) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (event.target as any).email.value;
    const message = (event.target as any).message.value;
    onSubmit(email, message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-1 py-2 px-5 mb-1">
        <label htmlFor="InputEmail" className="fonts-home">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          className="form-control bg-transparent text-white mt-2"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group py-1 px-5 mb-3">
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
      <button type="submit" className="btn btn-outline-secondary mb-2 mt-2 mx-5">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
