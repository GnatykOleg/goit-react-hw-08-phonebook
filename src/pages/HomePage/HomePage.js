import s from '../HomePage/HomePage.module.css';

export default function HomePage() {
  return (
    <section className={s.section}>
      <main className={s.main}>
        <div className={s.container}>
          <h1 className={s.title}>
            Hello, this is a phone book web application
          </h1>
          <img
            className={s.img}
            src="https://cdn.pixabay.com/photo/2017/01/31/08/42/comic-characters-2023311_960_720.png"
            alt="hello"
          ></img>
        </div>
      </main>
    </section>
  );
}
