// import React from "react";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "../components/Navbar";
// import img_one from "../assets/img/three.jpeg";
// import img_two from "../assets/img/img_two.jpg";
// import img_four from "../assets/img/four.jpeg";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
// import ShopNowViewAllButton from "../components/ShopNowViewAllButton";

// const HomePage = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [isScrollingUp, setIsScrollingUp] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;

//       // Determine scroll behavior
//       if (currentScrollTop <= 40) {
//         setScrolled(false);
//         setIsScrollingUp(false);
//         return;
//       }

//       if (currentScrollTop < lastScrollTop) {
//         // Scrolling up
//         setIsScrollingUp(true);
//         if (currentScrollTop > 50) {
//           setScrolled(true);
//         }
//       } else {
//         // Scrolling down
//         setIsScrollingUp(false);
//         setScrolled(false);
//       }

//       // Update last scroll position
//       setLastScrollTop(currentScrollTop);
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   // Navbar Variants
//   const navbarVariants = {
//     hidden: {
//       y: -100,
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Hero Content Variants
//   const heroContentVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "tween",
//         duration: 0.6,
//         delay: 0.2,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div
//         className="message-bar w-full text-white uppercase flex justify-between font-thin bg-black py-[.3rem] px-[1.5rem] lg:px-[5rem]"
//         initial="hidden"
//         animate="visible"
//       >
//         <HiChevronLeft size={20} color="white" />
//         december sale is currently on...
//         <HiChevronRight size={20} color="white" />
//       </motion.div>

//       <AnimatePresence>
//         {scrolled && isScrollingUp && (
//           <motion.div
//             className="fixed bg-white top-0 left-0 right-0 z-50 shadow"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={navbarVariants}
//           >
//             <Navbar />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <section className="relative h-screen">
//         <div
//           className="hero bg-cover top-0 z-[-2] bg-center absolute h-full w-full"
//           style={{ backgroundImage: `url(${img_one})` }}
//         ></div>
//         <div className="absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-opacity-50"></div>

//         <div className="absolute top-0 left-0 right-0 z-[100] text-white">
//           <Navbar />
//         </div>

//         <motion.div
//           className="relative z-20 pt-[20vh] text-white"
//           initial="hidden"
//           animate="visible"
//           variants={heroContentVariants}
//         >
//           <div className="max-w-4xl mx-auto text-center py-16">
//             <motion.h1
//               className="text-3xl md:text-5xl font-thin tracking-[.5rem] uppercase mb-4 text-white
//       transition-transform duration-300 ease-in-out"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               Companion Care Starts Here
//             </motion.h1>

//             <motion.p
//               className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               Discover premium pet supplies and expert care to keep your furry
//               friends happy and healthy.
//             </motion.p>

//             <ShopNowViewAllButton name="Shop Now" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Best Sellers Section */}
//       <section className="py-16 px-4 lg:px-4 max-w-7xl mx-auto">
//         <h2 className="text-3xl font-medium text-center mb-12">Best Sellers</h2>
//         <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
//           {[1, 2, 3, 4].map((item) => (
//             <div key={item} className="aspect-square bg-sky-400 shadow-sm" />
//           ))}
//         </div>
//         <div className="mt-12 flex justify-center">
//           <ShopNowViewAllButton
//             name="View All"
//             width="md:w-[12rem] w-full py-3"
//           />
//         </div>
//       </section>

//       {/* Hero Section with Image */}
//       <section className="py-16">
//         <div className="relative w-full aspect-[21/9]">
//           <img
//             src={img_two}
//             alt="Amazing pets and meals"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
//             <h2 className="text-white text-2xl md:text-4xl mb-8 text-center">
//               Amazing Pets, Amazing Meals
//             </h2>
//             <ShopNowViewAllButton
//               name="Shop Now"
//               className="md:w-48 w-full py-3"
//             />
//           </div>
//         </div>
//         <div className="px-4 lg:px-4 max-w-7xl mx-auto">
//           <div className="py-16">
//             <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
//               {[1, 2, 3, 4].map((item) => (
//                 <div
//                   key={item}
//                   className="aspect-square bg-sky-400 shadow-sm"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <ShopNowViewAllButton
//               name="View All"
//               width="md:w-[12rem] w-full py-3"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Sale Section */}
//       <section className="">
//         <div className="lg:flex lg:px-4 gap-8 items-center">
//           <div className="px-0 lg:flex-1 bg-sky-500 mb-8 lg:mb-0">
//             <img src={img_four} alt="" />
//           </div>
//           <div className="lg:flex-1 py-12 px-4 lg:px-4 max-w-7xl mx-auto">
//             <div className="lg:w-1/2 text-center lg:text-left">
//               <h2 className="text-3xl font-medium mb-4">Lucky Last</h2>
//               <p className="text-xl mb-8">Up to 50% Off Selected Items</p>
//               <ShopNowViewAllButton
//                 name="Shop Now"
//                 className="md:w-48 w-full py-3"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Review Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="px-4 max-w-3xl mx-auto">
//           <h2 className="text-3xl font-medium text-center mb-8">
//             The Good Stuff
//           </h2>
//           <div className="flex justify-center mb-6">
//             <div className="flex space-x-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <span key={star} className="text-yellow-400">
//                   ★
//                 </span>
//               ))}
//             </div>
//           </div>
//           <p className="text-center mb-6 text-gray-600 leading-relaxed">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
//             cumque perspiciatis numquam ipsam eos suscipit aperiam minima
//             veritatis, voluptates commodi, accusamus dolore cupiditate.
//           </p>
//           <p className="text-center italic text-gray-500">- James Abigail</p>
//         </div>
//       </section>

//       {/* Sustainable Products Section */}
//       <section className="py-16">
//         <div className="relative w-full aspect-[21/9]">
//           <img
//             src={img_two}
//             alt="Sustainable pet accessories"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
//             <h2 className="text-white text-2xl md:text-4xl mb-8 text-center">
//               Sustainable Pet Accessories
//             </h2>
//             <ShopNowViewAllButton
//               name="Shop Now"
//               className="md:w-48 w-full py-3"
//             />
//           </div>
//         </div>
//         <div className="px-4 lg:px-4 max-w-7xl mx-auto">
//           <div className="py-16">
//             <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
//               {[1, 2, 3, 4].map((item) => (
//                 <div
//                   key={item}
//                   className="aspect-square bg-sky-400 shadow-sm"
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <ShopNowViewAllButton
//               name="View All"
//               width="md:w-[12rem] w-full py-3"
//             />
//           </div>
//         </div>
//       </section>
//       <section className="about-us py-10">
//         <p className="text-center px-4 lg:px-4 lg:text-[1.5rem] max-w-4xl mx-auto">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
//           nostrum eaque praesentium deleniti atque accusamus harum ipsam
//           consequuntur, id itaque tempora dignissimos rerum hic at, ex laborum
//           facere distinctio odio officia excepturi fugit. Nostrum in
//           consectetur, fugiat fuga sunt animi.
//         </p>
//       </section>
//       <section className="specific-product-slide py-5 ">
//         <h1 className="text-3xl font-medium text-center mb-8">
//           Home Made Products
//         </h1>
//         <div className="aspect-[4/3] bg-sky-500"></div>
//       </section>
//       <section className="categories py-16">
//         <div>
//           <div className="aspect-[4/3] bg-sky-500"></div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HomePage;


// import React from "react";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "../components/Navbar";
// import img_one from "../assets/img/three.jpeg";
// import img_two from "../assets/img/img_two.jpg";
// import img_four from "../assets/img/four.jpeg";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
// import ShopNowViewAllButton from "../components/ShopNowViewAllButton";
// import MobileFooter from "../components/MobileFooter";
// import DesktopFooter from "../components/DesktopFooter";

// const HomePage = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [isScrollingUp, setIsScrollingUp] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;

//       // Determine scroll behavior
//       if (currentScrollTop <= 40) {
//         setScrolled(false);
//         setIsScrollingUp(false);
//         return;
//       }

//       if (currentScrollTop < lastScrollTop) {
//         // Scrolling up
//         setIsScrollingUp(true);
//         if (currentScrollTop > 50) {
//           setScrolled(true);
//         }
//       } else {
//         // Scrolling down
//         setIsScrollingUp(false);
//         setScrolled(false);
//       }

//       // Update last scroll position
//       setLastScrollTop(currentScrollTop);
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollTop]);

//   // Navbar Variants
//   const navbarVariants = {
//     hidden: {
//       y: -100,
//       opacity: 0,
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.2,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         duration: 0,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Hero Content Variants
//   const heroContentVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "tween",
//         duration: 0.6,
//         delay: 0.2,
//       },
//     },
//   };

//   return (
//     <>
//       <motion.div
//         className="message-bar w-full text-white uppercase flex justify-between font-thin bg-black py-[.3rem] px-[1.5rem] lg:px-[5rem]"
//         initial="hidden"
//         animate="visible"
//       >
//         <HiChevronLeft size={20} color="white" />
//         december sale is currently on...
//         <HiChevronRight size={20} color="white" />
//       </motion.div>

//       <AnimatePresence>
//         {scrolled && isScrollingUp && (
//           <motion.div
//             className="fixed bg-white top-0 left-0 right-0 z-[500] shadow"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={navbarVariants}
//           >
//             <Navbar />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <div className="z-[-1000]">
//         <section className="relative h-screen">
//           <div
//             className="hero bg-cover top-0 z-[-2] bg-center absolute h-full w-full"
//             style={{ backgroundImage: `url(${img_one})` }}
//           ></div>
//           <div className="absolute top-0 left-0 right-0 bottom-0 z-1 bg-black bg-opacity-50"></div>

//           <div className="absolute top-0 left-0 right-0 z-[100] text-white">
//             <Navbar />
//           </div>

//           <motion.div
//             className="relative z-20 pt-[20vh] text-white"
//             initial="hidden"
//             animate="visible"
//             variants={heroContentVariants}
//           >
//             <div className="max-w-4xl mx-auto text-center py-16">
//               <motion.h1
//                 className="text-3xl md:text-5xl font-thin tracking-[.5rem] uppercase mb-4 text-white
//       transition-transform duration-300 ease-in-out"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 Companion Care Starts Here
//               </motion.h1>

//               <motion.p
//                 className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-6"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.3, duration: 0.5 }}
//               >
//                 Discover premium pet supplies and expert care to keep your furry
//                 friends happy and healthy.
//               </motion.p>

//               <ShopNowViewAllButton name="Shop Now" />
//             </div>
//           </motion.div>
//         </section>

//         {/* Best Sellers Section */}
//         <section className="py-16 px-4 lg:px-4 max-w-7xl mx-auto">
//           <h2 className="text-3xl font-medium text-center mb-12">
//             Best Sellers
//           </h2>
//           <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
//             {[1, 2, 3, 4].map((item) => (
//               <div key={item} className="aspect-square bg-sky-400 shadow-sm" />
//             ))}
//           </div>
//           <div className="mt-12 flex justify-center">
//             <ShopNowViewAllButton
//               name="View All"
//               width="md:w-[12rem] w-full py-3"
//             />
//           </div>
//         </section>

//         {/* Hero Section with Image */}
//         <section className="py-16">
//           <div className="relative w-full aspect-[21/9]">
//             <img
//               src={img_two}
//               alt="Amazing pets and meals"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
//               <h2 className="text-white text-2xl md:text-4xl mb-8 text-center">
//                 Amazing Pets, Amazing Meals
//               </h2>
//               <ShopNowViewAllButton
//                 name="Shop Now"
//                 className="md:w-48 w-full py-3"
//               />
//             </div>
//           </div>
//           <div className="px-4 lg:px-4 max-w-7xl mx-auto">
//             <div className="py-16">
//               <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
//                 {[1, 2, 3, 4].map((item) => (
//                   <div
//                     key={item}
//                     className="aspect-square bg-sky-400 shadow-sm"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <ShopNowViewAllButton
//                 name="View All"
//                 width="md:w-[12rem] w-full py-3"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Sale Section */}
//         <section className="">
//           <div className="lg:flex lg:px-4 gap-8 items-center">
//             <div className="px-0 lg:flex-1 bg-sky-500 mb-8 lg:mb-0">
//               <img src={img_four} alt="" />
//             </div>
//             <div className="lg:flex-1 py-12 px-4 lg:px-4 max-w-7xl mx-auto">
//               <div className="lg:w-1/2 text-center lg:text-left">
//                 <h2 className="text-3xl font-medium mb-4">Lucky Last</h2>
//                 <p className="text-xl mb-8">Up to 50% Off Selected Items</p>
//                 <ShopNowViewAllButton
//                   name="Shop Now"
//                   className="md:w-48 w-full py-3"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Review Section */}
//         <section className="py-16 bg-gray-50">
//           <div className="px-4 max-w-3xl mx-auto">
//             <h2 className="text-3xl font-medium text-center mb-8">
//               The Good Stuff
//             </h2>
//             <div className="flex justify-center mb-6">
//               <div className="flex space-x-1">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span key={star} className="text-yellow-400">
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <p className="text-center mb-6 text-gray-600 leading-relaxed">
//               Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//               Quibusdam cumque perspiciatis numquam ipsam eos suscipit aperiam
//               minima veritatis, voluptates commodi, accusamus dolore cupiditate.
//             </p>
//             <p className="text-center italic text-gray-500">- James Abigail</p>
//           </div>
//         </section>

//         {/* Sustainable Products Section */}
//         <section className="py-16">
//           <div className="relative w-full aspect-[21/9]">
//             <img
//               src={img_two}
//               alt="Sustainable pet accessories"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
//               <h2 className="text-white text-2xl md:text-4xl mb-8 text-center">
//                 Sustainable Pet Accessories
//               </h2>
//               <ShopNowViewAllButton
//                 name="Shop Now"
//                 className="md:w-48 w-full py-3"
//               />
//             </div>
//           </div>
//           <div className="px-4 lg:px-4 max-w-7xl mx-auto">
//             <div className="py-16">
//               <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
//                 {[1, 2, 3, 4].map((item) => (
//                   <div
//                     key={item}
//                     className="aspect-square bg-sky-400 shadow-sm"
//                   />
//                 ))}
//               </div>
//             </div>
//             <div className="flex justify-center">
//               <ShopNowViewAllButton
//                 name="View All"
//                 width="md:w-[12rem] w-full py-3"
//               />
//             </div>
//           </div>
//         </section>
//         <section className="about-us py-10">
//           <p className="text-center px-4 lg:px-4 lg:text-[1.5rem] max-w-4xl mx-auto">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
//             nostrum eaque praesentium deleniti atque accusamus harum ipsam
//             consequuntur, id itaque tempora dignissimos rerum hic at, ex laborum
//             facere distinctio odio officia excepturi fugit. Nostrum in
//             consectetur, fugiat fuga sunt animi.
//           </p>
//         </section>
//         <section className="specific-product-slide py-5 ">
//           <h1 className="text-3xl font-medium text-center mb-8">
//             Home Made Products
//           </h1>
//           <div className="aspect-[4/3] bg-sky-500"></div>
//         </section>
//         <section className="categories py-16">
//           <div>
//             <div className="grid md:px-4 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8">
//               {[1, 2, 3, 4].map((item) => (
//                 <div
//                   key={item}
//                   className="aspect-square bg-sky-400 shadow-sm"
//                 />
//               ))}
//             </div>
//           </div>
//         </section>
//         <section className="signup-section relative">
//           <img
//             src={img_two}
//             alt="sign up"
//             className="w-full h-full object-cover"
//           />
//           <div className="px-4 max-w-7xl mx-auto py-10 text-center w-full absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
//             <h1 className="text-3xl font-medium text-center mb-8">
//               Signup Today
//             </h1>
//             <p className="">
//               Join our mail list to recieve specials new arrivals and more.
//             </p>
//             <div className="pt-4">
//               <ShopNowViewAllButton
//                 name="Sign up"
//                 width="md:w-[12rem] w-full py-3"
//               />
//             </div>
//           </div>
//         </section>
//         <section className="footer relative top-[15rem] lg:top-0">
//           <h2 className="text-center text-[1.5rem] p-8">
//             Follow us on Instagram
//           </h2>
//           <div className="lg:hidden">
//             <MobileFooter />
//           </div>
//           <div className="hidden lg:block">
//             <DesktopFooter />
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default HomePage;