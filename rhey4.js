const person = {
  name: 'Rhey Marc',
  age: 23,
  isStudent: true,
  address: {
    street: '123 Main St',
    city: 'Techville',
    zipCode: '10001',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  hobbies: ['coding', 'reading', 'gaming'],
  education: {
    degree: 'Computer Science',
    school: {
      name: 'Tech University',
      yearGraduated: 2025
    }
  }
};

console.log('Full Object:', person);
console.log('\n--- Accessing Nested Properties ---');
console.log('Name:', person.name);
console.log('City:', person.address.city);
console.log('Latitude:', person.address.coordinates.lat);
console.log('First Hobby:', person.hobbies[0]);
console.log('School Name:', person.education.school.name);

person.address.zipCode = '10002';
console.log('\nModified Zip Code:', person.address.zipCode);

person.employment = {
  company: 'DevCorp',
  position: 'Junior Developer'
};
console.log('\nAdded Employment:', person.employment);

console.log('\nFinal Object Structure:');
console.dir(person, { depth: null });
