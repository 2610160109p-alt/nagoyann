const services = [
  {
    title: "Brand Direction",
    description:
      "事業のらしさを言語化し、Webサイトや発信に一貫した判断軸をつくります。",
  },
  {
    title: "Web Production",
    description:
      "ランディングページから小規模サイトまで、公開後の運用を見据えて設計します。",
  },
  {
    title: "Growth Support",
    description:
      "改善サイクルを前提に、導線、コピー、表示速度、更新性を継続的に整えます。",
  },
];

const strengths = [
  "目的から逆算した情報設計",
  "スマートフォンで読みやすいUI",
  "公開後も扱いやすい構成",
  "Vercelに適した軽量な実装",
];

const steps = [
  "要件整理",
  "構成とコピー設計",
  "実装と品質確認",
  "公開後の改善",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7faf8] text-[#14201a]">
      <section className="px-5 py-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
          <a
            href="#top"
            className="text-lg font-semibold text-[#14201a]"
            aria-label="nagoyann top"
          >
            nagoyann
          </a>
          <nav
            className="hidden items-center gap-8 text-sm font-medium text-[#56635d] sm:flex"
            aria-label="Primary navigation"
          >
            <a className="transition hover:text-[#17211b]" href="#services">
              Services
            </a>
            <a className="transition hover:text-[#17211b]" href="#process">
              Process
            </a>
            <a className="transition hover:text-[#17211b]" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </section>

      <section id="top" className="px-5 pb-20 pt-14 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-end">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase text-[#52746c]">
              Digital brand studio
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] text-[#14201a] sm:text-6xl lg:text-7xl">
              伝わる形へ、静かに強く整える。
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#56635d] sm:text-xl sm:leading-9">
              nagoyannは、サービスの価値を見つめ直し、Web上で信頼される見せ方へ整えるブランド・Web制作パートナーです。
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#14201a] px-7 text-sm font-semibold text-white transition hover:bg-[#26322c]"
              >
                相談する
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#cbd6d1] px-7 text-sm font-semibold text-[#14201a] transition hover:border-[#14201a]"
              >
                サービスを見る
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-[#dbe5e1] bg-[#eef6f3] p-5 shadow-[0_24px_70px_rgba(20,32,26,0.08)] sm:p-7">
            <div className="rounded-lg bg-[#14201a] p-6 text-white sm:p-8">
              <p className="text-sm font-medium text-[#bcd8d1]">What we shape</p>
              <p className="mt-8 text-3xl font-semibold leading-tight sm:text-4xl">
                言葉、画面、導線をひとつの体験として設計します。
              </p>
              <div className="mt-10 grid gap-4 text-sm text-[#dce2d3]">
                {strengths.map((strength) => (
                  <div
                    className="flex items-center gap-3 border-t border-white/10 pt-4"
                    key={strength}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#bcd8d1]" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe5e1] bg-white px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold text-[#14201a]">01</p>
            <p className="mt-2 text-sm leading-6 text-[#56635d]">
              事業の強みと顧客の期待を整理し、伝えるべき焦点を絞ります。
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[#14201a]">02</p>
            <p className="mt-2 text-sm leading-6 text-[#56635d]">
              スマホでも迷わず読める構成で、第一印象から信頼につなげます。
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[#14201a]">03</p>
            <p className="mt-2 text-sm leading-6 text-[#56635d]">
              Vercelでの本番運用を前提に、軽く保守しやすい実装にします。
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-[#52746c]">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              事業の輪郭が伝わるWeb体験をつくる。
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                className="rounded-lg border border-[#dbe5e1] bg-white p-7"
                key={service.title}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-5 text-base leading-7 text-[#56635d]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-[#14201a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-[#bcd8d1]">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              小さく始めて、確かに磨く。
            </h2>
          </div>
          <ol className="grid gap-4">
            {steps.map((step, index) => (
              <li
                className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-6 sm:grid-cols-[4rem_1fr] sm:items-center"
                key={step}
              >
                <span className="text-sm font-semibold text-[#bcd8d1]">
                  0{index + 1}
                </span>
                <span className="text-xl font-semibold">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-lg border border-[#dbe5e1] bg-white p-8 sm:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-[#52746c]">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
                ブランドとWebの整え方から相談できます。
              </h2>
            </div>
            <div>
              <p className="text-base leading-8 text-[#56635d]">
                新規サービス、既存サイトの見直し、公開前のLP改善など、まずは現在地を整理するところから対応します。
              </p>
              <a
                href="mailto:hello@nagoyann.com"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#14201a] px-7 text-sm font-semibold text-white transition hover:bg-[#26322c] sm:w-auto"
              >
                hello@nagoyann.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
