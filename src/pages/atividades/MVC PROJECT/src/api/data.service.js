const dataService = {
    carregarDados: async () =>{
     try {
      const response = await fetch('http://localhost:7000/api/data');
      const data = await response.json();
      return data;
     } catch (error) {
        console.error("Error fetching data:", error);
        return[] 
     } 
    },

    salvarDados: async (novosDados)=>{
        try {
            const response = await fetch('http://localhost:7000?/api/data');
            
        }
    }
};



export { dataService };
