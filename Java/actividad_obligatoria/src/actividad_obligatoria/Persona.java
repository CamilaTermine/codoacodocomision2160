
package actividad_obligatoria;

public class Persona {
    
    String nombre;
    String apellido;
    String edad;
    String hobbie;
    String editorPref;
    String sistOp;
    
    public Persona(String nombre, String apellido, String edad, String hobbie, String editorPref, String sistOp){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.hobbie = hobbie;
        this.editorPref = editorPref;
        this.sistOp = sistOp;
    }
    
    @Override
    public String toString(){
        String mensaje;
        mensaje = "Bienvenido "+ nombre + " " + apellido + "\n "
                + "Usted tiene: " + edad + " años\n "
                + "Su hobbie es: " + hobbie + "\n "
                + "Su editor de codigo preferido es: " + editorPref + "\n "
                + "Usted utiliza: " + sistOp;
                
        
                
        return mensaje;
        
    }
            
}
