"use client";
import { sendEmail } from "./_actions";

export default function ContactForm() {
  const handleSubmit = async (formData) => {
    const data = {};
    data.name = formData.get("name");
    const file = await uploadImage(formData.get("doc"));
    data.file = file;
    console.log("test");
    sendEmail(data);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const uploadImage = async (file) => {
    const base64 = await convertBase64(file);
    const base64String = base64.replace("data:", "").replace(/^.+,/, "");

    return base64String;
  };
  return (
    <div>
      <form action={handleSubmit}>
        <input placeholder="Name" name="name" aria-label="name" />
        <input type="file" name="doc" aria-label="doc" />
        <button type="submit">GO</button>
      </form>
    </div>
  );
}
