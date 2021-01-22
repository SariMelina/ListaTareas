const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Lista de Tareas',
        tareas: [
            {
                texto : 'Aprender Vue.js',
                terminada: false
            },
            {
                texto : 'Aprender Angular 2',
                terminada: false
            },
            {
                texto : 'Aprender Ionic 2',
                terminada: false
            },
            
        ],
        nuevaTarea: ''
    },
    methods: {
        agregartarea : function(){
            const tarea = this.nuevaTarea.trim()
            if(tarea){
                this.tareas.push({
                    texto: tarea,
                    terminada: false
                })
            }            
            this.nuevaTarea = ''
        },
        borrarTarea: function(index){
            this.tareas.splice(index,1)
        }
    }
})