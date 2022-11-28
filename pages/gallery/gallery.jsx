// import Featured from "../../components/featured/Featured";
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
// import Footer from "../../components/footer/Footer";
// import Header from "../../components/header/Header";
// import MailList from "../../components/mailList/MailList";
// import Navbar from "../../components/navbar/Navbar";
// import PropertyList from "../../components/propertyList/PropertyList";
// import "./gallery.css";

// const Cars = () => {
//   return (
//     <div>
//       <Navbar />
//       <Header/>
//       <div className="homeContainer">
//         <Featured/>
//         <h1 className="homeTitle">THIS IS ALL GALLERY BRO</h1>
//         <PropertyList/>
//         <h1 className="homeTitle">THIS IS ALLL GALLERY </h1>
//         <FeaturedProperties/>
//         <MailList/>
//         <Footer/>
//       </div>
//     </div>
//   );
// };

// export default Cars;

import ImageGallery from 'image-gallery-react';

class MyComponent {

  render() {

    const images = [
        { url: 'http://localhost/img1.jpg' },
        { url: 'http://localhost/img2.jpg' },
        { url: 'http://localhost/img3.jpg' }
      ]
  
    return (
      <ImageGallery
        items={images}
        interval={5000}
        duration={1000}
      />
    );
  }

}

const Cars = () => {
    return (
<div className='MyComponent'></div>
    );
};

export default Cars;