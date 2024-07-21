async function fetchUserData() {
    try {
      const apiUrl  = await fetch('https://jsonplaceholder.typicode.com/users');

      const dataContainer = document.getElementById(apiUrl);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json(); 
      console.log('Success:', data); 
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchUserData();