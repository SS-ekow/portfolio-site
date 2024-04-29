'use client';

import Bubble from "./components/bubble";
import NavBar from "./components/navbar";
import {bubbles} from "../app/utils/bubbles";
import LinkButton from "./components/linkButtons";





export default function Home() {

  return (
    <main>
      <section className="hero">

        <NavBar />

        <div className="division">

        </div>
        
        {/* <div className="bubble-container">
          
        </div> */}
        
      </section>
      <section className="about" id="about" >
        <div className="col-1" >
          <p > 
          
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam repellat perferendis cupiditate ipsam obcaecati nihil magnam, quisquam cum eveniet, facilis laborum 
          velit molestiae quaerat, consequatur harum? Voluptatibus ex, molestiae unde repellendus, iste non reprehenderit voluptates doloribus at ipsa totam quae. Vitae error corrupti architecto. Mollitia, sapiente maiores reiciendis nisi consequuntur veritatis illo magni aut aliquid ut debitis iusto adipisci placeat temporibus recusandae possimus dicta amet magnam distinctio, voluptas eligendi. 
          Assumenda possimus, vero, deleniti veritatis quos ullam ex quidem adipisci molestias tempora harum omnis repellendus quisquam ut nostrum nobis minus qui est velit voluptatem? Eum, quos? Velit hic quos aperiam nisi odit, rem nobis numquam possimus sunt eum ab. Ipsa ullam ad totam perspiciatis cum harum consectetur nisi molestiae vero est eaque modi, doloremque iure excepturi exercitationem 
          reiciendis nihil provident quis enim itaque ipsam. Debitis, odio veniam eos mollitia voluptatem consequuntur? Mollitia nostrum quibusdam veniam quis eligendi. Beatae minus est 
          sint perferendis adipisci commodi iusto eveniet obcaecati rem! Debitis magnam culpa, officiis quaerat optio dolore eveniet iure dolorum tenetur distinctio. Ut, illum. Cumque earum ipsa, neque quidem nam accusantium quam, assumenda libero in voluptatem molestiae dolores molestias sequi possimus maxime saepe iusto reprehenderit iure voluptatibus autem ea quo facere fugiat. Aliquam.</ p>
        </div>
        <div className="col-2">
          <div>
            <h2>About us</h2>
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
        <h2>Featured projects</h2>
        <div className="project-card">
          <div className="project-image">

          </div>
          <div className="project-info"> 
            <h3 className="font-bold text-2xl">Project Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button className="live-btn">Live →</button>
          </div>
        </div>
        <div className="project-card">
          
          <div className="project-info"> 
            <h3 className="font-bold text-2xl">Project Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button className="live-btn">Live →</button>
          </div>

          <div className="project-image">

          </div>
          
        </div>

        <div className="project-card">
          <div className="project-image">

          </div>
          <div className="project-info"> 
            <h3 className="font-bold text-2xl">Project Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button className="live-btn">Live →</button>
          </div>
        </div>
        <div>
          <a href="#">
          <button className="more">See more →</button></a>
        </div>
        
      </section>
      <section className="ask" id="ask">
        <h2>Send us a message</h2>
        <form action="">
          <label htmlFor="">Your Name</label><input type="text" />
          <label htmlFor="">Name of your Organization</label><input type="text" />
          <label htmlFor="">Message</label><textarea type="text" />
          <input type="submit" className="submit" />
        </form>

      </section>
    </main>
  );
}




