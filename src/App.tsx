import { useEffect, useState } from "react"
import { HeroImng } from "./components/HeroImg"
import { PageContent } from "./components/PageContent/PageContent"
import { Logo } from "./components/Logo";

function App() {
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 640)
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <main className="flex sm:flex-row flex-col-reverse min-h-screen">
        <PageContent isSmall={isSmall} />
        <HeroImng />
        {isSmall && (
          <Logo isSmall={isSmall} />
        )}
      </main>
    </>
  )
}

export default App
