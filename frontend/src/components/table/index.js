import S from './table.module.css';

import DeleteButton from '../delete-button';

const getVehicles = async () => {
  const response = await fetch('http://localhost:8080/api/v1/vehicle');
  const data = await response.json();
  return data;
};

export const Table = async () => {
  const vehicles = await getVehicles();

  return (
    <table className={S.table__container}>
      <thead className={S.table__header}>
        <tr>
          <th className={S.table__text}>Nome</th>
          <th className={S.table__text}>Modelo</th>
          <th className={S.table__text}>Placa</th>
        </tr>
      </thead>
      <tbody>
        {vehicles &&
          vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td className={S.table__text}>{vehicle.employee}</td>
              <td className={S.table__text}>{vehicle.model}</td>
              <td className={S.table__text}>{vehicle.plate}</td>
              <td className={S.table__text}>
                {/* <DeleteButton id={vehicle.id} /> */}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
