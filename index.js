import { createRouter } from "vue-router";
import subjectView from '../views/subject.vue'
//import HomeView from '../views/...'
//import CalculaterView from '../views/...'
//import NotesView from '../views/...'

const routes = [
  {path:'/', component: SubjectView, name: 'subjects'},
  //{path:'/', component: HomeView, name: 'home'}
]

export default createRouter({
  history: createWebHistory(), // uses
})