import { Email } from "../Email/Email"
import { Logo } from "../Logo"

type PageContentProps = {
  isSmall: boolean;
}

export function PageContent({ isSmall }: PageContentProps) {
  return (
    <section className="sm:w-[60%] sm:h-dvh h-[70vh] bg-[url('/images/bg-pattern-desktop.svg')] bg-center bg-cover relative flex flex-col justify-center gap-25 px-8">
      <div className="flex flex-col items-center justify-start">
        <div className="text-center sm:text-left">
          {!isSmall && (
            <Logo isSmall={isSmall} />
          )}
          <h1 className="text-7xl tracking-widest mb-8 text-(--text-pink) font-light">WE'RE <br />
            <span className="text-(--bold-heading) font-semibold">
              COMING
              <br />
              SOON
            </span></h1>
          <p className="text-(--text-pink) max-w-112.5">
            Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
          </p>
          <Email />
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-linear-to-br from-(--bg-gradiant-from) to-(--bg-gradiant-to) -z-10"></div>
    </section>
  )
}