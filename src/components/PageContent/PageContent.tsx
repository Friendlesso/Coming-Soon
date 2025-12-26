import { Logo } from "../Logo"

export function PageContent() {
  return (
    <section className="w-[60%]">
      <Logo />
      <div>
        <h1 className="text-5xl tracking-widest text-(--text-pink) font-light">WE'RE <br /><span className="text-(--bold-heading) font-semibold text-5xl">COMING SOON</span></h1>
        <p className="text-(--text-pink)">
          Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
        </p>
      </div>
    </section>
  )
}