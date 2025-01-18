import styles from "../../styles/Pagination.module.css";

function Pagination({ page, setPage }) {
  const previousHandler = () => {
    setPage((page) => (page > 1 ? page - 1 : 1));
  };

  const nextHandler = () => {
    setPage((page) => (page < 10 ? page + 1 : 10));
  };

  return (
    <div className={styles.container}>
      <button
        onClick={previousHandler}
        className={page <= 1 ? styles.disabled : null}
      >
        previous
      </button>
      <p className={page === 1 ? styles.success : null}>1</p>
      <p className={page === 2 ? styles.success : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={styles.success}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page === 9 ? styles.success : null}>9</p>
      <p className={page === 10 ? styles.success : null}>10</p>
      <button
        onClick={nextHandler}
        className={page >= 10 ? styles.disabled : null}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
