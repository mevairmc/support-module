<template>
  <div class="home">
    <newRequest/>
  </div>
</template>

<script>
// @ is an alias to /src
import newRequest from '@/layouts/newRequest'

export default {
  name: 'new',
  components: {
    newRequest
  }
}
</script>
