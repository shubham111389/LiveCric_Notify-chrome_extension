import LiveMatches from "./Components/LiveMatches"
function App() {
  return (
    <div className=" text-3xl px-3 shadow-lg py-2">
      <div className=" flex">
   
      <h1 className="font-bold  opacity-60">Live Cricket🏏  </h1>
      <span className="font-bold px-2 text-purple-600"> Matches :</span>
      </div>
     
     <LiveMatches/>

     
    
    </div>
  );
}

export default App;
