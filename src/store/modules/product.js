const state = {
    books: [
      {bname: 'physics',author: 'soma',price: 200,id: 1},
      {bname: 'chemistry',author: 'rifat',price: 500,id: 2},
      {bname: 'biology',author: 'rinky',price: 400,id: 3},
      {bname: 'math',author: 'ripa',price: 800,id: 4},
    ],
    players: [
      {country: 'Bangladesh',allrounder: 'Shakib',run: 200,id: 1},
      {country: 'India',allrounder: 'Zadeja',run: 150,id: 2},
      {country: 'Pakistan',allrounder: 'Malik',run: 100,id: 3},
      {country: 'Sri lanka',allrounder: 'Hasarangga',run: 40,id: 4},
    ],
    friends: [
        {fname: 'anish',varsity: 'sub',id: 1},
        {fname: 'farhad',varsity: 'sub',id: 2},
        {fname: 'nuhash',varsity: 'sub',id: 3},
    ]
  };
  const getters = {
    myAllrounder: (state)=>{
      const myAllrounder = state.players.map((player)=>{
        return {
          run: `Run : ${player.run/2}`,
          country: `${player.country}*`,
          allrounder: player.allrounder
        }
      });
      return myAllrounder;
    },
    myFriends: (state)=>{
        return state.friends;
    }
  };
 const mutations = {
  //  start addRun 
  ADD_RUN: (state)=>{
    state.players.map((p)=>{
      p.run = p.run/2
    });
  }
  //  start addRun 
  };
 const actions ={
    // start for alert 
    // alertMe(){
    //   alert('hello southern university')
    // }
    // end for alert 
    // start addRun 
    addRun: (context)=>{
      context.commit("ADD_RUN");
    }
    // end addRun 
  }
  export default {
      state,
      getters,
      mutations,
      actions
  };