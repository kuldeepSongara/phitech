import NavBar from "@/modules/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="min-h-screen pt-[24px] pb-[32px] px-[24px] flex flex-col lg:pt-[40px] lg:pb-[60px] lg:px-[40px]">
        <NavBar />
        <article className="flex-grow flex flex-col justify-center items-center gap-[20px]">
          <div className="flex items-center justify-center font-semibold text-3xl mb-[40px]">
            Driving Business Success with Custom IT Solutions.
          </div>
          <div className="w-full max-w-md text-center">
            At Phi Technologies, we deliver top-tier IT services—from Cloud
            Solutions to DevOps Automation — driving your business to excel in
            the digital era.
          </div>
          <div className="opacity-50">(Scroll down)</div>
        </article>
        <div>Services Marquee alternative</div>
      </section>
    </div>
  );
}
