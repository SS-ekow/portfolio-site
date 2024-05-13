'use client';

import Bubble from "./components/bubble";
import NavBar from "./components/navbar";
import LinkButton from "./components/linkButtons";
import Image from "next/image";

import two from '../../public/images/two-removebg.png'
import Project from "./components/project";
import  StickyScroll  from "./components/ui/sticky-scroll-reveal";
import HoverBorderGradient from "./components/ui/hover-border-gradient";




export default function Home() {

  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Running out of content
        </div>
      ),
    },
  ];

  return (
    <main>
      <header>
        <NavBar />
      </header>
      <section className="hero">
        
        <div className="division left">
          <div className="profile-circle"></div>
          <div className="circ"></div>
          <div className='ill'>
            <Image 
            src={two}
            alt="illustration"
            width={350}
            height={300}
            />
          </div>

          <div className="headline">
            <h1>
              Front end developers & Digital Craftsmen.
            </h1>
            <h3>
              Highly skilled front end developers eager to start working with you today.
            </h3>

            <button className="hire-us">
              Work with us 
            </button>

          </div>
            
          <div className="bubble-box">
            <Bubble source={"#"} />
            <Bubble source={"#"} />
            <Bubble source={"#"} />
            <Bubble source={"#"} />
          </div>
        </div>
        <div className="division right">
          <div className="profile-circle"></div>
          <div className="circ"></div>

          <div className="bubble-box">
            <Bubble source={"#"} />
            <Bubble source={"#"} />
            <Bubble source={"#"} />
            <Bubble source={"#"} />

          </div>
        </div>
        

        
      </section>
      <section className="about" id="about" >
        <div className="col-1" >
          <p > 
          
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam repellat perferendis cupiditate ipsam obcaecati nihil magnam, quisquam cum eveniet, facilis laborum 
          velit molestiae quaerat, consequatur harum? Voluptatibus ex, molestiae unde repellendus, iste non reprehenderit voluptates doloribus at ipsa totam quae. Vitae error corrupti architecto. Mollitia, sapiente maiores reiciendis nisi consequuntur veritatis illo magni aut aliquid ut debitis iusto adipisci placeat temporibus recusandae possimus dicta amet magnam distinctio, voluptas eligendi. <br /> <br />
          Assumenda possimus, vero, deleniti veritatis quos ullam ex quidem adipisci molestias tempora harum omnis repellendus quisquam ut nostrum nobis minus qui est velit voluptatem? Eum, quos? Velit hic quos aperiam nisi odit, rem nobis numquam possimus sunt eum ab. Ipsa ullam ad totam perspiciatis cum harum consectetur nisi molestiae vero est eaque modi, doloremque iure excepturi exercitationem 
          reiciendis nihil provident quis enim itaque ipsam. Debitis, odio veniam eos mollitia voluptatem consequuntur? Mollitia nostrum quibusdam veniam quis eligendi.</ p>

          <p className="statement">
            "Two devs are better for the price of one"
          </p>
        </div>
        <div className="col-2">
          <div>
            <h2 className="about-title">About us</h2>
            <div className="line"></div>
          </div>
          <div className="graphic">

          </div>
          <div className="mission">
            <h3>Our Mission</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          </div>
          <div className="links">
            <LinkButton />
          </div>
        </div>
      </section>
      <section className="projects" id="projects">
        <h2 className="about-title">Featured projects</h2>
        
        {/* <Project />
        <Project />
        <Project />
        <Project /> */}
         <StickyScroll content={content} />
        
        <div>
          <a href="#">
          <button className="more">See more →</button></a>
        </div>
        
      </section>
      <section className="ask" id="ask">
        <h2 className="about-title">Send us a message</h2>
        <form action="">
          <label htmlFor="">Your Name</label><input type="text" />
          <label htmlFor="">Name of your Organization</label><input type="text" />
          <label htmlFor="">Message</label><textarea type="text" />
          {/* <input type="submit" className="submit" /> */}
          <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black  text-white  flex items-center space-x-2 px-2"
      >

        <span>Send Message</span>
      </HoverBorderGradient>
        </form>

      </section>
    </main>
  );
}






