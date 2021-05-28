
exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('enrollment').del()
  await knex('course').del()
  await knex('student').del()
      // Inserts seed entries
  await knex('student').insert([
    {id: 1, name: 'Sanjeev'},
    {id: 2, name: 'Anju'},
    {id: 3, name: 'Anil'}
  ]);

  await knex('course').insert([
    {id: 1, title: 'Javascript'},
    {id: 2, title: 'Java'},
    {id: 3, title: 'Python'}
  ]);

  await knex('enrollment').insert([
    {student_id: 1, course_id: 2},
    {student_id: 2, course_id: 1},
    {student_id: 3, course_id: 3},
  ]);
}

















