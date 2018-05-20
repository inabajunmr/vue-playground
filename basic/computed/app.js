var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      firstName: "jun",
      lastName: "inaba"
    },
    watch: {
      message: function(){
        console.log("after:" + this.message);
      }
    },
    computed: {
      reverse: function () {
        return this.message.split('').reverse().join('')
      },
      fullName: {
        get: function(){
            return this.firstName + " " + this.lastName;
        },
        set: function(value) {
            var splitName = value.split(" ");
            this.firstName = splitName[0];
            this.lastName = splitName[1];
        }
      }      
    }
})