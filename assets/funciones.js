$( document ).ready(function() {
    //validaciones
    function validaciones(){
        var val=1;
        if($("#inp_num").val().trim()=="" || $.isNumeric($('#inp_num').val())==false){
            val=0;
        }
        return val;
    }

    //calcular factorial
    $("#btn_calcular").on("click",function(){
        if(validaciones()){
            $.ajax({
                type:"POST",
                url:'?c=ejercicio3&m=calcular',
                data: { numero: $("#inp_num").val().trim() },
                success:function(datos){
                    try {
                        alertify.success('Se ha calculado con éxito el factorial');

                        var json=$.parseJSON(datos);
                        
                        //mostrar datos en la vista
                        factorial_tabla(json,$("#inp_num").val().trim());

                        $("#inp_num").val('');
                    } catch (error) {
                       alertify.error('Ha ocurrido un error al calcular el factorial');
                    }
                }
            });
        }else{
            alertify.error("Ingrese un valor valido");
        }
    });

    //mostar resultados en pantalla
    function factorial_tabla(datos,numero){
        var html="<tr>";
            html+="<td>"+numero+"! = "+datos['cadena']+"</td>";
        html+="</tr>";
        html+="<tr>";
            html+="<td>"+numero+"! = "+datos['factorial']+"</td>";
        html+="</tr>";
        $("#tbody_resultado").html(html);
        $("#tabla_resuldado").removeClass('hide');
    }

    $("#btn_limpiar").on("click",function(){
        $("#inp_num").val('');
        $("#tbody_resultado").html('');
        $("#tabla_resuldado").addClass('hide');
    });
    
});