const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');

async function seedStudents(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS students (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        teacher TEXT NOT NULL,
        placement TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedStudents = await Promise.all(
      students.map(async (student) => {  //figure out what async is doing
        const hashedPassword = await bcrypt.hash(student.password, 10);
        return client.sql`
        INSERT INTO students (id, name, email, password, teacher, placement)
        VALUES (${student.id}, ${student.name}, ${student.email}, ${hashedPassword}, ${student.teacher}, ${student.placement})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedStudents.length} students`);

    return {
      createTable,
      students: insertedStudents,
    };
    } catch (error) {
    console.error('Error seeding students:', error);
    throw error;
  }
}

async function seedTeachers(){
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
// Create the "users" table if it doesn't exist
const createTable = await client.sql`
  CREATE TABLE IF NOT EXISTS teachers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );
`;

console.log(`Created "students" table`);

// Insert data into the "users" table
const insertedTeachers = await Promise.all(
  teachers.map(async (teacher) => {  //figure out what async is doing
    const hashedPassword = await bcrypt.hash(teacher.password, 10);
    return client.sql`
    INSERT INTO teachers (id, name, email, password)
    VALUES (${teacher.id}, ${teacher.name}, ${studteacherent.email}, ${hashedPassword})
    ON CONFLICT (id) DO NOTHING;
  `;
  }),
);

console.log(`Seeded ${insertedTeachers.length} students`);

return {
  createTable,
  teachers: insertedTeachers,
};
} catch (error) {
console.error('Error seeding teachers:', error);
throw error;
}
}

async function seedEntries(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS entries (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      student_id UUID NOT NULL,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      new_skill TEXT NOT NULL,
      working_to_improve TEXT NOT NULL,
      something_new TEXT NOT NULL,
      goal TEXT NOT NULL,
      effort_level INTEGER NOT NULL CHECK (effort_level > 0 AND effort_level < 5),
      communication INTEGER NOT NULL CHECK (communication > 0 AND communication < 5),
      attendance INTEGER NOT NULL CHECK (attendance > 0 AND attendance < 5),
      intiative INTEGER NOT NULL CHECK (intiative > 0 AND intiative < 5),
      status VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "entries" table`);

    // Insert data into the "invoices" table
    const insertedEntries = await Promise.all(
      entries.map(
        (entry) => client.sql`
        INSERT INTO entries (customer_id, start_date, end_date, new_skill, working_to_imporve, something_new, goal, effort_level, communication, attendance, initiative, status)
        VALUES (${entry.customer_id},  ${entry.start_date}, ${entry.end_date}, ${entry.new_skill}, ${entry.working_to_imporve}, ${entry.something_new}, ${entry.goal}, ${entry.effort_level}, ${entry.communication}, ${entry.attendance}, ${entry.initiative}, ${entry.status})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedEntries.length} entries`);

    return {
      createTable,
      entries: insertedEntries,
    };
  } catch (error) {
    console.error('Error seeding entries:', error);
    throw error;
  }
}

async function seedDays(){
  //figure out how to make conflict stuff/checks work
  
  // id: string;
  //   entry_id: string;
  //   day: number;
  //   time_in: string;
  //   time_out: string;
  //   hours: number;
  //   status: 'late' | 'absent' | 'on-time';

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS entries (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      entry_id UUID NOT NULL,
      status VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "entries" table`);

    // Insert data into the "invoices" table
    const insertedEntries = await Promise.all(
      entries.map(
        (entry) => client.sql`
        INSERT INTO entries (customer_id, start_date, end_date, new_skill, working_to_imporve, something_new, goal, effort_level, communication, attendance, initiative, status)
        VALUES (${entry.customer_id},  ${entry.start_date}, ${entry.end_date}, ${entry.new_skill}, ${entry.working_to_imporve}, ${entry.something_new}, ${entry.goal}, ${entry.effort_level}, ${entry.communication}, ${entry.attendance}, ${entry.initiative}, ${entry.status})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedEntries.length} entries`);

    return {
      createTable,
      entries: insertedEntries,
    };
  } catch (error) {
    console.error('Error seeding entries:', error);
    throw error;
  }
}

async function main() {
    const client = await db.connect();
  
    await seedStudents(client);
    await seedTeachers(client);
    await seedEntries(client);
  
    await client.end();
  }
  
  main().catch((err) => {
    console.error(
      'An error occurred while attempting to seed the database:',
      err,
    );
  });

  // check out foreign keys?? idk