const useName = ()=>{

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    function generateRandomName() {
      const firstNames = ["John", "Jane", "Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Hannah"];
      const lastNames = ["Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin"];
    
      const randomFirstName = getRandomElement(firstNames);
      const randomLastName = getRandomElement(lastNames);
    
      return `${randomFirstName} ${randomLastName}`;
    }
    
    return generateRandomName()

}

export default useName