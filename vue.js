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
});

Vue.component('lista-tarea',{
    template: `<ul class="list-group">
                    <li v-for="(item, index) in tareas" class="list-group-item" v-bind:class="{terminada:item.terminada}">
                        {{item.texto}}
                        <span class="pull-right">
                            <button type="button" 
                            class="btn btn-success btn-xs glyphicon glyphicon-ok"
                            @click="item.terminada = !item.terminada"
                            ></button>

                            <button type="button" 
                            class="btn btn-danger btn-xs glyphicon glyphicon-erase"
                            @click="borrarTarea(index)"
                            ></button>                    
                        </span>             
                        
                    </li>                
                </ul>`,
data: function(){
    return data;
},
methods: {
    borrarTarea: function(index){
        this.tareas.splice(index,1)
    }
}
});

Vue.component('titulo', {
    template:'<h2>{{titulo}}</h2>',
    data: function(){
        return { titulo : '#Lista de Tareas'}
    }
});

const app = new Vue({
    el: '#app',
    data: data
})