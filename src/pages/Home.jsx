import React from "react";
import "./h.css";
import Carousel from '../components/Carousel.jsx'
import {Link}  from 'react-router'

const Home = () => {
  return (
    <div className="bg-image">
      <div className="text pt-20 pb-20 pl-10 pr-10 text-justify">
        <div className="text-4xl font-extrabold pb-5">IIT Ropar</div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        consequuntur est excepturi ab error. Consectetur eum unde exercitationem
        sed non quae, ullam modi ab tenetur architecto eaque pariatur laborum id
        aut excepturi nihil, doloremque delectus suscipit dicta est
        reprehenderit possimus ex! Distinctio, facilis? Quos dolor voluptates
        dolores. Nulla porro voluptate cum vel, distinctio, eos autem minima
        dicta ipsum nemo ipsam nisi? Odit deleniti, non sapiente ea cum esse
        debitis unde quaerat tempore, quisquam nisi id commodi vitae fuga
        maiores ut alias modi, ipsam laboriosam similique corrupti. Eligendi
        pariatur odit impedit, eum illum nam rem quisquam, sed ipsam sint, dicta
        consequuntur voluptas debitis deserunt optio atque distinctio
        reprehenderit illo quidem aperiam facilis aut? Dolor, veniam suscipit
        esse maxime dicta facilis harum optio tempore aliquam, illum doloremque
        fuga cumque? Magnam sequi modi natus aspernatur non facilis in
        necessitatibus incidunt libero eos, officiis veritatis. Odit, eaque
        aperiam dignissimos aliquid quis aut dicta ex nam tenetur fuga, facilis
        quae labore voluptatum accusamus, nulla molestiae non praesentium. Iusto
        soluta veniam aspernatur explicabo nihil voluptate illo temporibus
        laudantium officiis aperiam iure mollitia nostrum, incidunt quaerat.
        Voluptatibus et nulla aspernatur obcaecati dicta dolores fugiat, natus
        aliquam adipisci. Voluptate quibusdam explicabo officia, assumenda
        inventore iure eaque eligendi veniam quae libero soluta quos dolore
        praesentium ipsa, provident id numquam.
      </div>

      <div className="text pt-20 pb-20 pl-10 pr-10 text-justify">
        <div className="text-4xl font-extrabold">About CDPC</div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi incidunt,
        fugit amet in voluptate sed! Eligendi nemo soluta aliquam aut illo quasi
        ex at rerum nesciunt minima velit deserunt ab debitis voluptas
        voluptatem veritatis commodi voluptatum, aperiam culpa, consectetur quos
        non placeat quae! Sunt cum et minus laboriosam tempora praesentium,
        mollitia quam est autem, nesciunt accusamus officiis, voluptate
        accusantium! Delectus assumenda quam voluptate nulla, unde minima
        reprehenderit, voluptatum nisi fugit nemo mollitia facilis ex ea
        excepturi expedita veritatis accusantium iure, eligendi optio autem.
        Ipsam, libero eius. Mollitia saepe nam nesciunt culpa iusto rem
        distinctio quos vitae possimus, natus praesentium unde fuga minus autem
        accusamus neque tenetur molestias aut voluptate cumque! Dolorum,
        provident quasi. Sequi aspernatur ex voluptatem, maiores praesentium,
        quaerat ratione quisquam doloremque inventore tenetur beatae amet iste
        distinctio fuga quo reprehenderit error quis similique recusandae, nulla
        excepturi voluptatibus earum necessitatibus autem. Sequi commodi sint
        laudantium distinctio earum rem, qui facilis velit quidem
        necessitatibus, nobis nulla neque assumenda eius placeat incidunt
        magnam, obcaecati voluptas cumque ab dolorum.
      </div>

      <div className='pl-5 pr-5 pb-5'>
        <Carousel />
        <div>
        {/* <Link className='flex justify-end pr-10 text-lg'><button className='hover:curosr-pointer'>More</button></Link> */}

        </div>
      </div>
    </div>
  );
};

export default Home;
