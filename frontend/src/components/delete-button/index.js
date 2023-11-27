'use client';

const handleDelete = (id) => {
  console.log(id);
};

export const DeleteButton = ({ id }) => {
  return (
    <div>
      <button onClick={() => handleDelete(id)}>X</button>
    </div>
  );
};
