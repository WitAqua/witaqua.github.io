export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-6 sm:px-6 lg:px-8 md:flex-row md:py-4">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-2 md:text-left">
          <p className="text-sm leading-relaxed md:leading-loose">
            &copy; 2024 WitAqua. This site is {" "}
            <a
              href="https://github.com/WitAqua/www"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              open source {"<3"}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
