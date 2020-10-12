<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        :class="{ 'active': item.status === false, 'done': item.status === true }"
      >
        <span>{{ item.title }}</span>
        <small>{{ item.status === false ? 'active': 'done' }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.VUE_APP_SUPABASE_DB_ID, process.env.VUE_APP_SUPABASE_DB_KEY);

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      items: [],
      loading: true,
    }
  },
  mounted() {
    console.log(supabase)
    this.getItems()
  },
  methods: {
    async getItems() {
      try {
        const items = await supabase
          .from('Items')
          .select('id, title, status')
        this.items = items.body
        // return items.body
      } catch (error) {
          console.log('Error: ', error)
      }
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
  margin: 10px 0;
}
li.done {
  text-decoration: line-through;
}
a {
  color: #42b983;
}
small {
  margin-left: 10px;
}
</style>
