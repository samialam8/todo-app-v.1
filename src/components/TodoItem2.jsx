function TodoItem2() {
  let todoName = "Go To Cafe";
  let todoDate = "31/12/2023";
  return (
    <div class="container">
      <div class="row ms-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ms-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
