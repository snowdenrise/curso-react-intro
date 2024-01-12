import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='TodoCounter'>
      {completed === total ? ('¡Felicidades!') : (
        <>Has completado <span>{completed}</span> de <span>{total}</span> ToDos</>
      )}
    </h1>
  );
}

export { TodoCounter };