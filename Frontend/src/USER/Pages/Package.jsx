// import React from 'react';
// import Navbar from '../Components/Navbar';

// function Packages() {
//   return (
//     <>
//       <Navbar />
//       <div className="container" style={{ marginTop: '200px' }}>
//         <h2 className="text-center mb-5" style={{ fontSize: '2.5rem' }}>Packages</h2>
        
//         {/* Non AC Section */}
//         <h4 className="mb-4" style={{ fontSize: '1.5rem' }}>Non AC</h4>
//         <div className="row mb-5"> {/* Increased margin-bottom for spacing */}
//           <div className="col-md-4 mb-4"> {/* Added bottom margin for cards */}
//             <div className="card">
//               <img src="https://via.placeholder.com/150" className="card-img-top" alt="Package 1" />
//               <div className="card-body">
//                 <h5 className="card-title">₹67000</h5>
//                 <p className="card-text">40 DAYS PACKAGE</p>
//                 <a href="#" className="btn btn-primary">Learn More</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img src="https://via.placeholder.com/150" className="card-img-top" alt="Package 2" />
//               <div className="card-body">
//                 <h5 className="card-title">₹57000</h5>
//                 <p className="card-text">30 DAYS PACKAGE</p>
//                 <a href="#" className="btn btn-primary">Learn More</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img src="https://via.placeholder.com/150" className="card-img-top" alt="Package 3" />
//               <div className="card-body">
//               <h5 className="card-title">₹40000</h5>
//               <p className="card-text">20 DAYS PACKAGE</p>
//                 <a href="#" className="btn btn-primary">Learn More</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* AC Section */}
//         <h4 className="mb-4" style={{ fontSize: '1.5rem' }}>AC</h4>
//         <div className="row mb-5"> {/* Increased margin-bottom for spacing */}
//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img src="https://via.placeholder.com/150" className="card-img-top" alt="Package 1" />
//               <div className="card-body">
//                 <h5 className="card-title">Package 1</h5>
//                 <p className="card-text">This is a description for package 1.</p>
//                 <a href="#" className="btn btn-primary">Learn More</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img src="https://via.placeholder.com/150" className="card-img-top" alt="Package 2" />
//               <div className="card-body">
//                 <h5 className="card-title">Package 2</h5>
//                 <p className="card-text">This is a description for package 2.</p>
//                 <a href="#" className="btn btn-primary">Learn More</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="card">
//               <img src="https://via.placeholder.com/150" className="card-img-top" alt="Package 3" />
//               <div className="card-body">
//                 <h5 className="card-title">Package 3</h5>
//                 <p className="card-text">This is a description for package 3.</p>
//                 <a href="#" className="btn btn-primary">Learn More</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Packages;


import React from 'react';
import { CheckCircle } from 'lucide-react';

const Packages = () => {
  const features = [
    "Personalized workout plan",
    "Nutrition guidance",
    "24/7 support from certified trainers",
    "Access to premium workout videos",
    "Progress tracking tools"
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-700">30 Days Package</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">What's Included:</h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-4">
          <img src="/api/placeholder/600/400" alt="Workout session" className="rounded-lg shadow-md" />
          <img src="/api/placeholder/600/400" alt="Nutrition plan" className="rounded-lg shadow-md" />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Packages;
