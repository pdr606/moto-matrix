import S from './table.module.css';

export function Table({ vehicles }) {
  return (
    <table className={S.table__container}>
      <thead className={S.table__header}>
        <tr>
          <th className={S.table__text}>Nome</th>
          <th className={S.table__text}>Data do registro</th>
          <th className={S.table__text}>Modelo</th>
          <th className={S.table__text}>Placa</th>
        </tr>
      </thead>
      <tbody>
        {vehicles &&
          vehicles.map((vehicle, index) => (
            <tr key={index}>
              <td className={S.table__text}>{vehicle.name}</td>
              <td className={S.table__text}>{vehicle.registryDate}</td>
              <td className={S.table__text}>{vehicle.model}</td>
              <td className={S.table__text}>{vehicle.plate}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
