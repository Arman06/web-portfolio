import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../redux/reducers";
import styles from "./Contact.module.css";
import { Element } from "react-scroll";

const Contact = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Element name="contact">
      <div className={styles.wrapper}>
        <div className={styles.contact}>
        Пишите
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label}>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <div>
            <label className={styles.label}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </label>
          </div>
          <div>
            <label className={styles.label}>
              <textarea
                name="message"
                placeholder="Сообщение..."
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              />
            </label>
          </div>
          <button type="submit" className={styles.button}>
            Отправить
          </button>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
