package actividad_obligatoria;

import java.util.Scanner;


public class Actividad_obligatoria {

    public static void main(String[] args) {
                
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese su nombre: ");
        String nombre = scanner.nextLine();
        System.out.println("Ingrese su apellido: ");
        String apellido = scanner.nextLine();
        System.out.println("Ingrese su edad: ");
        String edad = scanner.nextLine();
        System.out.println("Ingrese su hobbie: ");
        String hobbie = scanner.nextLine();
        System.out.println("Ingrese su editor de codigo preferido: ");
        String editorPref = scanner.nextLine();
        System.out.println("Ingrese su sistema operativo: ");
        String sistOperativo = scanner.nextLine();
        
        Persona persona = new Persona(nombre, apellido, edad, hobbie, editorPref, sistOperativo);
        System.out.println(persona);
        

    }
    
}
