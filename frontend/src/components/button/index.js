import S from './button.module.css';

export function Button({ primary, secondary, label, onClick }) {
  return (
    <div className={S.button__box}>
      <button
        className={primary ? S.button__primary : S.button__secondary}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
