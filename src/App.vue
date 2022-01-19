<template>
  <div>
    <!-- start for getters  -->
    <div v-for="allrounders in myAllrounder" :key="allrounders" class="container text-center bg-primary text-white p-2">
      {{allrounders.run}} | {{allrounders.country}} | {{allrounders.allrounder}}
    </div>
    <!-- end for getters  -->
    <!-- start for actions  -->
    <div class="container text-center my-2">
      <button @click="addRun" class="btn btn-primary px-2">Divide RUN<i class="fas fa-divide"></i></button>
    </div>
    <!-- end for actions  -->
    <div class="container">
      <div class="content">
        <div class="row">
          <h4 class="text-center">My University Friend</h4>
          <div class="col-12 col-md-4 bg-primary text-white p-4 my-3" v-for="myFriend in myFriends" :key="myFriend.id">
            {{myFriend.fname}} | {{myFriend.varsity}}
          </div>
        </div>
      </div>
    </div>
    <!-- start subject  -->
    <div class="container">
      <div class="content">
        <div class="row">
          <h4 class="text-center">My University Course</h4>
          <div class="col-12 col-md-3 bg-primary text-white p-4 my-3" v-for="mySubject in mySubjects" :key="mySubject.id">
            {{mySubject.sname}} | {{mySubject.sir}}
          </div>
        </div>
      </div>
    </div>
    <!-- end subject  -->
    <!-- start todo  -->
    <div class="container">
      <div class="content text-center">
        <h1>Total Books: {{totalBooks}}</h1>
        <input type="text" v-model="bookname">
        <button @click="addBook(bookname)" class="btn btn-primary mx-2"><i class="fas fa-cart-plus"></i></button>
        <div class="row">
          <div class="col-12 col-md-3 bg-primary text-white mx-2 my-2 p-3" v-for="(myBook,index) in myBooks" :key="index">
            {{myBook}}
            <button @click="removeBook(index)" class="mx-5"><i class="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
    <!-- end todo  -->
    <!-- start api  -->
    <!-- end api  -->
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'; 
export default {
  name: 'App',
  data(){
    return {
      bookname: ''
    }
  },
  methods: {
    ...mapActions({
      addRun: "addRun",
      addBook: "addBook",
      removeBook: "removeBook"
    })
  },
  computed: {
    ...mapGetters({
      myAllrounder: "myAllrounder",
      myFriends: "myFriends",
      mySubjects: "mySubjects",
      myBooks: "myBooks",
      totalBooks: "totalBooks"
    })
  }
}
</script>

<style>

</style>