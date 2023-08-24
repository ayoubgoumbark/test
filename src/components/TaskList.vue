<template>
  <div class="hello">
<h2>taskList</h2>

  <TaskItem  :key="index" v-for="(item,index) in data" :Task="item" @toggle-task="toggleTask"/>

  </div>

</template>

<script>
import TaskItem from '..//components/SubComponent/TaskItem';
import ServiceData from "../Services/ServiceData"
export default {
  components:{
    TaskItem
  },
  name: 'TaskList',
 data() {
    return {
data:[]

    }},
  
   methods: {
     toggleTask(taskId) {
      const taskToUpdate = this.data.find(task => task.id === taskId);
      if (taskToUpdate) {
        taskToUpdate.completed = !taskToUpdate.completed;
      }
    },

    getData(){
   ServiceData.getData()
        .then((res) => {
          console.log("rees", res.data);
          this.data = res.data;
        })
        .catch(() => {
         
        });

    }
   },

    mounted() {

      this.getData();
      
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
