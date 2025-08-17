const person = {
  name: 'Rhey Marc',
  age: 23,
  isStudent: true,
  address: {
    country: 'Philippines',
    region: 'Mindanao',
    city: 'Davao City'
  },
  hobbies: ['coding', 'reading', 'gaming'],
  education: {
    degree: 'Information Technology',
    school: {
      name: 'Holy Cross of Davao College',
      yearGraduated: 2027
    }
  }
};

console.log('Full Object:', person);
console.log('\n--- Accessing Nested Properties ---');
console.log('Name:', person.name);
console.log('City:', person.address.city);
console.log('Region:', person.address.region);
console.log('First Hobby:', person.hobbies[0]);
console.log('Degree:', person.education.degree);
console.log('School Name:', person.education.school.name);
console.log('Graduation Year:', person.education.school.yearGraduated);

person.address.city = 'Davao';
console.log('\nModified City:', person.address.city);

person.employment = {
  company: 'DevCorp',
  position: 'Junior Developer'
};
console.log('\nAdded Employment:', person.employment);

console.log('\nFinal Object Structure:');
console.dir(person, { depth: null });
