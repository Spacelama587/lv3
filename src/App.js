
import { useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Heading from './components/Heading';
import { IoIosArrowForward } from "react-icons/io";
import { MdNotificationAdd } from "react-icons/md";
import { IoCloseSharp } from 'react-icons/io5';
import { FaCaretDown } from 'react-icons/fa';
function App() {
  const dialogRef = useRef(null)
  const secondDialogRef = useRef(null);
  function toggleDialog(){
    if(!dialogRef.current){
      return
    }
    dialogRef.current.hasAttribute("open")
     //dialog element atribute9open & close)
    ? dialogRef.current.close()
    :dialogRef.current.showModal()
  }

  function closeDialog() {
    if (dialogRef.current) {
      dialogRef.current.close()
    }
  }

  function handleConfirmBtn() {
    console.log("Hi")
  
  }

  
  function closeSecondDialog() {
    if (secondDialogRef.current) {
      secondDialogRef.current.close()
    }
  }

  function handleSecondDialogClick(event) {
    if (event.target === secondDialogRef.current) {
      closeSecondDialog();
    }
  } 
  //above func makes modal close when backdrop is clicked

  function toggleSecondDialog() {
    if (!secondDialogRef.current) return;
    if (secondDialogRef.current.hasAttribute("open")) {

    } else {
      secondDialogRef.current.showModal();
  
    }
  }

  return (
    <div >
      <Heading>Buttons</Heading>
      <div style={{display:"flex", gap:"10px", alignItems:"center", marginLeft:"5px"}}>
        <Button size = 'large' bgcolor="white" borderColor='cyan' >Large Primary Button <IoIosArrowForward /></Button>
        <Button size ="medium" backgroundColor='cyan'>Medium</Button>
        <Button size= "small" backgroundColor='cyan'>Small</Button>
      </div>
      <div style={{display:"flex", gap:"10px", alignItems:"center", marginLeft:"5px", marginTop:'20px'}}>
      <Button size = 'large' bgcolor="white" borderColor='red' >Large Negative Button <MdNotificationAdd /></Button>
        <Button size ="medium" backgroundColor='red' text='white'>Medium</Button>
        <Button size= "small" backgroundColor='red' text='white'>Small</Button>
      </div>

      <Heading>Input</Heading>
      <Form />
      <Heading>Modal</Heading>
      <div style={{display:'flex', alignItems:'center', gap: '20px', marginLeft:"5px"}}>
      <Button size ="medium" backgroundColor='cyan'
      onClick={toggleDialog}
      >Open Modal</Button>

      <Button size = 'medium' bgcolor="white" borderColor='red' 
      onClick ={toggleSecondDialog}
      >Open Modal</Button>
      <dialog ref={secondDialogRef}  onClick={handleSecondDialogClick}>
      <div style={{position: 'relative', padding: '20px'}}>
          <p>There is one close button, and the modal closes when you click the outside area.</p>
          <Button 
            size="small" 
            style={{position: 'absolute', top: '10px', right: '10px', padding: '5px'}}
            
          >
            <IoCloseSharp onClick={closeSecondDialog}/>
          </Button>
        </div>
      </dialog>

      <dialog ref={dialogRef}>
        <p>There are two close and confirm buttons, and the modal does not close when you click the outside area.</p>
        <p>When pressed the confirm button, the log will be shown on console.</p>
        <div style={{display:'flex', gap:'10px', justifyContent:'flex-end'}}>
        <Button size= "small" backgroundColor='red' text='white'
        onClick={closeDialog}
        >Close</Button>
        <Button size= "small" backgroundColor='cyan'
        onClick={handleConfirmBtn}
        >Confirm</Button>
        </div>
      </dialog>
      </div>
     
      {/* <div style={{display:'flex'}}>
        <div>
        <select >
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>
        </div>

        <div>
        <select >
  <option value="someOption">Some option</option>
  <option value="otherOption">Other option</option>
</select>
        </div>

      </div> */}
      <div style={{border: '2px solid gray', marginTop: '30px', overflow:'scroll'}}>
      <Heading>Select</Heading>
      <div style={{ display: 'flex', gap: '20px', padding: '50px' }}>
      
      <Select
        options={['Java', 'Spring', 'React Native']}
        defaultText="React"
      />
      <Select
        options={['React Native', 'Spring']}
        defaultText="React"
      />
    </div>
      </div>
 
  
    </div>
  );
}

const Select = ({ options, defaultText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultText);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }

  return (
    <div className="select-container">
      <div className="select-box" onClick={toggleDropdown}>
        {selectedOption}
        <FaCaretDown className="caret-icon" />
      </div>
      {isOpen && (
        <ul className="options-list">
          {options.map((option, index) => (
            <li
              key={index}
              className="option-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default App;
