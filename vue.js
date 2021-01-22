const data = {
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
}

Vue.component('nueva-tarea', {
    template: `<div class="input-group">
    <input type="text" placeholder="Escribe una nueva tarea..." 
    v-model="nuevaTarea"
    class="form-control"
    @keyup.enter="agregartarea()">
    <span class="input-group-btn">
        <button type="button" @click="agregartarea()"
        class="btn btn-primary">Agregar</button>
    </span>
</div>`,
data: function(){
    return data;
},
methods: {
    agregartarea: function(){
        const tarea = this.nuevaTarea.trim()
        if(tarea){
            this.tareas.push({
                texto: tarea,
                terminada: false
            })
        }            
        this.nuevaTarea = ''
    }
}
})

Vue.component('titulo', {
    template:'<h2>{{titulo}}</h2>',
    data: function(){
        return { titulo : '#Lista de Tareas'}
    }
});

const app = new Vue({
    el: '#app',
    data: data,
    methods: {
/*         agregartarea : function(){
            const tarea = this.nuevaTarea.trim()
            if(tarea){
                this.tareas.push({
                    texto: tarea,
                    terminada: false
                })
            }            
            this.nuevaTarea = ''
        }, */
        borrarTarea: function(index){
            this.tareas.splice(index,1)
        }
    }
})