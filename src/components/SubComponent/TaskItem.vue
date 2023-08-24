<template>
  <div :class="{ isCompleted: Task.completed,unCompleted:Task.completed==false }">
   
  <h2>{{Task.title}}</h2>
   <input type="checkbox"  :checked="Task.completed" >
   <button  @click="toggleTask(Task)">toggle</button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
     Task: {
        type: Object
    }
  },
  methods:{
toggleTask() {
      this.$emit('toggle-task', this.Task.id); // Emit an event with the task ID
    }

  }
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
.isCompleted{
  background-color: green !important;
}

.unCompleted{
  background-color: red !important;
}
</style>
