async function getAllUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) {
    throw new Error('Something went wrong');
  }

  return res.json();
}

export default getAllUsers;
