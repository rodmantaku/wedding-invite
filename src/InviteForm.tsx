import React, { useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const InviteForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    const pubKey = import.meta.env.VITE_PUB_KEY;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    emailjs
      .sendForm(
        serviceID, // EmailJSのサービスID
        templateID, // テンプレートID
        formRef.current,
        pubKey // パブリックキー
      )
      .then(
        () => {
          alert("送信しました！ありがとうございます。");
          formRef.current?.reset();
        },
        (error) => {
          alert("送信に失敗しました: " + error.text);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="flex flex-col gap-2 max-w-md mx-auto"
    >
      <label>お名前</label>
      <input type="text" name="name" required className="border p-2 rounded" />

      <label>メールアドレス</label>
      <input
        type="email"
        name="email"
        required
        className="border p-2 rounded"
      />

      <label>メッセージ</label>
      <textarea name="title" className="border p-2 rounded" />

      <button
        type="submit"
        className="bg-blue-500 text-white rounded p-2 mt-2 hover:bg-blue-600"
      >
        送信
      </button>
    </form>
  );
};

export default InviteForm;
