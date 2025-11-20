import "./header.css";
import img from "../../assets/img.jpg";



function Header() {
  return (
    <header>
      <div style={{backgroundColor: '#282c34', padding: '20px', color: 'white' }}>
       <div style={{justifyContent: 'left', display: 'flex', alignItems: 'center', gap: '20px', position: "relative"}}>
        <img src={img} alt="business" style={{width: '100px', height: '100px', borderRadius: '50%', alignItems:'left'}}/>
        <h1 style={{color : '#4a5f8aff'}}>My React App</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;