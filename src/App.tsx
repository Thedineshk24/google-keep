import AddNotes from "./components/AddNotes";
import Card from "./components/Card";
import NavBar from "./layout/NavBar";
import { useState } from "react";
import Footer from "./layout/Footer";
const App = () => {
  const [data, setData] = useState<any>([]);

  const addNote = (note: any) => {
    setData([...data, note]);
  };

  const deleteNote = (id: string) => {
    setData(data.filter((note: { title: string }) => note.title !== id));
  };

  return (
    <>
      <NavBar />
      <AddNotes addNote={addNote} />
      <div className="card lg:card-side  flex justify-around flex-wrap">
        {data.map((note: any, index: number) => {
          return (
            <Card
              key={index}
              id={note.title}
              data={note}
              deleteNote={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default App;
