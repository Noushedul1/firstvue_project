const state = {
    subjects: [
        {sname: 'DLD',sir: 'jinnat',id: 1},
        {sname: 'DSD',sir: 'jinnat',id: 2},
        {sname: 'VLSI',sir: 'tanim',id: 3},
        {sname: 'JAVA',sir: 'jia',id: 4}
    ],
    books: ['REACT','VUE','ANGULAR','LARAVEL']
};
const getters = {
    mySubjects: (state)=>{
        return state.subjects;
    },
    myBooks: (state)=>{
        return state.books;
    },
    totalBooks: (state)=>{
        return state.books.length;
    }
};
const mutations = {
    ADD_BOOK(state,data){
        if(data != ''){
            state.books.push(data);
        }
    },
    REMOVE_BOOK(state,data){
        state.books.splice(data,1);
    }
};
const actions = {
    // start addBook 
    addBook: (context,data)=>{
        context.commit("ADD_BOOK",data);
    },
    // end addBook 
    removeBook: (context)=>{
        context.commit("REMOVE_BOOK");
    }
}

export default {
    state,
    getters,
    mutations,
    actions
};