type Props = {
  data: {
    title: string;
    content: string;
  };
  id: string;
  deleteNote: (id: string) => void;
};

const Card = ({ data, id, deleteNote }: Props) => {
  const handleDelete = () => {
    deleteNote(id);
  };

  return (
      <div className="card lg:card-side w-60 bg-base-100 shadow-md mt-20">
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.content}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error" onClick={handleDelete}>❌</button>
          </div>
        </div>
      </div>
  );
};

export default Card;
