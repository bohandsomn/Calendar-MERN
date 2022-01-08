export const setList = async (key, list) => {
    await fetch(`http://localhost:5000/api/setList`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({key, list})
    })
      .then(res => res.json())
      .catch(err => console.log(err));
}