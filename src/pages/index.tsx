import { Glow, GlowCapture } from "@codaworks/react-glow";

import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="max-w-3xl mx-auto space-y-4 text-paragraph-md leading-relaxed mt-10">
        <p>
          With over five years of professional experience, I&rsquo;ve immersed
          myself in building web, mobile, and Web3 products. Much of this
          journey has been dedicated to crafting solutions from the ground up
          for startups, where I&rsquo;ve been able to turn ideas into impactful,
          user-friendly products.
        </p>
        <p>
          Each project, whether big or small, has been an opportunity to
          discover something new. The thrill of learning never fades, and with
          every challenge, I&rsquo;ve become better at keeping up with the
          fast-changing world of technology.
        </p>
        <p>
          What I love most about being a builder is the transformation of a
          simple idea or hobby into something that people genuinely appreciate
          and use. There&rsquo;s a unique satisfaction in seeing the products
          I&rsquo;ve developed making a difference in people&rsquo;s
          lives—whether by simplifying tasks, offering entertainment, or
          bringing joy. Listening to feedback, iterating on ideas, and enhancing
          products to meet the needs of a broader audience is a driving force
          behind my work.
        </p>
        <p>
          When I&rsquo;m not building, you can find me making music, using AI to
          produce digital art, exploring new foods with my wife, or enjoying
          life with her and our beautiful cat, Lucy.
        </p>
      </div>
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-heading-2 font-semibold">Experiences</h1>
        <div className="-mx-4">
          <GlowCapture>
            <Glow>
              <div className="relative p-4 gap-x-4 cursor-pointer transition-colors rounded-md mt-4 group sm:border-2 border-transparent glow:border-[#7765e2]/50 glow:bg-[#7765e2]/10">
                <p className="text-label-xs text-semantic-fg-muted">
                  2023 - Present
                </p>
                <h2 className="text-heading-3 font-semibold mt-2">Muro</h2>
                <p className="mt-2 text-paragraph-md">
                  Led product development and deployment, architected a
                  microservice-based backend, and built web, mobile, and digital
                  frame applications, along with the supporting cloud
                  infrastructure. Played a key role in live event production and
                  collaborated with neuroscientists to explore the emotional
                  impact of digital art.
                </p>
                {/* <p className="text-label-xs mt-4 italic text-semantic-fg-subtle">
                  Click for more
                </p> */}
              </div>
              <div className="relative p-4 gap-x-4 cursor-pointer transition-colors rounded-md mt-4 group border-2 border-transparent glow:border-[#83f5e5]/50 glow:bg-[#83f5e5]/10">
                <p className="text-label-xs text-semantic-fg-muted">
                  2021 - 2024
                </p>
                <h2 className="text-heading-3 font-semibold mt-2">OPVS</h2>
                <p className="mt-2 text-paragraph-md">
                  Co-founded a startup specializing in software development
                  services for emerging businesses. Led and actively
                  participated in the development team, delivering high-quality
                  products for clients across diverse industries, including
                  cryptocurrency, healthcare, and e-commerce.
                </p>
                {/* <p className="text-label-xs mt-4 italic text-semantic-fg-subtle">
                  Click for more
                </p> */}
              </div>
              <div className="relative p-4 gap-x-4 cursor-pointer transition-colors rounded-md mt-4 group border-2 border-transparent glow:border-[#f3dec6]/50 glow:bg-[#f3dec6]/10">
                <p className="text-label-xs text-semantic-fg-muted">
                  2022 - 2023
                </p>
                <h2 className="text-heading-3 font-semibold mt-2">
                  Inverter Network
                </h2>
                <p className="mt-2 text-paragraph-md">
                  Built off-chain solutions for a Web3 protocol, closely
                  collaborated with the business development team to forge
                  potential partnerships, and conducted R&D on emerging
                  technologies to enhance the protocol.
                </p>
                {/* <p className="text-label-xs mt-4 italic text-semantic-fg-subtle">
                  Click for more
                </p> */}
              </div>
              <div className="relative p-4 gap-x-4 cursor-pointer transition-colors rounded-md mt-4 group border-2 border-transparent glow:border-[#CD1B32]/50 glow:bg-[#CD1B32]/10">
                <p className="text-label-xs text-semantic-fg-muted">2022</p>
                <h2 className="text-heading-3 font-semibold mt-2">Rapsodo</h2>
                <p className="mt-2 text-paragraph-md">
                  Developed API services for a sports analytics platform with a
                  focus on baseball and golf. Collaborated with Discovery to
                  create the GolfDigest platform.
                </p>
                {/* <p className="text-label-xs mt-4 italic text-semantic-fg-subtle">
                  Click for more
                </p> */}
              </div>
              <div className="relative p-4 gap-x-4 cursor-pointer transition-colors rounded-md mt-4 group border-2 border-transparent glow:border-[#46766a]/50 glow:bg-[#46766a]/10">
                <p className="text-label-xs text-semantic-fg-muted">
                  2019-2022
                </p>
                <h2 className="text-heading-3 font-semibold mt-2">
                  ETE technology & Dataunitor
                </h2>
                <p className="mt-2 text-paragraph-md">
                  Developed both backend and frontend applications for a big
                  data management platform, with a focus on retrieving and
                  integrating data from multiple sources. Collaborated closely
                  with blockchain and AI teams.
                </p>
                {/* <p className="text-label-xs mt-4 italic text-semantic-fg-subtle">
                  Click for more
                </p> */}
              </div>
            </Glow>
          </GlowCapture>
        </div>
        <div className="pb-20"></div>
      </div>
    </div>
  );
}
