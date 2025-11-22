// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter , Routes, Route  } from "react-router";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import About from "./pages/about/about";
import Contact from "./pages/contact/Contact";

let data = [
  {
    name: "Umer",
    age: 22,
    major: "Computer Science",
    number : 89,
  },
  {
    name: "Ayesha",
    age: 21,
    major: "Computer Science",
    number : 69,
  },
  {
    name: "Ali",
    age: 23,
    major: "Information Technology",
    number : 59,
  },
  { name: "Sara", age: 20, major: "Software Engineering", number : 79 },
];

function App() 
{  return (
  <BrowserRouter> 
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
}


// {
//   return (
//     <div>
//       <Header />
//       <h2 style={{ color: "blue" }}>Welcome to My React App!</h2>
//       <p>
//         This is a simple React application to demonstrate component structure.
//       </p>
//       <h3>Student Information:</h3>
//       <table border="1" style={{ borderCollapse: "collapse", width: "50%" }}>
//         <thead>
//           <tr>
//             <th style={{ padding: "8px" }}>Name</th>
//             <th style={{ padding: "8px" }}>Age</th>
//             <th style={{ padding: "8px" }}>Major</th>
//             <th style={{ padding: "8px" }}>Grade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((student, index) => (
//             <tr key={index}>
//               <td style={{ padding: "8px" }}>{student.name}</td>
//               <td style={{ padding: "8px" }}>{student.age}</td>
//               <td style={{ padding: "8px" }}>{student.major}</td>
//               <td style={{ padding: "8px" }}>{student.number > 80 ? "A" : student.number > 70 ? "B" : student.number > 60 ? "C" : student.number > 50 ? "D" : "N/A"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>



//     </div>
//   );
// }

export default App;
