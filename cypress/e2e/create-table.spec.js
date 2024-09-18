describe('Create Table with Valid Columns', () => {
  it('creates a table with valid columns', () => {
    // Send a CREATE TABLE query with valid columns
    cy.exec(`CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50),
      email VARCHAR(100) UNIQUE
    )`).then((result) => {
      expect(result.stdout).to.contain('CREATE TABLE');
    });

    // Verify the table is created successfully
    cy.exec('SELECT * FROM information_schema.tables WHERE table_name = \'users\'').then((result) => {
      expect(result.stdout).to.contain('users');
    });

    // Verify the columns are created with the correct data types
    cy.exec('SELECT * FROM information_schema.columns WHERE table_name = \'users\'').then((result) => {
      const columns = result.stdout.split('\n');
      expect(columns[0]).to.contain('id SERIAL PRIMARY KEY');
      expect(columns[1]).to.contain('name VARCHAR(50)');
      expect(columns[2]).to.contain('email VARCHAR(100) UNIQUE');
    });
  });
});