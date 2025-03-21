import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FoodList from './FoodList.jsx'
import Card from './Card.jsx';
import UseStateTest from './UseStateTest.jsx';
import Counter from './Counter.jsx';
import EventHandlerTest from './EventHandlerTest.jsx';
import ColorPicker from './ColorPicker.jsx';
import CarObjectUpdate from './CarObjectUpdate.jsx';
import FoodArrayUpdate from './FoodArrayUpdate.jsx';
import CarArrayObjectsUpdate from './CarArrayObjectsUpdate.jsx';

function App() {

  const fruits = [{id: 1, name:"Narancs", calories:40},
                {id: 2, name:"Banán", calories:70},
                {id: 3, name:"Alma", calories:60},
                {id: 4, name:"Körte", calories:80},
                {id: 5, name:"Ananász", calories:42},]
  const vegetables = [{id: 6, name:"Krumpli", calories:50},
                    {id: 7, name:"Sárgarépa", calories:35},
                    {id: 8, name:"Fokhagyma", calories:10},
                    {id: 9, name:"Zeller", calories:20},
                    {id: 10, name:"Petrezselyem", calories:15},]
  
  return (
    <>
      <Header></Header>
      <FoodArrayUpdate></FoodArrayUpdate>
      <CarArrayObjectsUpdate></CarArrayObjectsUpdate>
{/*      {fruits.length>0?<FoodList items={fruits} category="Gyümölcsök"></FoodList>:null}
      {vegetables.length>0?<FoodList items={vegetables} category="Zöldségek"></FoodList>:null}
      {fruits.length>0 && <FoodList items={fruits} category="Gyümölcsök"></FoodList>}
      {vegetables.length>0 && <FoodList items={vegetables} category="Zöldségek"></FoodList>}
      <Card title="Zozo" description="Tanulom a React-ot" buttonName="Gomb1" age={40} isSenior={false} isButton={true}></Card>
      <Card title="ZoLee" description="Spring programozó" buttonName="Gomb2" age={50} isSenior={true} isButton={false}></Card>
      <Card title="Zoly" description="Adatbázis tudás" buttonName="Gomb3" age={45} isSenior={true} isButton={true}></Card>
      <Card></Card>
      <UseStateTest></UseStateTest>
      <Counter></Counter>
      <EventHandlerTest></EventHandlerTest>
      <ColorPicker></ColorPicker>
      <CarObjectUpdate></CarObjectUpdate>
      <Footer></Footer>*/}
    </>
  );
}

export default App
