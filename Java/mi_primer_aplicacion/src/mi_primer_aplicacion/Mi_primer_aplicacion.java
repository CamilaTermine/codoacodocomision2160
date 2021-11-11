
package mi_primer_aplicacion;

public class Mi_primer_aplicacion {
    
    public static void main(String[] args) {
        int numero;
        String nombre;
        float promedio;
        boolean llueve;
        llueve = false;
        numero = 13;
        int resultado;
        resultado = numero + 19;
        promedio = (numero + 19) / 2;
        System.out.println("Hola esta es mi primer aplicacion! ");
        System.out.println(resultado);
        System.out.println("el promedio es: "+ promedio);
        System.out.println(45>19 && 19<32);
        if (llueve == true){
            System.out.println("Usamos paraguas!!");
        }else{
            System.out.println("No usamos paraguas!");
        }
        Juego jugador = new Juego(0, 3, "Camila", "Maxi", "Tomi");
        System.out.println("Mi nombre es " + jugador.personaje);
        System.out.println("Tengo: "+ jugador.vidas+" vidas");
        System.out.println(jugador.mostrarSaludo());
    }
    
}
