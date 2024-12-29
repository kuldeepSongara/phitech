import NavBar from "@/modules/NavBar";
import Testimonials from "@/modules/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="min-h-screen pt-[40px] pb-[60px] flex flex-col lg:pt-[24px] lg:pb-[32px] lg:m-[10px] px-4 lg:px-8">
        <NavBar />
        <article className="flex-grow flex items-center justify-center font-semibold text-3xl">
          Driving Business Success with Custom IT Solutions.
        </article>
        <div>Services Marquee alternative</div>
      </section>
      {/* <Testimonials /> */}
    </div>
  );
}
