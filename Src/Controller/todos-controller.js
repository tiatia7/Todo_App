import pool from "../Model/database.js";


// Get
export const getTodos = async (req, res) => {
  try{ // require the data from the db and send it in the res
    const result = await pool.query("SELECT * FROM todos");
    res.json(
      {
        message: "To do tasks are sent successfully!",
        tasks: result.rows
      });
  } catch(err) {
    res.status(500).json({
      error: err.message
   });
  }
};// to get all the tasks in the db and send them in the res

// Post 
export const addTodos = async (req, res) => {
 const {id, task} = req.body; // to get the data from the req body
  try {
    const result = await pool.query("INSERT INTO todos (id, task) VALUES ($1, $2) RETURNING *", [id, task]);
  res.json({
  message: "To do task added successfully!",
  task: result.rows[0]
  });
} catch (err) {
  res.status(500).json({
    error: err.message
  });
}
};

// Delete
export const deleteTodos = async (req, res) =>  {
  const {id} = req.params; // to get the id from the req params;
  try {
    const result = await pool.query("DELETE FROM todos WHERE id = $1 RETURNING *", [id]);
    res.json({
      message: `To do task number ${id} deleted successfully!`
    });
  } catch (err) {
    res.status(500).json({error: err.message});
  }}
    
    // Put

export const updateTodos = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  try {
    const result = await pool.query(
      "UPDATE tasks SET title=$1, description=$2, completed=$3 WHERE id=$4 RETURNING *",
      [title, description, completed, id]
    );
    res.json({
      message: `Task ${id} updated`,
      task: result.rows[0]
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
