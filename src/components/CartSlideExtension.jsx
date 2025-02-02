import React from "react";

const cartItems = [
  {
    id: 1,
    name: "Dog Blanket Nap",
    color: "Brown",
    price: 85.0,
    quantity: 4,
    image: "/api/placeholder/80/80",
  },
  {
    id: 2,
    name: "Dog Mini Travel Set",
    price: 66.0,
    quantity: 2,
    image: "/api/placeholder/80/80",
  },
  {
    id: 3,
    name: "Happy Howlidays Cat and Dog",
    price: 8.5,
    quantity: 1,
    image: "/api/placeholder/80/80",
  },
];

const CartSlideExtension = () => {
  return (
    <>
      <div className="h-screen z-[2000] flex flex-col">
        {/* Heading for the extended cart info */}
        <h2 className="tracking-[.2rem] uppercase text-[.9rem] pb-4">
          Extended Cart Info
        </h2>

        {/* Content section with scroll */}
        <div className="overflow-y-scroll flex-1 py-4 pr-4 space-y-4 custom-scrollbar text-[.7rem] tracking-[.05rem] text-gray-700">
          {cartItems.map((items) => (
            <div key={items.id} className="flex gap-x-4">
              <div>
                <img
                  src={items.image}
                  alt={items.name}
                  className="w-20 h-20 object-cover"
                />
              </div>
              <div>
                <p className="font-semibold uppercase">{items.name}</p>
                <p className="">Price: ₦{items.price}</p>
                <p className="">Quantity: {items.quantity}</p>
                <button className="mt-2 px-4 py-1 bg-black text-white hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
          <div className="space-y-4">
            {/* Sample content to ensure scrolling */}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            quisquam debitis officia error eligendi nostrum harum reprehenderit
            ad saepe ullam iste incidunt nemo dolores qui at aperiam...
          </div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          eum architecto consequuntur omnis ipsum quidem totam nobis explicabo
          eaque, quia quibusdam expedita quo nihil velit recusandae? Quo, ut
          dolor officia maiores, libero voluptas doloribus nulla impedit fuga
          explicabo incidunt necessitatibus quis autem. Voluptatibus assumenda
          accusantium dolores minus earum, deleniti doloremque eos debitis,
          inventore impedit eum aliquam quo esse distinctio labore voluptas
          vitae tempore quis doloribus unde ratione molestias saepe dolor aut?
          Impedit excepturi laboriosam animi architecto est illo ipsum,
          consequatur sunt laborum aspernatur et nobis numquam quisquam.
          Excepturi facere iure, blanditiis dolorem quod quasi debitis
          cupiditate doloremque qui repellat fuga autem, praesentium ut
          reprehenderit non aperiam accusamus nihil soluta corporis et esse
          quibusdam. Natus tenetur distinctio qui maxime! Laborum aliquid
          perferendis alias quas aperiam similique ipsum officiis eligendi
          exercitationem facere iste, sint tempore molestiae iure earum vero
          ipsam veniam saepe vel fugit illum, nemo fuga. Corporis molestias
          aspernatur nisi, illum quidem quam! Voluptate, vero. Ad esse non quas
          soluta sit dolores velit sed, nisi fuga odio eaque adipisci nostrum
          rerum voluptate itaque placeat inventore tempora repellendus numquam
          cupiditate pariatur voluptates neque quibusdam. Hic ducimus ea
          consectetur distinctio obcaecati sed provident sequi! Est officiis
          accusantium quisquam maiores aliquam quo sint, fugit numquam ad. Ab
          expedita consequuntur culpa maxime eligendi amet ullam! Velit, libero
          molestiae nostrum molestias ratione, quisquam quis vitae eius modi
          consequatur inventore, rem commodi voluptatem temporibus. Et voluptate
          veritatis qui libero mollitia placeat facilis molestias deserunt velit
          ab nesciunt nemo architecto rerum dolorum nostrum aliquid est odit
          laborum dolore iste, quas doloremque eveniet delectus explicabo! Quasi
          iusto consequuntur quis laboriosam temporibus repellat dolores
          voluptatibus? Ipsa, magni. Nisi pariatur ex sit praesentium ducimus
          accusantium recusandae ut aperiam blanditiis saepe exercitationem quam
          quae cupiditate molestiae quia, odio dolorem reiciendis voluptatum
          dignissimos nihil. Corporis ad sunt deleniti expedita fugit id, quidem
          ipsa quae modi recusandae fuga est aliquam error accusantium dolore!
          Quidem neque ab vero fuga similique tenetur dolore voluptate. Laborum
          beatae, soluta perspiciatis enim, ex, molestiae debitis rerum
          asperiores amet unde fugit qui eligendi? Nobis, deserunt? Recusandae
          est a quis ut, aspernatur incidunt sunt laudantium iste mollitia
          impedit! Illo dignissimos cupiditate nesciunt distinctio officia
          numquam adipisci maxime! Ex provident nemo blanditiis asperiores ut
          recusandae debitis repudiandae nesciunt ea! Accusantium id cupiditate
          veritatis doloremque ut dolore numquam corporis quisquam praesentium
          officia nostrum libero iure dolorum quam, voluptate deserunt, maiores
          ab a temporibus tempore neque qui dolorem autem? Dolorem asperiores
          voluptate atque molestias.
        </div>
      </div>
    </>
  );
};

export default CartSlideExtension;
